import { Box } from '@chakra-ui/react';
import React, { useRef, useEffect } from 'react';

interface WebGLSetupResult {
  gl: WebGLRenderingContext;
  program: WebGLProgram;
}

const ShaderCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const programRef = useRef<WebGLProgram | null>(null);
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  const vertexShaderSource: string = `
    attribute vec2 position;
    void main() {
      gl_Position = vec4(position, 0.0, 1.0);
    }
  `;

  const fragmentShaderSource: string = `
  precision mediump float;

  uniform vec2 iResolution;
  uniform float iTime;

  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
  }

  float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  vec3 getBaseColor(vec2 uv, float time) {
    float noiseValue = noise(vec2(uv.x, time));
    float distortion = noise(uv + time) * 1.5;
    uv.x += distortion;
    uv.y += noise(uv + vec2(time, time)) * 10.1;

    float gradientFrequency = mix(2.0, 10.0, noiseValue);
    float gradient = fract(uv.x * gradientFrequency + time);
    gradient = pow(gradient, 1.5);

    vec3 blueGreen = vec3(0.2, 0.3, 0.9);
    vec3 darkViolet = vec3(0.3, 0.2, 0.9);
    vec3 lightBlue = vec3(0.6, 0.5, 1.0);

    vec3 bigYellow = vec3(1, 0.85, .32);
    vec3 bigOrange = vec3(.9, 0.45, .12);
    vec3 littleOrange = vec3(0.7, 0.05, .02);
    vec3 black = vec3(0.0);

    vec3 color = mix(black, littleOrange, gradient);
    color = mix(color, bigOrange, smoothstep(0.1, 0.8, gradient));
    color = mix(color, bigYellow, smoothstep(0.1, 0.8, gradient));
    color = mix(color, black, smoothstep(0.985, 1.0, gradient));
    return color;
  }

  float vignette(vec2 uv) {
    uv = uv * 2.0 - 1.0;
    float len = dot(uv, uv);
    return smoothstep(1.5, 0.2, len);
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / iResolution.xy;
    float time = iTime * 0.1;

    float chromaOffset = (-2.5 + random(vec2(-3.5,1))) / iResolution.x;

    vec3 col;
    col.r = getBaseColor(uv + vec2(chromaOffset, 0.0), time).r;
    col.g = getBaseColor(uv, time).g;
    col.b = getBaseColor(uv - vec2(chromaOffset, 0.0), time).b;

    float vig = vignette(uv);
    col *= vig;

    gl_FragColor = vec4(col, 1.0);
  }
`;


  const createShader = (
    gl: WebGLRenderingContext,
    type: number,
    source: string
  ): WebGLShader | null => {
    const shader = gl.createShader(type);
    if (!shader) {
      console.error('Impossible de créer le shader');
      return null;
    }

    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error('Erreur de compilation du shader:', gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }

    return shader;
  };

  const createProgram = (
    gl: WebGLRenderingContext,
    vertexShader: WebGLShader,
    fragmentShader: WebGLShader
  ): WebGLProgram | null => {
    const program = gl.createProgram();
    if (!program) {
      console.error('Impossible de créer le programme WebGL');
      return null;
    }

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Erreur de liaison du programme:', gl.getProgramInfoLog(program));
      gl.deleteProgram(program);
      return null;
    }

    return program;
  };

  const setupWebGL = (): WebGLSetupResult | null => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error('Canvas non disponible');
      return null;
    }

    const gl = canvas.getContext('webgl');
    if (!gl) {
      console.error('WebGL non supporté');
      return null;
    }

    glRef.current = gl;

    // Créer les shaders
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

    if (!vertexShader || !fragmentShader) {
      console.error('Échec de création des shaders');
      return null;
    }

    // Créer le programme
    const program = createProgram(gl, vertexShader, fragmentShader);
    if (!program) {
      console.error('Échec de création du programme');
      return null;
    }

    programRef.current = program;

    // Créer un buffer pour un quad plein écran
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1,
      1, -1,
      -1, 1,
      1, 1,
    ]), gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    return { gl, program };
  };

  const render = (): void => {
    const canvas = canvasRef.current;
    const gl = glRef.current;
    const program = programRef.current;

    if (!canvas || !gl || !program) return;

    // Ajuster la taille du canvas
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    gl.viewport(0, 0, canvas.width, canvas.height);

    // Utiliser le programme
    gl.useProgram(program);

    // Définir les uniforms
    const timeLocation = gl.getUniformLocation(program, 'iTime');
    const resolutionLocation = gl.getUniformLocation(program, 'iResolution');

    const currentTime = (Date.now() - startTimeRef.current) / 1000.0;
    gl.uniform1f(timeLocation, currentTime);
    gl.uniform2f(resolutionLocation, canvas.width, canvas.height);

    // Dessiner
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    animationRef.current = requestAnimationFrame(render);
  };

  useEffect(() => {
    const result = setupWebGL();
    if (result) {
      render();
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <Box width="100%" zIndex={0} overflow="hidden" rounded="xl" >
      <canvas
        ref={canvasRef}
        className="border border-gray-600 rounded-lg shadow-lg"
        style={{ width: `100%`, height: '600px' }}
      />
    </Box>

  );
};

export default ShaderCanvas;