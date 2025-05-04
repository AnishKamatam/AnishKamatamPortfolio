import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Resume = () => {
  const handleDownload = () => {
    const resumeUrl = '/Anish_Kamatam_Resume1.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Anish_Kamatam_Resume1.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: '4rem',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Download Button Section */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2rem',
              flex: 1,
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<Download size={24} />}
                onClick={handleDownload}
                sx={{
                  padding: '1rem 2rem',
                  fontSize: '1.2rem',
                  borderRadius: '1rem',
                  background: 'linear-gradient(45deg, #90CAF9 30%, #64B5F6 90%)',
                  boxShadow: '0 4px 15px rgba(144, 202, 249, 0.4)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #64B5F6 30%, #42A5F5 90%)',
                    boxShadow: '0 6px 20px rgba(144, 202, 249, 0.6)',
                  },
                }}
              >
                Download Resume
              </Button>
            </motion.div>
          </Box>

          {/* Resume Image Section */}
          <Box
            sx={{
              flex: 2,
              maxWidth: { xs: '100%', md: '800px' },
            }}
          >
            <Box
              component="img"
              src="/resume-preview.png"
              alt="Resume Preview"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: '1rem',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              }}
            />
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Resume; 