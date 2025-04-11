import { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

const InteractiveGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Grid settings
    const cellSize = 50; // Increased cell size
    const gridSizeX = Math.ceil(canvas.width / cellSize) + 1;
    const gridSizeY = Math.ceil(canvas.height / cellSize) + 1;
    const maxDistance = 150; // Increased interaction distance
    const mouse = { x: 0, y: 0 };

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(144, 202, 249, 0.1)';
      ctx.lineWidth = 1;

      for (let i = 0; i < gridSizeX; i++) {
        for (let j = 0; j < gridSizeY; j++) {
          const x = i * cellSize;
          const y = j * cellSize;

          // Calculate distance from mouse
          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Calculate displacement based on distance
          const displacement = Math.max(0, maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          const offsetX = Math.cos(angle) * displacement * 15;
          const offsetY = Math.sin(angle) * displacement * 15;

          // Draw grid point
          ctx.beginPath();
          ctx.arc(x + offsetX, y + offsetY, 1, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(144, 202, 249, 0.3)';
          ctx.fill();

          // Draw connecting lines
          if (i < gridSizeX - 1) {
            ctx.beginPath();
            ctx.moveTo(x + offsetX, y + offsetY);
            const nextX = (i + 1) * cellSize;
            const nextY = j * cellSize;
            const nextDx = mouse.x - nextX;
            const nextDy = mouse.y - nextY;
            const nextDistance = Math.sqrt(nextDx * nextDx + nextDy * nextDy);
            const nextDisplacement = Math.max(0, maxDistance - nextDistance) / maxDistance;
            const nextAngle = Math.atan2(nextDy, nextDx);
            const nextOffsetX = Math.cos(nextAngle) * nextDisplacement * 15;
            const nextOffsetY = Math.sin(nextAngle) * nextDisplacement * 15;
            ctx.lineTo(nextX + nextOffsetX, nextY + nextOffsetY);
            ctx.stroke();
          }

          if (j < gridSizeY - 1) {
            ctx.beginPath();
            ctx.moveTo(x + offsetX, y + offsetY);
            const nextX = i * cellSize;
            const nextY = (j + 1) * cellSize;
            const nextDx = mouse.x - nextX;
            const nextDy = mouse.y - nextY;
            const nextDistance = Math.sqrt(nextDx * nextDx + nextDy * nextDy);
            const nextDisplacement = Math.max(0, maxDistance - nextDistance) / maxDistance;
            const nextAngle = Math.atan2(nextDy, nextDx);
            const nextOffsetX = Math.cos(nextAngle) * nextDisplacement * 15;
            const nextOffsetY = Math.sin(nextAngle) * nextDisplacement * 15;
            ctx.lineTo(nextX + nextOffsetX, nextY + nextOffsetY);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Box
      component="canvas"
      ref={canvasRef}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default InteractiveGrid; 