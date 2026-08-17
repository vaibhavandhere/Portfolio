import * as THREE from "three";

export const handleMouseMove = (
  event: MouseEvent,
  setMousePosition: (x: number, y: number) => void
) => {
  const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  setMousePosition(mouseX, mouseY);
};

export const handleTouchMove = (
  event: TouchEvent,
  setMousePosition: (x: number, y: number) => void
) => {
  const mouseX = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
  const mouseY = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
  setMousePosition(mouseX, mouseY);
};

export const handleTouchEnd = (
  setMousePosition: (
    x: number,
    y: number,
    interpolationX: number,
    interpolationY: number
  ) => void
) => {
  setTimeout(() => {
    setMousePosition(0, 0, 0.03, 0.03);
    setTimeout(() => {
      setMousePosition(0, 0, 0.1, 0.2);
    }, 1000);
  }, 2000);
};

export const handleHeadRotation = (
  headBone: THREE.Object3D,
  mouseX: number,
  mouseY: number,
  interpolationX: number,
  interpolationY: number,
  lerp: (x: number, y: number, t: number) => number
) => {
  if (!headBone) return;
  if (window.scrollY < 400) {
    const maxRotationY = 0.5;
    const maxRotationX = 0.35;
    headBone.rotation.y = lerp(
      headBone.rotation.y,
      mouseX * maxRotationY,
      interpolationY
    );
    headBone.rotation.x = lerp(
      headBone.rotation.x,
      -mouseY * maxRotationX,
      interpolationX
    );
  } else if (window.scrollY < 1800) {
    if (window.innerWidth > 1024) {
      // In About Me: face looking level (-0.02) and towards the text (-0.25) + responsive mouse tracking
      headBone.rotation.x = lerp(headBone.rotation.x, -0.02 - mouseY * 0.15, 0.05);
      headBone.rotation.y = lerp(headBone.rotation.y, -0.25 + mouseX * 0.25, 0.05);
    }
  }
};
