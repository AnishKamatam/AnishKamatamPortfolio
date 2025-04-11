import { Box, Typography, Grid, Paper, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import ApiIcon from '@mui/icons-material/Api';
import PsychologyIcon from '@mui/icons-material/Psychology';

const About = () => {
  const theme = useTheme();

  const skills = [
    {
      icon: <CodeIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Full Stack Development',
      description: 'Building end-to-end applications with modern frameworks and best practices.'
    },
    {
      icon: <StorageIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Backend Systems',
      description: 'Designing and implementing robust, scalable backend architectures.'
    },
    {
      icon: <ApiIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'API Development',
      description: 'Creating efficient and well-documented RESTful and GraphQL APIs.'
    },
    {
      icon: <PsychologyIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Problem Solving',
      description: 'Analyzing complex problems and developing innovative solutions.'
    }
  ];

  return (
    <Box
      id="about"
      sx={{
        minHeight: '100vh',
        padding: { xs: '4rem 2rem', md: '6rem 4rem' },
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
            fontSize: { xs: '2.5rem', md: '3.5rem' },
          }}
        >
          About Me
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    padding: '2rem',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    backgroundColor: 'rgba(10, 10, 10, 0.8)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '1rem',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                    },
                  }}
                >
                  {skill.icon}
                  <Typography
                    variant="h6"
                    sx={{
                      marginTop: '1rem',
                      marginBottom: '0.5rem',
                      color: 'text.primary',
                      fontWeight: 'bold',
                    }}
                  >
                    {skill.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                    }}
                  >
                    {skill.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            marginTop: '4rem',
            padding: '2rem',
            backgroundColor: 'rgba(10, 10, 10, 0.8)',
            backdropFilter: 'blur(10px)',
            borderRadius: '1rem',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              marginBottom: '1.5rem',
              color: 'text.primary',
              fontWeight: 'bold',
            }}
          >
            My Journey
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              lineHeight: 1.8,
              fontSize: '1.1rem',
            }}
          >
            With a passion for technology and problem-solving, I've dedicated my career to building innovative software solutions. 
            My expertise spans across full-stack development, with a particular focus on creating scalable, data-driven applications. 
            I believe in writing clean, maintainable code and following best practices to deliver high-quality software.
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
};

export default About; 