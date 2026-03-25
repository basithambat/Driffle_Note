"use client";

import { useEffect, useRef } from "react";
import clsx from "clsx";

type NoiseOverlayProps = {
  opacity?: number;
  className?: string;
  blendMode?: "overlay" | "soft-light";
};

export function NoiseOverlay({
  opacity = 0.05,
  className,
  blendMode = "overlay",
}: NoiseOverlayProps) {
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;

    const size = 256;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const imageData = ctx.createImageData(size, size);
    const d = imageData.data;
    for (let i = 0; i < d.length; i += 4) {
      const v = (Math.random() * 255) | 0;
      d[i] = d[i + 1] = d[i + 2] = v;
      d[i + 3] = 255;
    }
    ctx.putImageData(imageData, 0, 0);
    el.style.backgroundImage = `url(${canvas.toDataURL()})`;
  }, []);

  return (
    <div
      className={clsx(
        "absolute inset-0 pointer-events-none overflow-hidden rounded-[inherit]",
        className,
      )}
      style={{ opacity, mixBlendMode: blendMode, zIndex: 10 }}
    >
      <div
        ref={innerRef}
        className="absolute inset-[-100%] animate-grain will-change-transform"
      />
    </div>
  );
}
