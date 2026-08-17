import * as THREE from "three";
import { GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";



function filterHumanoidClip(
  clip: THREE.AnimationClip,
  hipsYOffset: number = 0,
  neckAngleDeg: number = 24
) {
  const neckQuatOffset = new THREE.Quaternion().setFromAxisAngle(
    new THREE.Vector3(1, 0, 0),
    THREE.MathUtils.degToRad(-neckAngleDeg)
  );

  clip.tracks = clip.tracks.filter((track) => {
    if (track.name.endsWith(".quaternion") || track.name.endsWith(".rotation")) {
      const lowerName = track.name.toLowerCase();
      if (neckAngleDeg !== 0 && (lowerName.includes("neck") || lowerName.includes("head"))) {
        const q = new THREE.Quaternion();
        for (let i = 0; i < track.values.length; i += 4) {
          q.set(track.values[i], track.values[i + 1], track.values[i + 2], track.values[i + 3]);
          q.multiply(neckQuatOffset);
          track.values[i] = q.x;
          track.values[i + 1] = q.y;
          track.values[i + 2] = q.z;
          track.values[i + 3] = q.w;
        }
      }
      return true;
    }
    if (track.name.toLowerCase().includes("hips.position") || track.name.toLowerCase().includes("hips.translation")) {
      if (hipsYOffset !== 0) {
        for (let i = 1; i < track.values.length; i += 3) {
          track.values[i] += hipsYOffset;
        }
      }
      return true;
    }
    return false;
  });
  return clip;
}

export interface LoadedCharacterResult {
  gltf: GLTF;
  mixer: THREE.AnimationMixer;
  avatarHead: THREE.Object3D | null;
}

export let globalMixer: THREE.AnimationMixer | null = null;
export let typingActionRef: THREE.AnimationAction | null = null;
export let avatarRef: THREE.Object3D | null = null;

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();

  const loadCharacter = () => {
    return new Promise<LoadedCharacterResult | null>(async (resolve, reject) => {
      try {
        // 1. Load clean desk, laptop, keyboard, screenlight, chair from desk.glb (zero character meshes)
        const gltf = await loader.loadAsync("/models/desk.glb");
        const character = gltf.scene;

        character.traverse((child: any) => {
          if (child.isMesh || child.isSkinnedMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        // 2. Load photorealistic avatar model.glb (hair, face, outfit, shoes)
        const avatarGltf = await loader.loadAsync("/models/model.glb");
        const newAvatar = avatarGltf.scene;
        newAvatar.scale.set(7.2, 7.2, 7.2);
        newAvatar.position.set(0, 3.35, -0.6);

        newAvatar.traverse((child: any) => {
          if (child.isMesh || child.isSkinnedMesh) {
            child.visible = true;
            child.castShadow = false;
            child.receiveShadow = false;
            child.frustumCulled = false;

            if (child.material) {
              const mat = child.material;
              const name = (child.name + " " + (mat.name || "")).toLowerCase();
              if (name.includes("hair")) {
                mat.transparent = true;
                mat.alphaTest = 0.5;
                mat.depthWrite = true;
                mat.depthTest = true;
                mat.polygonOffset = true;
                mat.polygonOffsetFactor = -1;
                mat.polygonOffsetUnits = -4;
                mat.needsUpdate = true;
              }
            }
          }
        });

        character.add(newAvatar);
        avatarRef = newAvatar;
        const avatarHead = newAvatar.getObjectByName("Head") || null;

        // 3. Load Sitting & Typing animation from Typing.glb
        const mixer = new THREE.AnimationMixer(newAvatar);
        globalMixer = mixer;

        try {
          const typingGltf = await loader.loadAsync("/models/Typing.glb");
          if (typingGltf.animations && typingGltf.animations.length > 0) {
            const typingClip = filterHumanoidClip(typingGltf.animations[0].clone(), 0.35);
            const typingAction = mixer.clipAction(typingClip);
            typingActionRef = typingAction;
            typingAction.setEffectiveWeight(1.0);
            typingAction.play();
            typingAction.paused = true;
          }
        } catch (e) {
          console.warn("Typing.glb load notice:", e);
        }

        // 4. Load and place the Anti slide strip (TPU) footrest beneath the feet and between desk legs
        try {
          const stripGltf = await loader.loadAsync("/models/Anti slide strip (TPU).glb");
          const strip = stripGltf.scene;

          // Center strip geometry
          const box = new THREE.Box3().setFromObject(strip);
          const center = box.getCenter(new THREE.Vector3());
          strip.position.sub(center);

          const stripWrapper = new THREE.Group();
          stripWrapper.add(strip);

          // Scale and place directly below the feet of the avatar
          stripWrapper.scale.set(0.026, 0.054, 0.040);
          stripWrapper.position.set(0.25, 3.35, 2.85);
          stripWrapper.rotation.set(0, 0, 0);

          strip.traverse((child: any) => {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
              if (child.material) {
                child.material = new THREE.MeshStandardMaterial({
                  color: 0xffffff,
                  roughness: 0.4,
                  metalness: 0.1,
                });
              }
            }
          });

          character.add(stripWrapper);
        } catch (e) {
          console.warn("Anti slide strip load notice:", e);
        }

        // Force immediate evaluation so avatar is instantly posed sitting at the desk
        mixer.update(0);

        await renderer.compileAsync(character, camera, scene);
        resolve({ gltf, mixer, avatarHead });
        setCharTimeline(character, camera);
        setAllTimeline();
      } catch (err) {
        console.error("Error setting up character:", err);
        reject(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
