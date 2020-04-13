import React from 'react';
import { withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const ButtonAppBar = (props) => {
    const Login = (event) => {
        event.preventDefault()
        props.history.push('/')
    }

    const Register = (event) => {
        event.preventDefault()
        props.history.push('/registration')
    }
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <AppBar position="static">
                    {window.location.pathname.localeCompare("/registration") ?
                        <Toolbar>
                            <Typography variant="h6" className={classes.title}>
                                Laskutusohjelma
                            </Typography>
                            <Button color="inherit" onClick={Register}>Rekisteröidy</Button>
                        </Toolbar>
                        :
                        <Toolbar>
                            <Typography variant="h6" className={classes.title}>
                                Laskutusohjelma - Rekisteröityminen
                            </Typography>
                            <Button color="inherit" onClick={Login}>Kirjaudu sisään</Button>
                        </Toolbar>
                    }
                </AppBar>
            </div>
        </>
    );
}

export default withRouter(ButtonAppBar)