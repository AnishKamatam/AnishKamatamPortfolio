import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 100%)',
        color: 'white',
        padding: '0 5%',
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
            fontWeight: 'bold',
            lineHeight: 1.2,
            marginBottom: 2,
          }}
        >
          Hi, I'm
          <br />
          <Box component="span" sx={{ color: 'primary.main' }}>
            Anish Kamatam
          </Box>
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: 'text.secondary',
            maxWidth: '600px',
          }}
        >
          Welcome to my portfolio
        </Typography>
      </motion.div>
    </Box>
  );
};

export default Home; 