"use client";

import { motion, useTransform, type MotionValue } from "motion/react";

type HeroVisualProps = {
  scrollProgress: MotionValue<number>;
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
  proximity: MotionValue<number>;
};

export function HeroVisual({ scrollProgress, pointerX, pointerY, proximity }: HeroVisualProps) {
  const transitionPhase = (scroll: number) => Math.min(1, Math.max(0, (scroll - 0.04) / 0.66));

  const machineX = useTransform([scrollProgress, pointerX, proximity], (values) => {
    const [scroll, pointer, near] = values as [number, number, number];
    return transitionPhase(scroll) * -230 + pointer * 5 + near * 7;
  });
  const humanX = useTransform([scrollProgress, pointerX, proximity], (values) => {
    const [scroll, pointer, near] = values as [number, number, number];
    return transitionPhase(scroll) * 230 - pointer * 7 - near * 7;
  });
  const machineY = useTransform([scrollProgress, pointerY], (values) => {
    const [scroll, pointer] = values as [number, number];
    return transitionPhase(scroll) * 12 + pointer * 3;
  });
  const humanY = useTransform([scrollProgress, pointerY], (values) => {
    const [scroll, pointer] = values as [number, number];
    return transitionPhase(scroll) * 18 + pointer * 4;
  });
  const machineRotate = useTransform(scrollProgress, (scroll) => transitionPhase(scroll) * -3.2);
  const humanRotate = useTransform(scrollProgress, (scroll) => transitionPhase(scroll) * 2.5);

  return (
    <div className="hands-stage is-ready" role="img" aria-label="机械手与真人手的指尖即将相触，象征人与 AI 协作">
      <motion.div className="hand-layer hand-machine" style={{ x: machineX, y: machineY, rotate: machineRotate }}>
        <div className="hand-intro hand-intro-machine">
          <img
            className="hand-canvas"
            src="/images/human-ai-machine.png"
            alt=""
            width="886"
            height="941"
            draggable="false"
          />
        </div>
      </motion.div>
      <motion.div className="hand-layer hand-human" style={{ x: humanX, y: humanY, rotate: humanRotate }}>
        <div className="hand-intro hand-intro-human">
          <img
            className="hand-canvas"
            src="/images/human-ai-human.png"
            alt=""
            width="786"
            height="941"
            draggable="false"
          />
        </div>
      </motion.div>
    </div>
  );
}
