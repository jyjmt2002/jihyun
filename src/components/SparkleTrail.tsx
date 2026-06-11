import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  maxLife: number;
  life: number;
  color: string;
  angle: number;
  spinSpeed: number;
  type: "star" | "glow" | "sparkle";
}

export const SparkleTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const lastPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    // Handles canvas resizing to fill the viewport safely
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // List of gorgeous, dreamlike color schemes (Y2K pinks, luxury whites, cosmic golds)
    const COLORS = [
      "#FFD6F9", // Candy Pink
      "#FFFFFF", // Pure White Sparkle
      "#FF7096", // Rose Pink
      "#AD009C", // Brand Magenta
      "#FFFBCC", // Soft Magic Yellow
    ];

    // Create a single dreamy sparkle particle
    const createParticle = (x: number, y: number) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 0.8 + 0.2; // Extra slow, elegant drift
      const typeRand = Math.random();
      
      let type: "star" | "glow" | "sparkle" = "star";
      if (typeRand < 0.4) {
        type = "star";
      } else if (typeRand < 0.7) {
        type = "glow";
      } else {
        type = "sparkle";
      }

      const particle: Particle = {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (Math.random() * 0.4 + 0.2), // Upward float
        size: Math.random() * 6 + 4, // Delicate size (4px to 10px) to keep it lightweight & luxurious
        maxLife: Math.random() * 30 + 35, // Lives for 35 to 65 frames
        life: 0,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        angle: Math.random() * Math.PI * 2,
        spinSpeed: (Math.random() - 0.5) * 0.05,
        type,
      };

      particles.push(particle);
    };

    // Listen to mouse moving across screen
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      // Calculate distance between last recorded emission to avoid cluttering particles
      const dx = x - lastPos.current.x;
      const dy = y - lastPos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Only emit if cursor moved at least 8px
      if (distance > 8) {
        createParticle(x, y);
        // Add an extra tiny glowing ember for depth
        if (Math.random() > 0.5) {
          createParticle(x + (Math.random() - 0.5) * 6, y + (Math.random() - 0.5) * 6);
        }
        lastPos.current = { x, y };
      }
    };

    // Support touch devices elegant trails
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const touch = e.touches[0];
      const x = touch.clientX;
      const y = touch.clientY;

      const dx = x - lastPos.current.x;
      const dy = y - lastPos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 10) {
        createParticle(x, y);
        lastPos.current = { x, y };
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    // Drawing helpers for 4-point magical stars and glowing nodes
    const drawStar = (
      c: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      size: number,
      color: string,
      opacity: number,
      angle: number
    ) => {
      c.save();
      c.translate(cx, cy);
      c.rotate(angle);
      c.globalAlpha = opacity;
      c.fillStyle = color;
      
      // Draw 4-point sparkle
      c.beginPath();
      c.moveTo(0, -size);
      c.quadraticCurveTo(0, 0, size, 0);
      c.quadraticCurveTo(0, 0, 0, size);
      c.quadraticCurveTo(0, 0, -size, 0);
      c.quadraticCurveTo(0, 0, 0, -size);
      c.closePath();
      c.fill();
      c.restore();
    };

    const drawGlow = (
      c: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      size: number,
      color: string,
      opacity: number
    ) => {
      c.save();
      c.globalAlpha = opacity;
      const grad = c.createRadialGradient(cx, cy, 0, cx, cy, size * 1.5);
      grad.addColorStop(0, color);
      grad.addColorStop(0.3, color);
      grad.addColorStop(1, "rgba(255, 255, 255, 0)");
      c.beginPath();
      c.arc(cx, cy, size * 1.5, 0, Math.PI * 2);
      c.fillStyle = grad;
      c.fill();
      c.restore();
    };

    // Animation render loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Filter and update particles
      particles = particles.filter((p) => {
        p.life++;
        if (p.life >= p.maxLife) return false;

        // Progress ratios
        const lifeRatio = p.life / p.maxLife;
        const opacity = Math.sin((1 - lifeRatio) * Math.PI); // Smooth envelope: fade in & fade out elegantly

        // Physics updates
        p.x += p.vx;
        p.y += p.vy;
        p.angle += p.spinSpeed;

        // Slow deceleration
        p.vx *= 0.98;
        p.vy *= 0.98;

        // Render based on custom sparkle types
        if (p.type === "star") {
          drawStar(ctx, p.x, p.y, p.size, p.color, opacity, p.angle);
        } else if (p.type === "glow") {
          drawGlow(ctx, p.x, p.y, p.size * 0.8, p.color, opacity * 0.6);
        } else {
          // Classic 4 pointed thin diamond sparkle
          drawStar(ctx, p.x, p.y, p.size * 0.6, "#FFFFFF", opacity, p.angle + Math.PI / 4);
        }

        return true;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[9999]/90"
      style={{
        zIndex: 9999,
        mixBlendMode: "screen", // Blends gorgeous shiny glows together beautifully
      }}
    />
  );
};
