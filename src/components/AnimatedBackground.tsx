import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 100%)',
      }}
    >
      {/* Animated gradient mesh */}
      <Box
        component={motion.div}
        animate={{
          background: [
            'radial-gradient(circle at 20% 20%, rgba(144, 202, 249, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, rgba(144, 202, 249, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 80%, rgba(144, 202, 249, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(144, 202, 249, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />

      {/* Animated particles */}
      {[...Array(20)].map((_, i) => (
        <Box
          key={i}
          component={motion.div}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          sx={{
            position: 'absolute',
            width: '2px',
            height: '2px',
            borderRadius: '50%',
            backgroundColor: 'primary.main',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </Box>
  );
};

export default AnimatedBackground; 