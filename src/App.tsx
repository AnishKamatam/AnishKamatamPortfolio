import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import { Sidebar } from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import LandingPage from './components/LandingPage';

// Create a theme instance
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#000000',
      paper: '#0a0a0a',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  const [showLanding, setShowLanding] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {showLanding ? (
        <LandingPage onComplete={() => setShowLanding(false)} />
      ) : (
        <Box
          sx={{
            minHeight: '100vh',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 100%)',
              zIndex: -1,
            }}
          />
          <Sidebar />
          <Box
            component="main"
            sx={{
              minHeight: '100vh',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <Home />
            <About />
            {/* Add other sections here */}
          </Box>
        </Box>
      )}
    </ThemeProvider>
  );
}

export default App;
