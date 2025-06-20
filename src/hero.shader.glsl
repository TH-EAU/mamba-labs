// Fonction de bruit simple pour introduire de l'aléatoire
float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

// Fonction de bruit pour perturber les coordonnées
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

// Fonction pour générer une couleur de base à partir d'UV
vec3 getBaseColor(vec2 uv, float time) {
    float noiseValue = noise(vec2(uv.x, time));
    float distortion = noise(uv + time) * 1.5;
    uv.x += distortion;
    uv.y += noise(uv + vec2(time, time)) * 10.1;

    float gradientFrequency = mix(2.0, 10.0, noiseValue);
    float gradient = fract(uv.x * gradientFrequency + time);
    gradient = pow(gradient, 2.0);

    vec3 blueGreen = vec3(0.2, 0.3, 0.9);
    vec3 darkViolet = vec3(0.3, 0.2, 0.9);
    vec3 lightBlue = vec3(0.6, 0.5, 1.0);
    vec3 black = vec3(0.0);

    vec3 color = mix(black, blueGreen, gradient);
    color = mix(color, darkViolet, smoothstep(0.1, 0.6, gradient));
    color = mix(color, lightBlue, smoothstep(0.2, 0.9, gradient));
    color = mix(color, black, smoothstep(0.985, 1.0, gradient));
    return color;
}

// Fonction de vignette (assombrissement progressif vers les bords)
float vignette(vec2 uv) {
    uv = uv * 2.0 - 1.0; // Remap [0,1] -> [-1,1]
    float len = dot(uv, uv); // Distance carrée au centre
    return smoothstep(1.5, 0.2, len); // Inverser pour assombrir les bords
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    float time = iTime * 0.1;

    float chromaOffset = -2.5 / iResolution.x;

    // Générer chaque canal avec décalage chromatique
    vec3 col;
    col.r = getBaseColor(uv + vec2(chromaOffset, 0.0), time).r;
    col.g = getBaseColor(uv, time).g;
    col.b = getBaseColor(uv - vec2(chromaOffset, 0.0), time).b;

    // Ajouter l'effet vignette
    float vig = vignette(uv);
    col *= vig;

    // Ajouter un léger bruit temporel
    float grain = (random(fragCoord.xy + iTime * 20.0) - 0.5) * 0.09; // léger grain [-0.02, 0.02]
    col += grain;

    fragColor = vec4(col, 1.0);
}
