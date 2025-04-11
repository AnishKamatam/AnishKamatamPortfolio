import { Box, Typography, Paper, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import DataObjectIcon from '@mui/icons-material/DataObject';
import WebIcon from '@mui/icons-material/Web';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { Code2, Type, Cpu, Coffee, Database, GitBranch, 
  Network, BrainCircuit, Share2 } from 'lucide-react';

const Skills = () => {
  const theme = useTheme();

  const topLanguages = [
    { name: 'Python', icon: <Code2 size={40} color={theme.palette.primary.main} /> },
    { name: 'TypeScript', icon: <Type size={40} color={theme.palette.primary.main} /> },
    { name: 'C++', icon: <Cpu size={40} color={theme.palette.primary.main} /> },
    { name: 'JavaScript', icon: <CodeIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} /> },
    { name: 'Java', icon: <Coffee size={40} color={theme.palette.primary.main} /> }
  ];

  const skillCategories = [
    {
      icon: <WebIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', icon: <CodeIcon sx={{ fontSize: 24, color: theme.palette.primary.main }} /> },
        { name: 'Next.js', icon: <CodeIcon sx={{ fontSize: 24, color: theme.palette.primary.main }} /> },
        { name: 'Tailwind CSS', icon: <CodeIcon sx={{ fontSize: 24, color: theme.palette.primary.main }} /> },
        { name: 'Responsive Design', icon: <WebIcon sx={{ fontSize: 24, color: theme.palette.primary.main }} /> }
      ]
    },
    {
      icon: <StorageOutlinedIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', icon: <CodeIcon sx={{ fontSize: 24, color: theme.palette.primary.main }} /> },
        { name: 'Django', icon: <Code2 size={24} color={theme.palette.primary.main} /> },
        { name: 'MongoDB', icon: <Database size={24} color={theme.palette.primary.main} /> }
      ]
    },
    {
      icon: <CloudQueueIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', icon: <CloudQueueIcon sx={{ fontSize: 24, color: theme.palette.primary.main }} /> },
        { name: 'Docker', icon: <StorageOutlinedIcon sx={{ fontSize: 24, color: theme.palette.primary.main }} /> },
        { name: 'Git', icon: <GitBranch size={24} color={theme.palette.primary.main} /> }
      ]
    },
    {
      icon: <PsychologyIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Data & AI',
      skills: [
        { name: 'Pandas', icon: <DataObjectIcon sx={{ fontSize: 24, color: theme.palette.primary.main }} /> },
        { name: 'NumPy', icon: <BrainCircuit size={24} color={theme.palette.primary.main} /> },
        { name: 'TensorFlow', icon: <BrainCircuit size={24} color={theme.palette.primary.main} /> },
        { name: 'Pinecone', icon: <Network size={24} color={theme.palette.primary.main} /> },
        { name: 'Neo4j', icon: <Share2 size={24} color={theme.palette.primary.main} /> }
      ]
    }
  ];

  return (
    <Box
      id="skills"
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
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, transparent)`,
              borderRadius: '2px',
            }
          }}
        >
          Technical Skills
        </Typography>

        {/* Top Languages Section */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' },
          gap: '2rem',
          marginBottom: '4rem',
          justifyContent: 'center'
        }}>
          {topLanguages.map((lang, index) => (
            <Box key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    padding: '2rem',
                    textAlign: 'center',
                    backgroundColor: 'rgba(10, 10, 10, 0.8)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '1rem',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <Box sx={{ marginBottom: '1rem' }}>
                    {lang.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      color: 'text.primary',
                      fontWeight: 'bold',
                    }}
                  >
                    {lang.name}
                  </Typography>
                </Paper>
              </motion.div>
            </Box>
          ))}
        </Box>

        {/* Other Skills Categories */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Paper
                elevation={3}
                sx={{
                  padding: '2rem',
                  height: '100%',
                  backgroundColor: 'rgba(10, 10, 10, 0.8)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '1rem',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem', 
                  marginBottom: '2rem',
                  justifyContent: 'center'
                }}>
                  {category.icon}
                  <Typography
                    variant="h5"
                    sx={{
                      color: 'text.primary',
                      fontWeight: 'bold',
                    }}
                  >
                    {category.title}
                  </Typography>
                </Box>
                <Box sx={{ 
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1rem'
                }}>
                  {category.skills.map((skill, skillIndex) => (
                    <Box
                      key={skillIndex}
                      sx={{
                        padding: '0.75rem',
                        backgroundColor: 'rgba(144, 202, 249, 0.1)',
                        borderRadius: '0.5rem',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: 'rgba(144, 202, 249, 0.2)',
                          transform: 'translateY(-2px)',
                        },
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        justifyContent: 'center'
                      }}
                    >
                      {skill.icon}
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'text.secondary',
                          fontSize: '0.9rem',
                        }}
                      >
                        {skill.name}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          ))}
        </Box>
      </motion.div>
    </Box>
  );
};

export default Skills; 