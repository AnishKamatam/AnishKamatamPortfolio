import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <Box
      id="resume"
      sx={{
        minHeight: '100vh',
        padding: { xs: '2rem 1rem', md: '4rem 2rem' },
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ width: '100%', maxWidth: '1200px' }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            marginBottom: '3rem',
            color: 'text.primary',
            fontWeight: 'bold',
            fontSize: { xs: '2rem', md: '2.5rem' },
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '0.5rem',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100px',
              height: '4px',
              background: 'linear-gradient(90deg, #90caf9, transparent)',
              borderRadius: '2px',
            }
          }}
        >
          Resume
        </Typography>

        <Box
          sx={{
            width: '100%',
            height: '800px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            component="iframe"
            src="/AnishKamatamResume.pdf"
            sx={{
              width: '100%',
              height: '100%',
              border: 'none',
            }}
          />
        </Box>
      </motion.div>
    </Box>
  );
};

export default Resume; 