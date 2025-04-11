import { useState, useEffect, useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';

interface LandingPageProps {
  onComplete: () => void;
}

const LandingPage = ({ onComplete }: LandingPageProps) => {
  const [showContent, setShowContent] = useState(true);
  const [displayText, setDisplayText] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const controls = useAnimation();

  const fullText = "Welcome to my portfolio";
  const typingSpeed = 100; // milliseconds per character

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  const step = {
    buttonText: "Explore",
    icon: <CodeIcon sx={{ fontSize: '1.5rem', ml: 1 }} />,
  };

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
    const cellSize = 50;
    const gridSizeX = Math.ceil(canvas.width / cellSize) + 1;
    const gridSizeY = Math.ceil(canvas.height / cellSize) + 1;
    const maxDistance = 150;
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

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleNext = () => {
    setShowContent(false);
    setTimeout(onComplete, 500);
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        overflow: 'hidden',
      }}
    >
      <Box
        component="canvas"
        ref={canvasRef}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {showContent && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: 'primary.main',
                fontWeight: 'bold',
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                textAlign: 'center',
                letterSpacing: '0.02em',
                textShadow: '0 0 20px rgba(144, 202, 249, 0.4)',
                minHeight: '1.2em', // Ensure consistent height during typing
              }}
            >
              {displayText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                style={{ display: 'inline-block', width: '2px', height: '1em', backgroundColor: 'currentColor', marginLeft: '0.2em' }}
              />
            </Typography>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={handleNext}
                  endIcon={step.icon}
                  sx={{
                    fontSize: { xs: '1rem', sm: '1.2rem' },
                    padding: '1rem 2.5rem',
                    borderRadius: '50px',
                    textTransform: 'none',
                    background: 'linear-gradient(45deg, #90CAF9 30%, #64B5F6 90%)',
                    boxShadow: '0 4px 15px rgba(144, 202, 249, 0.4)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent)',
                      transform: 'translateX(100%)',
                      transition: 'transform 0.6s',
                    },
                    '&:hover': {
                      background: 'linear-gradient(45deg, #64B5F6 30%, #42A5F5 90%)',
                      boxShadow: '0 6px 20px rgba(144, 202, 249, 0.6)',
                      '&::before': {
                        transform: 'translateX(-100%)',
                      },
                    },
                  }}
                >
                  {step.buttonText}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </Box>
  );
};

export default LandingPage; 