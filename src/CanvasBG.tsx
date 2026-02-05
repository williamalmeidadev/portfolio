import React, { useEffect, useRef } from 'react';

export const CanvasBG: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const context = ctx;

    const METEOR_COLOR = '180, 80, 255';
    const BASE_WIDTH = 1200;
    const BG_TOP = '#050414';
    const BG_BOTTOM = '#02010a';
    const MAX_DPR = 2;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      o: number;
      tw: number;
      to: number;
    }> = [];
    const meteors: Array<{ x: number; y: number; len: number; v: number; o: number; dir: number }> = [];
    let width = 0;
    let height = 0;
    let rafId = 0;
    let lastTime = 0;
    let resizeRaf = 0;
    let bgGradient: CanvasGradient | null = null;
    let particleColor = '255, 255, 255';
    let particleOpacity = 1;
    let themeObserver: MutationObserver | null = null;

    function getScaleFactor() {
      return Math.min(window.innerWidth / BASE_WIDTH, 1.6);
    }

    function updateThemeVars() {
      const styles = getComputedStyle(document.documentElement);
      const top = styles.getPropertyValue('--canvas-bg-top').trim() || BG_TOP;
      const bottom = styles.getPropertyValue('--canvas-bg-bottom').trim() || BG_BOTTOM;
      const particles = styles.getPropertyValue('--particle-color').trim() || '255, 255, 255';
      const opacity = Number(styles.getPropertyValue('--particle-opacity').trim()) || 1;
      particleColor = particles;
      particleOpacity = opacity;
      if (height > 0) {
        bgGradient = context.createLinearGradient(0, 0, 0, height);
        bgGradient.addColorStop(0, top);
        bgGradient.addColorStop(1, bottom);
      }
    }

    function resize() {
      if (resizeRaf) cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(() => {
        if (!canvas) return;
        const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        context.setTransform(dpr, 0, 0, dpr, 0, 0);
        updateThemeVars();
        createParticles();
      });
    }

    window.addEventListener('resize', resize);
    resize();

    function createParticles() {
      if (!canvas) return;
      particles.length = 0;
      const particleCount = Math.floor(60 * getScaleFactor());
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.06,
          vy: (Math.random() - 0.5) * 0.06,
          r: Math.random() * 1.9 + 0.55,
          o: Math.random() * 0.28 + 0.08,
          tw: Math.random() * 0.5 + 0.15,
          to: Math.random() * Math.PI * 2,
        });
      }
    }

    function drawParticles(dt: number) {
      if (!canvas) return;
      const w = width;
      const h = height;
      const ctx = context;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.beginPath();
        const twinkle = Math.sin(p.to) * 0.18 + 0.82;
        ctx.arc(p.x, p.y, p.r * twinkle, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleColor}, ${p.o * twinkle * particleOpacity})`;
        ctx.fill();
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.to += p.tw * dt * 0.012;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
      }
    }

    function createMeteor() {
      if (!canvas) return;
      const scale = getScaleFactor();
      const max = Math.floor(3 + scale * 5);
      const chance = 0.006 * scale;
      if (meteors.length < max && Math.random() < chance) {
        const dir = Math.random() < 0.5 ? 1 : -1;
        const startX =
          dir > 0 ? -120 + Math.random() * (width + 240) : width + 120 - Math.random() * (width + 240);
        const startY = -80 - Math.random() * 140;
        meteors.push({
          x: startX,
          y: startY,
          len: 80 + Math.random() * 120,
          v: 4.5 + Math.random() * 3.5,
          o: Math.random() * 0.5 + 0.3,
          dir,
        });
      }
    }

    function drawMeteors(dt: number) {
      if (!canvas) return;
      const ctx = context;
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        const dx = m.v * 0.6 * dt * 0.06 * m.dir;
        const dy = m.v * dt * 0.06;
        const tailX = m.x - dx * 10;
        const tailY = m.y - dy * 10;
        const grad = ctx.createLinearGradient(tailX, tailY, m.x, m.y);
        grad.addColorStop(0, `rgba(${METEOR_COLOR}, 0)`);
        grad.addColorStop(1, `rgba(${METEOR_COLOR}, ${m.o})`);
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(m.x, m.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.4;
        ctx.stroke();
        m.x += dx;
        m.y += dy;
        if (m.y > height + 200 || m.x > width + 200 || m.x < -200) meteors.splice(i, 1);
      }
    }

    function loop(time: number) {
      if (!canvas) return;
      const ctx = context;
      const dt = lastTime ? Math.min(time - lastTime, 50) : 16.7;
      lastTime = time;
      if (bgGradient) ctx.fillStyle = bgGradient;
      else ctx.fillStyle = BG_BOTTOM;
      ctx.fillRect(0, 0, width, height);
      drawParticles(dt);
      createMeteor();
      drawMeteors(dt);
      rafId = requestAnimationFrame(loop);
    }

    createParticles();
    updateThemeVars();
    themeObserver = new MutationObserver(() => {
      updateThemeVars();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });
    rafId = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('resize', resize);
      if (themeObserver) themeObserver.disconnect();
      if (resizeRaf) cancelAnimationFrame(resizeRaf);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return <canvas ref={canvasRef} className="canvas-bg" />;
};
