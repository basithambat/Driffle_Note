"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type HeroInteractiveImageProps = {
  src: string;
  alt?: string;
};

const MAX_TILT_DEG = 1.5;
const SCALE_HOVER = 1.012;
const PERSPECTIVE = 1400;
const LERP = 0.08;

export function HeroInteractiveImage({ src, alt = "" }: HeroInteractiveImageProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  const target = useRef({ rotX: 0, rotY: 0, scale: 1 });
  const current = useRef({ rotX: 0, rotY: 0, scale: 1 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const tick = useCallback(() => {
    const c = current.current;
    const t = target.current;
    c.rotX += (t.rotX - c.rotX) * LERP;
    c.rotY += (t.rotY - c.rotY) * LERP;
    c.scale += (t.scale - c.scale) * LERP;

    const inner = innerRef.current;
    if (inner) {
      inner.style.transform = `perspective(${PERSPECTIVE}px) rotateX(${c.rotX}deg) rotateY(${c.rotY}deg) scale(${c.scale})`;
    }

    const doneEnough =
      Math.abs(t.rotX - c.rotX) < 0.001 &&
      Math.abs(t.rotY - c.rotY) < 0.001 &&
      Math.abs(t.scale - c.scale) < 0.0001;

    if (!doneEnough) {
      rafId.current = requestAnimationFrame(tick);
    }
  }, []);

  const startLoop = useCallback(() => {
    cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(tick);
  }, [tick]);

  useEffect(() => {
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reduceMotion) return;
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      target.current.rotY = x * MAX_TILT_DEG * 2;
      target.current.rotX = -y * MAX_TILT_DEG * 2;
      target.current.scale = SCALE_HOVER;
      startLoop();
    },
    [reduceMotion, startLoop],
  );

  const handleEnter = useCallback(() => {
    if (reduceMotion) return;
    target.current.scale = SCALE_HOVER;
    startLoop();
  }, [reduceMotion, startLoop]);

  const handleLeave = useCallback(() => {
    if (reduceMotion) return;
    target.current.rotX = 0;
    target.current.rotY = 0;
    target.current.scale = 1;
    startLoop();
  }, [reduceMotion, startLoop]);

  return (
    <div
      ref={wrapRef}
      data-name="image 13"
      className="absolute inset-0 overflow-hidden rounded-[inherit]"
      onMouseEnter={reduceMotion ? undefined : handleEnter}
      onMouseMove={reduceMotion ? undefined : handleMove}
      onMouseLeave={reduceMotion ? undefined : handleLeave}
    >
      <div
        ref={innerRef}
        className="absolute inset-0 size-full origin-center will-change-transform"
      >
        <img
          alt={alt}
          className="absolute inset-0 size-full object-cover pointer-events-none select-none"
          src={src}
          draggable={false}
        />
      </div>
    </div>
  );
}
