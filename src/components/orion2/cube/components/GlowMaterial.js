import * as T from "three";

// import vertexShader from "../shaders/glow.vert.glsl";
// import fragmentShader from "../shaders/glow.frag.glsl";
export default function createGlowMaterial() {
  const vertexShader = `
    varying vec3 vNormal;
    varying vec3 vViewDir;

    void main () {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);

        vNormal = normalize(normalMatrix * normal);
        vViewDir = normalize(cameraPosition - worldPosition.xyz);

        gl_Position = projectionMatrix * viewMatrix * worldPosition;
    }
    `;
  const fragmentShader = `
    uniform vec3 glowColor;
    uniform float intensity;

    varying vec3 vNormal;
    varying vec3 vViewDir;


    void main() {
        float fresnel = dot(vNormal, vViewDir);
        float glow = pow(1.0 - fresnel, 3.0) * intensity;

        gl_FragColor = vec4(glowColor * glow, glow);
    }
  `;

  const material = new T.ShaderMaterial({
    uniforms: {
      glowColor: { value: new T.Color(0xff0000) },
      intensity: { value: 1.5 },
    },

    vertexShader,
    fragmentShader,
    transparent: true,
    blending: T.AdditiveBlending,
    depthWrite: false,
  });
  
  const basicMaterial = new T.MeshBasicMaterial({
    color: 0x0000ff
  })

  return basicMaterial;
}
