"use strict";

const cursorEffect = document.createElement("div");
cursorEffect.className = "cursor-effect";
document.body.appendChild(cursorEffect);

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let hasMouseMoved = false;
let animationFrameId = null;

const handleMouseMove = (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  if (!hasMouseMoved) {
    hasMouseMoved = true;
    cursorX = mouseX;
    cursorY = mouseY;
    cursorEffect.style.left = cursorX + "px";
    cursorEffect.style.top = cursorY + "px";
    cursorEffect.style.opacity = "1";
  }
};

document.addEventListener("mousemove", handleMouseMove, { passive: true });

const animate = () => {
  cursorX += (mouseX - cursorX) * 0.15;
  cursorY += (mouseY - cursorY) * 0.15;

  cursorEffect.style.left = cursorX + "px";
  cursorEffect.style.top = cursorY + "px";

  animationFrameId = requestAnimationFrame(animate);
};

animate();

window.addEventListener("beforeunload", () => {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId);
  }

  document.removeEventListener("mousemove", handleMouseMove);
});
