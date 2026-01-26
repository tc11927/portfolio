import { useEffect, useRef } from 'react';
import './JigglyGrid.css';

export default function JigglyGrid() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  // Configurable constants
  const gridSize = 40;
  const influenceRadius = 160;
  const maxDisplacement = 18;
  const stiffness = 0.12;
  const damping = 0.88;

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
          ox: x,
          oy: y,
          x,
          y,
          vx: 0,
          vy: 0,
        });
      }
    }
  };

  const update = () => {
    points.current.forEach((p) => {
      // Spring back
      p.vx += (p.ox - p.x) * stiffness;
      p.vy += (p.oy - p.y) * stiffness;

      // Mouse influence
      const dx = mouse.current.x - p.x;
      const dy = mouse.current.y - p.y;
      const dist = Math.hypot(dx, dy);

      if (dist < influenceRadius && dist > 1) {
        const force = (1 - dist / influenceRadius) ** 2 * maxDisplacement;
        const fx = (dx / dist) * force;
        const fy = (dy / dist) * force;

        p.vx -= fx * 0.6; // repel (change to += to attract)
        p.vy -= fy * 0.6;
      }

      // Apply velocity + damping
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
    ctx.lineWidth = 1.4;
    ctx.strokeStyle = 'rgba(50, 90, 180, 0.45)';

    const w = canvas.width;
    const h = canvas.height;

    // Horizontal lines
    for (let y = 0; y < h + gridSize; y += gridSize) {
      ctx.beginPath();
      let first = true;

      for (let x = 0; x < w + gridSize; x += gridSize) {
        const col = Math.floor(x / gridSize);
        const row = Math.floor(y / gridSize);
        const index = row * Math.ceil((w + gridSize * 2) / gridSize) + col;
        const p = points.current[index];

        if (!p) continue;

        if (first) {
          ctx.moveTo(p.x, p.y);
          first = false;
        } else {
          ctx.lineTo(p.x, p.y);
        }
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
        const index = row * Math.ceil((w + gridSize * 2) / gridSize) + col;
        const p = points.current[index];

        if (!p) continue;

        if (first) {
          ctx.moveTo(p.x, p.y);
          first = false;
        } else {
          ctx.lineTo(p.x, p.y);
        }
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

    const onPointerMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onPointerMove);

    resize();
    loop();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="jiggly-canvas" />
      <div className="glow-overlay" />
    </>
  );
}