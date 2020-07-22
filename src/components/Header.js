import React from "react";
import Login from "./Login"
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import AcUnitRoundedIcon from "@material-ui/icons/AcUnitRounded";
import { makeStyles } from "@material-ui/styles";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
    typographyStyles: {
        flex: 1
    }
}));

// const history = useHistory();



const Header = () => {


    const history = useHistory();

    const handlerLogin = () => {


        history.replace("/Login");
    }

    const classes = useStyles();
    return (

        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.typographyStyles}>
                    Executives
                </Typography>
                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handlerLogin}
                    >
                        Logar
                     </Button>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;