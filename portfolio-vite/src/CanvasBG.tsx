import React, { useEffect, useRef } from 'react';

export const CanvasBG: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const COR_METEORO = '180, 80, 255';
    const LARGURA_BASE = 1200;
    const particulas = [] as any[];
    const meteoros = [] as any[];

    function fatorTela() {
      return Math.min(window.innerWidth / LARGURA_BASE, 1.5);
    }

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      criarParticulas();
    }

    window.addEventListener('resize', resize);
    resize();

    function criarParticulas() {
      if (!canvas) return;
      particulas.length = 0;
      const qtdParticulas = Math.floor(60 * fatorTela());
      for (let i = 0; i < qtdParticulas; i++) {
        particulas.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          r: Math.random() * 2 + 0.5,
          o: Math.random() * 0.4 + 0.1,
        });
      }
    }

    function desenharParticulas() {
      if (!canvas || !ctx) return;
      particulas.forEach((p) => {
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

    function criarMeteoro() {
      if (!canvas) return;
      const fator = fatorTela();
      const max = Math.floor(4 + fator * 6);
      const chance = 0.01 * fator;
      if (meteoros.length < max && Math.random() < chance) {
        const startX = Math.random() * canvas.width;
        const startY = -50 - Math.random() * 100;
        meteoros.push({
          x: startX,
          y: startY,
          len: 80 + Math.random() * 120,
          v: 4 + Math.random() * 3,
          o: Math.random() * 0.5 + 0.3,
        });
      }
    }

    function desenharMeteoros() {
      if (!canvas || !ctx) return;
      meteoros.forEach((m, i) => {
        const dx = m.v * 0.6;
        const dy = m.v;
        const grad = ctx.createLinearGradient(
          m.x - dx * 10,
          m.y - dy * 10,
          m.x,
          m.y
        );
        grad.addColorStop(0, `rgba(${COR_METEORO}, 0)`);
        grad.addColorStop(1, `rgba(${COR_METEORO}, ${m.o})`);
        ctx.beginPath();
        ctx.moveTo(m.x - dx * 10, m.y - dy * 10);
        ctx.lineTo(m.x, m.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        m.x += dx;
        m.y += dy;
        if (m.y > canvas.height + 200) meteoros.splice(i, 1);
      });
    }

    function loop() {
      if (!canvas || !ctx) return;
      ctx.fillStyle = '#02010a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      desenharParticulas();
      criarMeteoro();
      desenharMeteoros();
      requestAnimationFrame(loop);
    }

    criarParticulas();
    loop();
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} id="bg" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }} />;
};
