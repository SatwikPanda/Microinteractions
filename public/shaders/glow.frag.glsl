uniform vec3 glowColor; 
uniform float intensity;

varying vec3 vNormal;
varying vec3 vViewDir;


void main() {
    float fresnel = dot(vNormal, vViewDir);
    float glow = pow(1.0 - fresnel, 3.0) * intensity;
    
    gl_FragColor = vec4(glowColor * glow, glow);
}