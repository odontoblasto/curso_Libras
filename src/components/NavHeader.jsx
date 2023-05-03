import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import orange from '@mui/material/colors/orange';

const theme = createTheme({
    palette: {
      primary: orange,
    },
  });


export function NavHeader(){

    return(
    <>      
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="danger" noWrap>
            Curso de Libras
          </Typography>
        </Toolbar>
      </AppBar>
      <main></main>
      <Box
          sx={{
            bgcolor: "orange",
            pt: 8,
            pb: 6,
            display:"flex",
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Curso de Libras 
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Profa. Sabrina Pimentel
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Licenciada Letras Libras - UFPE.
            </Typography>

            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Registrar-se</Button>
              <Button variant="contained">Login</Button>
            </Stack>
          </Container>
        </Box>
        </ThemeProvider>


    </>        
    )
}