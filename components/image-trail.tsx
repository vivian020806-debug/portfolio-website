"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type ImageTrailProps = {
  images: string[];
  enabled: boolean;
};

type TrailItem = {
  id: number;
  image: string;
  x: number;
  y: number;
  rotate: number;
};

export function ImageTrail({ images, enabled }: ImageTrailProps) {
  const [items, setItems] = useState<TrailItem[]>([]);
  const lastPoint = useRef({ x: 0, y: 0 });
  const imageIndex = useRef(0);
  const itemId = useRef(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!enabled || reducedMotion || images.length === 0) {
      setItems([]);
      return;
    }

    const finePointer = window.matchMedia("(pointer: fine)");
    if (!finePointer.matches) return;

    const handlePointerMove = (event: PointerEvent) => {
      if (window.scrollY > window.innerHeight * 0.42) return;
      const distance = Math.hypot(event.clientX - lastPoint.current.x, event.clientY - lastPoint.current.y);
      if (distance < 72) return;

      lastPoint.current = { x: event.clientX, y: event.clientY };
      const id = itemId.current++;
      const image = images[imageIndex.current++ % images.length];
      const rotate = ((id * 17) % 15) - 7;

      setItems((current) => [
        ...current.slice(-5),
        { id, image, x: event.clientX, y: event.clientY, rotate },
      ]);

      window.setTimeout(() => {
        setItems((current) => current.filter((item) => item.id !== id));
      }, 880);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [enabled, images, reducedMotion]);

  return (
    <div className="image-trail-layer" aria-hidden="true">
      <AnimatePresence>
        {items.map((item) => (
          <motion.img
            className="trail-image"
            src={item.image}
            alt=""
            key={item.id}
            initial={{ opacity: 0, scale: 0.84, rotate: item.rotate - 3 }}
            animate={{ opacity: 0.76, scale: 1, rotate: item.rotate }}
            exit={{ opacity: 0, scale: 0.94, y: -18, rotate: item.rotate + 2 }}
            transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
            style={{ left: item.x, top: item.y }}
            draggable={false}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
