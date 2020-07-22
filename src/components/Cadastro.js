import React, { Component, useState } from "react"
import CadastroStyle from './CadastroStyle.css'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";

// const styleInput = makeStyles((theme) => ({
//     root: {
//         '& .MuiTextField-root': {
//             margin: theme.spacing(1, 50),
//             width: 200,

//         },
//     },
// }));
// Verfica se o emial tem "@", se nao tiver ele notifica um erro
const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });



    return valid;
};






export default class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: {},
            error: {
                msg: "",
            },

            firstName: null,
            lastName: null,
            email: null,
            password: null,
            confirPassword: null,
            formErrors: {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirPassword: "",
            }
            
        }
        this.error = {
            ok: true,
            msg: "",
        }
    }



    handleSubmit = e => {
        e.preventDefault();
       


        if (formValid(this.state)) {
            console.log(`
            --SUBMITTING--
            First Name: ${this.state.firstName}
            Last Name: ${this.state.lastName}
            email: ${this.state.email}
            password: ${this.state.password}
            confirPassword: ${this.state.confirPassword}
            
          `);
            if (this.state.password == this.state.confirPassword) {
                

                console.log(`senhas iguais`);
            } else {
                this.error = {
                    msg: "senhas difetentes"
                }
                console.log(`senhas diferentes`);
            }
        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    };

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case "firstName":
                formErrors.firstName =
                    value.length < 0 ? "minimum 3 characaters required" : "";
                break;
            case "lastName":
                formErrors.lastName =
                    value.length < 0 ? "minimum 3 characaters required" : "";
                break;
            case "email":
                formErrors.email = emailRegex.test(value)
                    ? "" : "invalid email address";
                break;
            case "password":
                formErrors.password =
                    value.length < 3 ? "minimum 6 characaters required" : "";
                break;
            case "confirPassword":
                formErrors.confirPassword =
                    value.length < 3 ? "minimum 6 characaters required" : "";
                break;


        }
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    }




    render() {
        const { formErrors } = this.state;


        return (
            <form autoComplete="off" onSubmit={this.handleSubmit} noValidate>
                <div className="campoNome">
                    <TextField
                        className={formErrors.firstName.length > 0 ? "error" : null}
                        label="First name"
                        type="text"
                        name="firstName"
                        noValidate
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <TextField
                        className={formErrors.lastName.length > 0 ? "error" : null}
                        label="Last Name"
                        type="text"
                        name="lastName"
                        noValidate
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <TextField
                        className={formErrors.lastName.length > 0 ? "error" : null}
                        label="Email"
                        type="text"
                        name="email"
                        noValidate
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <TextField
                        className={formErrors.lastName.length > 0 ? "error" : null}
                        label="Password"
                        type="password"
                        name="password"
                        noValidate
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <TextField
                        className={formErrors.lastName.length > 0 ? "error" : null}
                        label="Confir password"
                        type="password"
                        name="confirPassword"
                        error={this.error}
                        helperText={this.msg}
                        noValidate
                        onChange={this.handleChange}
                    />


                    <div className="botao">
                        <br />
                        <Button
                            className="botao1"
                            type="submit"
                            variant="contained"
                            color="primary">
                            Log in
                        </Button>
                        <Button
                            className="botao1"
                            type="submit"
                            variant="contained"
                            color="primary">
                            Cancel
                        </Button>
                    </div>
                </div>
            </form>
        )
    }
}


