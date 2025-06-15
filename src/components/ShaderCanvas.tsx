import { Box, Button, Heading, Link, Text } from '@chakra-ui/react';
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

    const float arrow_density = 4.5;
    const float arrow_length = 0.45;
    const int iterationTime1 = 20;
    const int iterationTime2 = 20;
    const float scale = 6.0;
    const float velocity_x = 0.1;
    const float velocity_y = 0.2;
    const float mode_2_speed = 2.5;
    const float mode_1_detail = 200.0;
    const float mode_1_twist = 50.0;

    float f(in vec2 p) {
      return sin(p.x + sin(p.y + iTime * velocity_x)) * sin(p.y * p.x * 0.1 + iTime * velocity_y);
    }

    struct Field {
      vec2 vel;
      vec2 pos;
    };

    Field field(in vec2 p, in int mode) {
      Field fld;
      if(mode == 0) {
        vec2 ep = vec2(0.05, 0.0);
        vec2 rz = vec2(0.0);
        
        for(int i = 0; i < 20; i++) {
          float t0 = f(p);
          float t1 = f(p + ep.xy);
          float t2 = f(p + ep.yx);
          vec2 g = vec2((t1 - t0), (t2 - t0)) / ep.xx;
          vec2 t = vec2(-g.y, g.x);
          
          p += (mode_1_twist * 0.01) * t + g * (1.0 / mode_1_detail);
          p.x = p.x + sin(iTime * mode_2_speed / 10.0) / 15.0;
          p.y = p.y + cos(iTime * mode_2_speed / 10.0) / 15.0;
          rz = g;
        }
        fld.vel = rz;
        return fld;
      }
      
      if(mode == 1) {
        vec2 ep = vec2(0.05, 0.0);
        vec2 rz = vec2(0.0);
        
        for(int i = 0; i < 20; i++) {
          float t0 = f(p);
          float t1 = f(p + ep.xy);
          float t2 = f(p + ep.yx);
          vec2 g = vec2((t1 - t0), (t2 - t0)) / ep.xx;
          vec2 t = vec2(-g.y, g.x);
          
          p += (mode_1_twist * 0.01) * t + g * (1.0 / mode_1_detail);
          p.x = p.x + sin(iTime * mode_2_speed / 10.0) / 10.0;
          p.y = p.y + cos(iTime * mode_2_speed / 10.0) / 10.0;
          rz = g;
        }
        
        fld.vel = rz;
        
        for(int i = 1; i < 20; i++) {
          p.x += 0.3 / float(i) * sin(float(i) * 3.0 * p.y + iTime * mode_2_speed) + 0.5;
          p.y += 0.3 / float(i) * cos(float(i) * 3.0 * p.x + iTime * mode_2_speed) + 0.5;
        }
        fld.pos = p;
        return fld;
      }
      
      return fld;
    }

    float segm(in vec2 p, in vec2 a, in vec2 b) {
      vec2 pa = p - a;
      vec2 ba = b - a;
      float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
      return length(pa - ba * h) * 20.0 * arrow_density;
    }

    float fieldviz(in vec2 p, in int mode) {
      vec2 ip = floor(p * arrow_density) / arrow_density + 0.5 / arrow_density;
      vec2 t = field(ip, mode).vel;
      float m = min(0.1, pow(length(t), 0.5) * (arrow_length / arrow_density));
      vec2 b = normalize(t) * m;
      float rz = segm(p, ip, ip + b);
      vec2 prp = vec2(-b.y, b.x);
      rz = min(rz, segm(p, ip + b, ip + b * 0.65 + prp * 0.3));
      return clamp(min(rz, segm(p, ip + b, ip + b * 0.65 - prp * 0.3)), 0.0, 1.0);
    }

    vec3 getRGB(in Field fld, in int mode) {
      if(mode == 0) {
        vec2 p = fld.vel;
        vec3 origCol = vec3(p * 0.5 + 0.5, 1.5);
        return origCol;
      }
      
      if(mode == 1) {
        vec2 p = fld.pos;
        float r = cos(p.x + p.y + 1.5) * 1.5 + 1.5;
        float g = sin(p.x + p.y + 1.0) * 0.1 + 0.1;
        float b = (sin(p.x + p.y) + cos(p.x + p.y)) * 0.3 + 0.5;
        return vec3(r, g, b);
      }
      
      return vec3(1.0);
    }

    void main() {
      vec2 p = gl_FragCoord.xy / iResolution.xy - 0.5;
      p.x *= iResolution.x / iResolution.y;
      p *= scale;
      
      int vector_mode = 0;
      Field fld = field(p, vector_mode);
      vec3 col = getRGB(fld, vector_mode) * 0.85;
      
      gl_FragColor = vec4(col, 1.2);
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
    <Box position='relative' >
      <Box width="100%" zIndex={-1} overflow="hidden" rounded="xl" position="absolute" top={0} left={0} >
        <canvas
          ref={canvasRef}
          className="border border-gray-600 rounded-lg shadow-lg"
          style={{ width: `100%`, height: '600px' }}
        />
      </Box>
      <Box h="600px" padding={12} >
        <Heading size="7xl" fontSize="8xl" color="black" zIndex={2} >Mamba Labs</Heading>
        <Text fontSize="2xs" color="gray.500"  >
          Original implementation :
          <Link href="https://www.shadertoy.com/view/dsXyzf" color="gray.400" variant="underline"  >{" "}purple-blue liquid gradient</Link>
        </Text>
      </Box>
    </Box>
  );
};

export default ShaderCanvas;