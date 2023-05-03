import { useState } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import LoginIcon from '@mui/icons-material/Login';


import { Button,Modal,Box,Typography, Container,FormControl,
FormHelperText,Input,InputLabel, FormGroup,AppBar,Toolbar, } from "@mui/material";


export function Login(){

//Modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);    
//Form
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   
    return(
        <>
            <Button onClick={handleOpen}>Entrar</Button>
                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={{bgcolor: 'orange', pt:8, pb:6,
                            width: "50%",height: "auto",
                                       mx:"auto",mt:"5%",}}>

                    <Container maxWidth="sm">

                        <CssBaseline />
                        <AppBar position="relative">
                            <Toolbar>
                            < LoginIcon  sx={{ mr: 2 }} />
                            <Typography  variant="h6" color="danger" noWrap>
                                Login
                            </Typography>
                            </Toolbar>
                        </AppBar>
              
                        <FormGroup>

                            <FormControl>
                                <InputLabel htmlFor="my-name">Nome do Aluno(a)</InputLabel>
                                <Input id="my-name" aria-describedby="my-helper-name" 
                                onChange={(e)=>{setName(e.target.value)}}  />
                                <FormHelperText id="my-helper-name">Seu Nome na Plataforma </FormHelperText>
                            </FormControl>

                            <FormControl>
                                <InputLabel htmlFor="my-email">Email </InputLabel>
                                <Input id="my-email" aria-describedby="my-helper-email" 
                                 onChange={(e)=>{setEmail(e.target.value)}}  />
                                <FormHelperText id="my-helper-email">Seu Email</FormHelperText>
                            </FormControl>

                            <FormControl>
                                <InputLabel htmlFor="my-password">Senha </InputLabel>
                                <Input id="my-password" aria-describedby="my-helper-password" 
                                 onChange={(e)=>{setPassword(e.target.value)}}  />
                                <FormHelperText id="my-helper-password">Sua Senha</FormHelperText>
                            </FormControl>                  

                        </FormGroup>
                        <Button variant="contained" onClick={handleClose}
                         onSubmit={()=>{}}>Entrar no seu Perfil</Button>
                    </Container>
                </Box>
            </Modal>


        </>

    )
}




