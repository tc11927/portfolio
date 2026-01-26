import { useEffect, useRef } from 'react';
import './JigglyGrid.css';

export default function JigglyGrid() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  // ── Subtle settings ───────────────────────────────────────
  const gridSize         = 50;     // larger = fewer lines, cleaner look
  const influenceRadius  = 120;    // smaller area of effect
  const maxDisplacement  = 5;      // very gentle movement
  const stiffness        = 0.18;   // snappier return
  const damping          = 0.92;   // fades quickly

  const points = useRef([]);

  const resize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initGrid();
  };

  const initGrid = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const w = canvas.width;
    const h = canvas.height;
    points.current = [];

    for (let y = 0; y < h + gridSize * 2; y += gridSize) {
      for (let x = 0; x < w + gridSize * 2; x += gridSize) {
        points.current.push({
          ox: x, oy: y,
          x, y,
          vx: 0, vy: 0,
        });
      }
    }
  };

  const update = () => {
    points.current.forEach(p => {
      // gentle spring back
      p.vx += (p.ox - p.x) * stiffness;
      p.vy += (p.oy - p.y) * stiffness;

      // soft mouse influence
      const dx = mouse.current.x - p.x;
      const dy = mouse.current.y - p.y;
      const dist = Math.hypot(dx, dy);

      if (dist < influenceRadius && dist > 2) {
        const force = (1 - dist / influenceRadius) * maxDisplacement;
        p.vx -= (dx / dist) * force * 0.7;
        p.vy -= (dy / dist) * force * 0.7;
      }

      p.x += p.vx;
      p.y += p.vy;
      p.vx *= damping;
      p.vy *= damping;
    });
  };

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.lineWidth = 1;
    ctx.strokeStyle = 'rgba(60, 100, 180, 0.28)'; // very faint

    const w = canvas.width;
    const h = canvas.height;
    const cols = Math.ceil((w + gridSize * 2) / gridSize);

    // Horizontal lines
    for (let y = 0; y < h + gridSize; y += gridSize) {
      ctx.beginPath();
      let first = true;
      for (let x = 0; x < w + gridSize; x += gridSize) {
        const col = Math.floor(x / gridSize);
        const row = Math.floor(y / gridSize);
        const p = points.current[row * cols + col];
        if (!p) continue;
        if (first) { ctx.moveTo(p.x, p.y); first = false; }
        else       { ctx.lineTo(p.x, p.y); }
      }
      ctx.stroke();
    }

    // Vertical lines
    for (let x = 0; x < w + gridSize; x += gridSize) {
      ctx.beginPath();
      let first = true;
      for (let y = 0; y < h + gridSize; y += gridSize) {
        const col = Math.floor(x / gridSize);
        const row = Math.floor(y / gridSize);
        const p = points.current[row * cols + col];
        if (!p) continue;
        if (first) { ctx.moveTo(p.x, p.y); first = false; }
        else       { ctx.lineTo(p.x, p.y); }
      }
      ctx.stroke();
    }
  };

  const loop = () => {
    update();
    draw();
    requestAnimationFrame(loop);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const onMove = e => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onMove);

    resize();
    loop();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="jiggly-canvas" />;
}