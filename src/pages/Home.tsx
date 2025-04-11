import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpg';
import AnimatedBackground from '../components/AnimatedBackground';

const Home = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: 'white',
        padding: '0 10%',
        position: 'relative',
      }}
    >
      <AnimatedBackground />
      
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: '600px', flex: '0 0 50%' }}
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
          }}
        >
          Welcome to my portfolio
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ flex: '0 0 40%', display: 'flex', justifyContent: 'center' }}
      >
        <Box
          component="img"
          src={profileImage}
          alt="Anish Kamatam"
          sx={{
            width: { xs: 250, sm: 300, md: 350 },
            height: { xs: 250, sm: 300, md: 350 },
            borderRadius: '50%',
            objectFit: 'cover',
            objectPosition: '55% 55%',
            border: '4px solid',
            borderColor: 'primary.main',
            boxShadow: '0 0 20px rgba(144, 202, 249, 0.3)',
          }}
        />
      </motion.div>
    </Box>
  );
};

export default Home; 