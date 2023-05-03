import { useState } from "react";
import CssBaseline from '@mui/material/CssBaseline';

import HowToRegIcon from '@mui/icons-material/HowToReg';

import { Button,Modal,Box,Typography, Container,FormControl,
FormHelperText,Input,InputLabel, FormGroup,AppBar,Toolbar, } from "@mui/material";



// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };


export function Register(){

//Modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
//Form
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password1, setPassword1] = useState("");
    
    return(
        <>
            <Button onClick={handleOpen}>Cadastrar</Button>
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
                            < HowToRegIcon  sx={{ mr: 2 }} />
                            <Typography  variant="h6" noWrap>
                                Registro
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
                                 onChange={(e)=>{setPassword(e.target.value)}} />
                                <FormHelperText id="my-helper-password">Sua Senha</FormHelperText>
                            </FormControl>

                            <FormControl>
                                <InputLabel htmlFor="my-password1">Confirme sua Senha </InputLabel>
                                <Input id="my-password1" aria-describedby="my-helper-password1" 
                                  onChange={(e)=>{setPassword1(e.target.value)}} />
                                <FormHelperText id="my-helper-password1">Confirme sua Senha</FormHelperText>
                            </FormControl>

                        </FormGroup>
                        <Button variant="contained"
                         onClick={handleClose} onSubmit={()=>{}}>Cadastrar</Button>
                    </Container>
                </Box>
            </Modal>


        </>

    )
}




