"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, HelpCircle, RotateCw } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function NotFound() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState<{ x: number | null; y: number | null }>({
    x: null,
    y: null,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Handle resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle class definition
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseRadius: number;
      color: string;
      alpha: number;
      pulseSpeed: number;
      pulseTime: number;
    }

    const particles: Particle[] = [];
    const particleCount = Math.min(60, Math.floor((width * height) / 25000));

    // Colors: sleek neon violet, cyan, indigo, and soft whites
    const colors = [
      "rgba(168, 85, 247, ", // Violet
      "rgba(6, 182, 212, ", // Cyan
      "rgba(99, 102, 241, ", // Indigo
      "rgba(255, 255, 255, ", // White
    ];

    const createParticle = (
      x?: number,
      y?: number,
      isClick = false,
    ): Particle => {
      const px = x ?? Math.random() * width;
      const py = y ?? Math.random() * height;
      const angle = Math.random() * Math.PI * 2;
      const speed = isClick ? Math.random() * 2 + 1 : Math.random() * 0.4 + 0.1;
      const baseRadius = Math.random() * 1.5 + 1;

      return {
        x: px,
        y: py,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: baseRadius,
        baseRadius,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: isClick ? 1.0 : Math.random() * 0.5 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        pulseTime: Math.random() * Math.PI * 2,
      };
    };

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle());
    }

    // Keep track of cursor interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      setMouse({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleMouseLeave = () => {
      setMouse({ x: null, y: null });
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      // Spawn temporary explosive particles
      for (let i = 0; i < 12; i++) {
        const p = createParticle(clickX, clickY, true);
        particles.push(p);
      }

      // Cap particles if too many
      if (particles.length > 150) {
        particles.splice(0, particles.length - 150);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
      container.addEventListener("click", handleClick);
    }

    // Animation Loop
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint grid background for a tech feel
      ctx.strokeStyle = "rgba(255, 255, 255, 0.015)";
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update and draw particles
      particles.forEach((p, index) => {
        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce/Wrap boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Apply decay to clicked particles
        if (p.alpha > 0.8 && p.vx !== 0) {
          p.alpha -= 0.015;
          p.vx *= 0.98;
          p.vy *= 0.98;
        }

        // Pulse size slightly
        p.pulseTime += p.pulseSpeed;
        p.radius = p.baseRadius + Math.sin(p.pulseTime) * 0.5;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.alpha + ")";
        ctx.fill();

        // Connect to other nearby particles
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          const maxDist = 120;

          if (dist < maxDist) {
            const lineAlpha =
              (1 - dist / maxDist) * 0.12 * Math.min(p.alpha, p2.alpha);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(147, 197, 253, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Connect to mouse pointer
        if (mouse.x !== null && mouse.y !== null) {
          const mDist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
          const maxMouseDist = 180;

          if (mDist < maxMouseDist) {
            const mouseAlpha = (1 - mDist / maxMouseDist) * 0.25 * p.alpha;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(168, 85, 247, ${mouseAlpha})`; // Glowing violet lines to cursor
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Clean up dead clicked particles
        if (p.alpha <= 0.05 && p.vx !== 0) {
          particles.splice(index, 1);
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
        container.removeEventListener("click", handleClick);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouse]);

  const handleRefresh = () => {
    window.location.href = "/";
  };

  const handleGoBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-slate-950 font-sans text-slate-200 select-none flex flex-col justify-between"
    >
      {/* Background Interactive Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none block z-0"
      />

      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse duration-[8s]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse duration-[10s]" />

      {/* Header */}
      <header className="relative z-10 px-8 py-6 flex items-center justify-between border-b border-white/4 bg-slate-950/30 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-linear-to-tr from-purple-600 to-cyan-500 flex items-center justify-center font-bold text-white text-sm shadow-[0_0_15px_-3px_rgba(168,85,247,0.5)]">
            Q
          </div>
          <span className="font-semibold tracking-wide text-white text-base">
            Qwintly{" "}
            <span className="text-xs text-cyan-400 font-mono ml-1 px-1.5 py-0.5 rounded bg-cyan-950/40 border border-cyan-800/30">
              Preview
            </span>
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-ping" />
          <span>Renderer Node Active</span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center p-6 text-center max-w-4xl mx-auto">
        <div className="space-y-8 max-w-lg">
          {/* Visual Orbit Illustration */}
          <div className="relative mx-auto w-32 h-32 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-dashed border-slate-700/50 animate-[spin_40s_linear_infinite]" />
            <div className="absolute inset-2 rounded-full border border-purple-500/20 animate-[spin_25s_linear_infinite]" />
            <div className="absolute inset-6 rounded-full border border-cyan-500/20 animate-[spin_15s_linear_infinite_reverse]" />

            {/* Pulsing center radar node */}
            <div className="relative flex items-center justify-center h-16 w-16 rounded-full bg-slate-900 border border-white/8 shadow-inner">
              <HelpCircle className="h-8 w-8 text-cyan-400 animate-bounce duration-[3s]" />
              <div className="absolute -inset-1 rounded-full bg-linear-to-tr from-purple-500/10 to-cyan-500/10 blur-sm pointer-events-none" />
            </div>
          </div>

          {/* Glowing 404 Text */}
          <div className="relative inline-block select-none">
            <h1 className="text-8xl md:text-9xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-linear-to-b from-white via-slate-200 to-slate-500 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              404
            </h1>
            <div className="absolute -inset-x-6 top-1/2 h-12 bg-linear-to-r from-purple-500/30 to-cyan-500/30 blur-2xl opacity-40 pointer-events-none" />
          </div>

          {/* Explanation text */}
          <div className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
              Preview Configuration Missing
            </h2>
            <p className="text-sm md:text-base text-slate-400 leading-relaxed font-light">
              We couldn't locate this preview session. The preview may have
              expired, or the editor might be reloading.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              onClick={handleGoBack}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto h-11 px-5 border-white/8 bg-slate-900/60 hover:bg-slate-900 text-slate-300 hover:text-white transition-all duration-200 gap-2 font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </Button>

            <Button
              onClick={handleRefresh}
              variant="default"
              size="lg"
              className="w-full sm:w-auto h-11 px-5 bg-linear-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-medium shadow-[0_4px_20px_-4px_rgba(168,85,247,0.4)] hover:shadow-[0_4px_24px_rgba(168,85,247,0.6)] border-none transition-all duration-200 gap-2"
            >
              <RotateCw className="h-4 w-4" />
              Reload Preview
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-6 text-center text-xs text-slate-500 border-t border-white/3 bg-slate-950/20 backdrop-blur-md">
        <p>
          © {new Date().getFullYear()} Qwintly Builder. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
