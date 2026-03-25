"use client";

import { useEffect, useRef } from 'react';

type NoiseOverlayProps = {
  opacity?: number;
  scale?: number;
  fps?: number;
};

export function NoiseOverlay({ opacity = 0.3, scale = 0.25, fps = 30 }: NoiseOverlayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Set canvas size to match container
    const updateSize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);

    // Create noise texture
    const createNoiseTexture = (size: number): HTMLCanvasElement => {
      const noiseCanvas = document.createElement('canvas');
      noiseCanvas.width = size;
      noiseCanvas.height = size;
      const noiseCtx = noiseCanvas.getContext('2d');
      if (!noiseCtx) return noiseCanvas;

      const imageData = noiseCtx.createImageData(size, size);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 255;
        data[i] = noise;     // R
        data[i + 1] = noise; // G
        data[i + 2] = noise; // B
        data[i + 3] = 255;   // A
      }

      noiseCtx.putImageData(imageData, 0, 0);
      return noiseCanvas;
    };

    // Create halftone/dot pattern texture
    const createHalftoneTexture = (size: number, dotSize: number): HTMLCanvasElement => {
      const halftoneCanvas = document.createElement('canvas');
      halftoneCanvas.width = size;
      halftoneCanvas.height = size;
      const halftoneCtx = halftoneCanvas.getContext('2d');
      if (!halftoneCtx) return halftoneCanvas;

      halftoneCtx.fillStyle = '#000';
      
      const spacing = size / 4;
      for (let x = 0; x < size; x += spacing) {
        for (let y = 0; y < size; y += spacing) {
          halftoneCtx.beginPath();
          halftoneCtx.arc(x + spacing / 2, y + spacing / 2, dotSize, 0, Math.PI * 2);
          halftoneCtx.fill();
        }
      }

      return halftoneCanvas;
    };

    // Generate textures
    const noiseTexture = createNoiseTexture(128);
    const halftoneTexture = createHalftoneTexture(64, 1);

    // Create repeating patterns
    const noisePattern = ctx.createPattern(noiseTexture, 'repeat');
    const halftonePattern = ctx.createPattern(halftoneTexture, 'repeat');

    let frame = 0;
    let lastTime = performance.now();
    const frameInterval = 1000 / fps;

    // Animation loop
    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;

      if (deltaTime >= frameInterval) {
        lastTime = currentTime - (deltaTime % frameInterval);

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Base gray fill
        ctx.fillStyle = '#777';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Apply noise pattern with scale
        if (noisePattern) {
          ctx.save();
          ctx.scale(scale, scale);
          ctx.fillStyle = noisePattern;
          ctx.globalAlpha = 0.5;
          ctx.fillRect(0, 0, canvas.width / scale, canvas.height / scale);
          ctx.restore();
        }

        // Apply halftone pattern
        if (halftonePattern) {
          ctx.save();
          ctx.fillStyle = halftonePattern;
          ctx.globalAlpha = 0.15;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.restore();
        }

        // Optional: subtle rotation animation
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate((frame * 0.001) % (Math.PI * 2));
        ctx.translate(-canvas.width / 2, -canvas.height / 2);
        ctx.restore();

        frame++;
      }

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', updateSize);
    };
  }, [opacity, scale, fps]);

  return (
    <div 
      className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden"
      style={{ 
        opacity,
        mixBlendMode: 'overlay',
        zIndex: 10
      }}
    >
      <canvas 
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: 'block' }}
      />
    </div>
  );
}
