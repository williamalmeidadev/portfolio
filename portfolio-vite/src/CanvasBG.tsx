import React, { useEffect, useRef } from 'react';

export const CanvasBG: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const METEOR_COLOR = '180, 80, 255';
    const BASE_WIDTH = 1200;
    const particles: Array<{ x: number; y: number; vx: number; vy: number; r: number; o: number }> = [];
    const meteors: Array<{ x: number; y: number; len: number; v: number; o: number }> = [];

    function getScaleFactor() {
      return Math.min(window.innerWidth / BASE_WIDTH, 1.5);
    }

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    }

    window.addEventListener('resize', resize);
    resize();

    function createParticles() {
      if (!canvas) return;
      particles.length = 0;
      const particleCount = Math.floor(60 * getScaleFactor());
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          r: Math.random() * 2 + 0.5,
          o: Math.random() * 0.4 + 0.1,
        });
      }
    }

    function drawParticles() {
      if (!canvas || !ctx) return;
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.o})`;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });
    }

    function createMeteor() {
      if (!canvas) return;
      const scale = getScaleFactor();
      const max = Math.floor(4 + scale * 6);
      const chance = 0.01 * scale;
      if (meteors.length < max && Math.random() < chance) {
        const startX = Math.random() * canvas.width;
        const startY = -50 - Math.random() * 100;
        meteors.push({
          x: startX,
          y: startY,
          len: 80 + Math.random() * 120,
          v: 4 + Math.random() * 3,
          o: Math.random() * 0.5 + 0.3,
        });
      }
    }

    function drawMeteors() {
      if (!canvas || !ctx) return;
      meteors.forEach((m, i) => {
        const dx = m.v * 0.6;
        const dy = m.v;
        const grad = ctx.createLinearGradient(
          m.x - dx * 10,
          m.y - dy * 10,
          m.x,
          m.y
        );
        grad.addColorStop(0, `rgba(${METEOR_COLOR}, 0)`);
        grad.addColorStop(1, `rgba(${METEOR_COLOR}, ${m.o})`);
        ctx.beginPath();
        ctx.moveTo(m.x - dx * 10, m.y - dy * 10);
        ctx.lineTo(m.x, m.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        m.x += dx;
        m.y += dy;
        if (m.y > canvas.height + 200) meteors.splice(i, 1);
      });
    }

    function loop() {
      if (!canvas || !ctx) return;
      ctx.fillStyle = '#02010a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      drawParticles();
      createMeteor();
      drawMeteors();
      requestAnimationFrame(loop);
    }

    createParticles();
    loop();
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="canvas-bg" />;
};
