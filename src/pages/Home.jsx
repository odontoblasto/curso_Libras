
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import SignLanguageIcon from '@mui/icons-material/SignLanguage';
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
import { Register} from './Register';
import { Login} from './Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
// import { NavHeader } from './NavHeader';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme({
    palette: {
      primary: orange,
    },
  });

export function Home() {
  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          < SignLanguageIcon sx={{ fontSize:"4rem",mr: 2 }} />
          <Typography mr="2rem" variant="h6" color="danger" noWrap>
            Curso de Libras
          </Typography>
          <Typography mr="2rem" variant="h6" color="danger" noWrap>
            Sobre o Curso
          </Typography>
          <Typography mr="2rem" variant="h6" color="danger" noWrap>
            Contato
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            marginY:8,
            bgcolor: 'orange',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
          < SignLanguageIcon sx={{ mr: 2 ,fontSize:"10rem"}} />
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
              < HowToRegIcon  sx={{fontSize:"4rem", mr: 2 }} />
              <Button variant="contained">Cadastrar<Register/></Button>
              < LoginIcon  sx={{ fontSize:"4rem",mr: 2 }} />
              <Button variant="contained">Entrar<Login/></Button>
             
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}

   
    </ThemeProvider>
 
    
  );
}