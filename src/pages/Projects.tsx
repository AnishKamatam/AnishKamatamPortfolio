import { Box, Typography, Grid, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Code2, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Graph-RAG Semantic Retrieval for Brand-to-Generic Drug Mapping}',
      description: 'Utilized a graph-based Retrieval-Augmented Generation (RAG) approach, combining semantic vector search with a Neo4j knowledge graph to model relationships between drugs, classes, manufacturers, and side effects for accurate and explainable recommendations.',
      technologies: ['Next.js', 'React', 'Typescript', 'Tailwind CSS', 'Neo4j', 'GoogleGemini API', 'Langchain', 'Pinecone'],
      githubLink: 'https://github.com/ani-sivaa/sfhacks2025',
      demoLink: 'https://www.youtube.com/watch?v=O0iC-H4aI0Q'
    },
    {
      title: 'Time Series Forecasting of S&P 500 using LSTM Networks',
      description: 'Designed and implemented an LSTM-based model to predict the daily closing prices of the S&P 500 index using historical stock data. Optimized model training and evaluation using TensorFlow and Keras, achieving improved accuracy and efficiency through hyperparameter tuning and data normalization techniques. Achieved a Mean Absolute Error (MAE) of 1.2 and a Root Mean Square Error (RMSE) of 1.8.',
      technologies: ['Python', 'TensorFlow', 'Keras', 'Pandas', 'NumPy'],
      githubLink: 'https://github.com/AnishKamatam/LSTMStockPredictionApp',
      demoLink: 'https://github.com/AnishKamatam/LSTMStockPredictionApp'
    },
    {
      title: 'Portfolio Website',
      description: 'Built a responsive portfolio website using React and TypeScript to showcase technical projects and skills. Implemented modular components, optimized performance with static typing and modern build tooling, and ensured mobile-friendly design through responsive UI best practices.',
      technologies: ['Next.js', 'React', 'Typescript', 'Tailwind CSS', 'Framer Motion'],
      githubLink: 'https://github.com/ani-sivaa/portfolio',
      demoLink: 'https://ani-sivaa.github.io/portfolio/'
    }
  ];

  return (
    <Box
      id="projects"
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
          Projects
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '2rem',
            overflowX: 'auto',
            padding: '1rem',
            '&::-webkit-scrollbar': {
              height: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: '#0a0a0a',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#1a1a1a',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              background: '#2a2a2a',
            },
          }}
        >
          {projects.map((project, index) => (
            <Box
              key={index}
              sx={{
                minWidth: { xs: '280px', sm: '320px', md: '360px' },
                maxWidth: { xs: '280px', sm: '320px', md: '360px' },
                flex: '0 0 auto',
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    height: '100%',
                    padding: '2rem',
                    backgroundColor: 'rgba(10, 10, 10, 0.8)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '1rem',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <Code2 size={32} color="#90caf9" />
                    <Typography
                      variant="h5"
                      sx={{
                        color: 'text.primary',
                        fontWeight: 'bold',
                      }}
                    >
                      {project.title}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      marginBottom: '2rem',
                      lineHeight: 1.6,
                    }}
                  >
                    {project.description}
                  </Typography>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                    {project.technologies.map((tech, techIndex) => (
                      <Box
                        key={techIndex}
                        sx={{
                          padding: '0.5rem 1rem',
                          backgroundColor: 'rgba(144, 202, 249, 0.1)',
                          borderRadius: '1rem',
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'primary.main',
                            fontSize: '0.8rem',
                          }}
                        >
                          {tech}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  <Box sx={{ display: 'flex', gap: '1rem' }}>
                    <Button
                      variant="outlined"
                      startIcon={<Github size={20} />}
                      href={project.githubLink}
                      target="_blank"
                      sx={{
                        color: 'primary.main',
                        borderColor: 'primary.main',
                        '&:hover': {
                          borderColor: 'primary.light',
                        },
                      }}
                    >
                      GitHub
                    </Button>
                    <Button
                      variant="contained"
                      startIcon={<ExternalLink size={20} />}
                      href={project.demoLink}
                      target="_blank"
                      sx={{
                        backgroundColor: 'primary.main',
                        '&:hover': {
                          backgroundColor: 'primary.dark',
                        },
                      }}
                    >
                      Live Demo
                    </Button>
                  </Box>
                </Paper>
              </motion.div>
            </Box>
          ))}
        </Box>
      </motion.div>
    </Box>
  );
};

export default Projects; 