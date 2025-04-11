import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpg';
import InteractiveGrid from '../components/InteractiveGrid';

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
        overflow: 'hidden',
      }}
    >
      <InteractiveGrid />
      
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: '600px', flex: '0 0 50%', position: 'relative', zIndex: 1 }}
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
            lineHeight: 1.6,
            maxWidth: '90%',
            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
          }}
        >
          I'm a software developer with a focus on building scalable, data-driven applications that solve real-world problems. My work blends backend systems, APIs, and intelligent retrieval pipelines to create efficient, user-centric solutions.
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ flex: '0 0 40%', display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 1 }}
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