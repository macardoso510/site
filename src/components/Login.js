import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles'
import './CadastroStyle.css'
import Button from '@material-ui/core/Button';

const inputStyle = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1, 50),
            width: 300,



        },
    },
}));

export default function Login() {
    const classes = inputStyle();
    return (

        <form className={classes.root} noValidate autoComplete="off">
            <br />
            <br />
            <br />
            <br />
            <div className="campo">
                <TextField id="nomePessoa"
                    helperText="Login"
                    variant="outlined"
                ></TextField>
                <br />
                <TextField
                    helperText="Senha"
                    variant="outlined"
                ></TextField>
                <br />

                <a className="info1">Caso ainda não tenha cadastro no nosso site, aperte<strong><a href="/Cadastro" className="aqui"> aqui</a></strong> pra fazer um!</a>
                <br />
                <br />
                <div className="botao">
                    <Button
                        variant="contained"
                        color="primary"
                        className="botao1"
                    >
                        Logar
                     </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        className="botao2"

                    >
                        Sair
                </Button>
                </div>
                
            </div>

        </form>
    )
}