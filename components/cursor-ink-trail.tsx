"use client";

import { useEffect, useRef } from "react";

type Stroke = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  createdAt: number;
};

export function CursorInkTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let strokes: Stroke[] = [];
    let previous: { x: number; y: number; time: number } | null = null;
    let frameId = 0;
    const lifetime = 760;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * ratio;
      canvas.height = window.innerHeight * ratio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const move = (event: PointerEvent) => {
      if (event.pointerType && event.pointerType !== "mouse") return;

      const now = performance.now();
      if (previous) {
        const dx = event.clientX - previous.x;
        const dy = event.clientY - previous.y;
        const distance = Math.hypot(dx, dy);
        const speed = distance / Math.max(now - previous.time, 1);

        if (speed > 0.58 && distance > 7 && distance < 110) {
          strokes.push({
            x1: previous.x,
            y1: previous.y,
            x2: event.clientX,
            y2: event.clientY,
            createdAt: now,
          });
        }
      }
      previous = { x: event.clientX, y: event.clientY, time: now };
    };

    const draw = (now: number) => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      strokes = strokes.filter((stroke) => now - stroke.createdAt < lifetime);
      context.lineCap = "round";
      context.lineWidth = 0.72;

      for (const stroke of strokes) {
        const age = (now - stroke.createdAt) / lifetime;
        context.strokeStyle = `rgba(235, 231, 220, ${(1 - age) * 0.24})`;
        context.beginPath();
        context.moveTo(stroke.x1, stroke.y1);
        context.quadraticCurveTo(
          (stroke.x1 + stroke.x2) / 2 + 1.5,
          (stroke.y1 + stroke.y2) / 2 - 1,
          stroke.x2,
          stroke.y2,
        );
        context.stroke();
      }

      frameId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", move, { passive: true });
    frameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", move);
    };
  }, []);

  return <canvas ref={canvasRef} className="cursor-ink-trail" aria-hidden="true" />;
}
