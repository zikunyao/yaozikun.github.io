import { useEffect, useRef } from 'react';

export default function SequenceLab() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frame = 0;
    let time = 0;
    let pointerX = 0;
    let pointerY = 0;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * ratio;
      canvas.height = rect.height * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    const move = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerX = (event.clientX - rect.left - rect.width / 2) / rect.width;
      pointerY = (event.clientY - rect.top - rect.height / 2) / rect.height;
    };

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      ctx.clearRect(0, 0, width, height);
      time += reduceMotion ? 0 : 0.008;

      const points = Array.from({ length: 34 }, (_, i) => {
        const progress = i / 33;
        const angle = progress * Math.PI * 5.2 + time;
        const perspective = 0.66 + Math.sin(angle) * 0.12;
        return {
          x: width * (0.12 + progress * 0.76) + Math.cos(angle) * 42 * perspective + pointerX * (20 + i * 0.4),
          y: height * 0.5 + Math.sin(angle) * height * 0.25 + pointerY * 28,
          depth: (Math.cos(angle) + 1) / 2,
          residue: 'ACDEFGHIKLMNPQRSTVWY'[i % 20],
        };
      });

      ctx.lineWidth = 1;
      for (let i = 0; i < points.length - 1; i++) {
        const p = points[i];
        const next = points[i + 1];
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(next.x, next.y);
        ctx.strokeStyle = `rgba(76, 166, 255, ${0.12 + p.depth * 0.28})`;
        ctx.stroke();
      }

      points.forEach((point, i) => {
        const radius = 2.3 + point.depth * 3.2;
        const glow = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, radius * 4);
        glow.addColorStop(0, `rgba(116, 200, 255, ${0.45 + point.depth * 0.4})`);
        glow.addColorStop(1, 'rgba(0,113,227,0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(point.x, point.y, radius * 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = i % 7 === 0 ? '#a78bfa' : '#64d2ff';
        ctx.beginPath();
        ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
        ctx.fill();
        if (i % 6 === 0) {
          ctx.font = '10px JetBrains Mono, monospace';
          ctx.fillStyle = 'rgba(210,225,255,.65)';
          ctx.fillText(point.residue, point.x + 9, point.y - 8);
        }
      });

      const scanX = width * ((time * 0.12) % 1);
      const scan = ctx.createLinearGradient(scanX - 70, 0, scanX + 70, 0);
      scan.addColorStop(0, 'rgba(41,151,255,0)');
      scan.addColorStop(.5, 'rgba(41,151,255,.12)');
      scan.addColorStop(1, 'rgba(41,151,255,0)');
      ctx.fillStyle = scan;
      ctx.fillRect(scanX - 70, 0, 140, height);

      frame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    canvas.addEventListener('pointermove', move);
    draw();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('pointermove', move);
    };
  }, []);

  return (
    <div className="sequence-lab" aria-label="Interactive protein sequence intelligence visualization">
      <div className="lab-toolbar">
        <span><i /> SEQUENCE INTELLIGENCE</span>
        <span>ESM-2 / BI-MAMBA</span>
      </div>
      <canvas ref={canvasRef} />
      <div className="lab-metrics">
        <div><span>Input</span><strong>1,284 aa</strong></div>
        <div><span>Confidence</span><strong>94.7%</strong></div>
        <div><span>State</span><strong className="lab-active">Analyzing</strong></div>
      </div>
      <div className="lab-corner lab-corner-a" />
      <div className="lab-corner lab-corner-b" />
    </div>
  );
}
