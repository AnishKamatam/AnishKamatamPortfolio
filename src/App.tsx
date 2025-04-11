import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import { Sidebar } from './components/Sidebar';
import Home from './pages/Home';

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
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh' }}>
        <Sidebar />
        <Box
          component="main"
          sx={{
            minHeight: '100vh',
          }}
        >
          <Home />
          {/* Add other sections here */}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
