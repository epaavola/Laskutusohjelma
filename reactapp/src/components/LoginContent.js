import React, { useState, useEffect } from "react";
import 'typeface-roboto'
import { withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import AppIcon from '../images/Laskutuslogo.png'
import { userLogin } from '../service/UserDataService';

/**
 *  Login form for login page
 */

const useStyles  = makeStyles({
    container: {
    },
    loginInput: {
        marginBottom: '1%',
        marginLeft: '35%',
        marginRight: '30%',
    },
    form: {
        textAlign: 'center',
        marginLeft: '40%',
        marginRight: '40%',
        width: '15%',
        height: '50%'
    },
    loginTextField: {
        marginBottom: '20px'
    },
    image: {
        width: '75%',
        height: '75%',
        alignItems: 'center'
    }
})

const Frontpage = (props) => {

    //States
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isLogged, setIsLogged] = useState("")

    //Handle the login submit button
    const onSubmit = (event) => {
        event.preventDefault()
        userLogin(username, password)
        .then(response => {
            localStorage.setItem('auth', 'Bearer ' + response.data.token) // Save auth token to the local storage
            setIsLogged(response.status)
        })
        
    }
    // Move to the dashboard after login is OK
    useEffect(() => {
        if(isLogged === 200)
            props.history.push('/dashboard')
        }, [isLogged])

    //The most simple validation function for login form
    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    const classes = useStyles()

    //return
    return (
        
        <div className={classes.container}>   
            <div className={classes.loginInput}>
            <img src={AppIcon} alt="Laskutusohjelman logo" className={classes.image}></img>
                <Typography variant="h3" color="primary">
                    Syötä kirjautumistietosi
                </Typography>
            </div>
            <div>
                <form className={classes.form} onSubmit={onSubmit}>
                    <div>
                        <TextField 
                            className={classes.loginTextField} 
                            variant="outlined" 
                            label="Käyttäjätunnus"
                            type="text"
                            fullWidth
                            onChange={e => setUsername(e.target.value)}
                        />
                        <TextField 
                            className={classes.loginTextField} 
                            variant="outlined" 
                            label="Salasana"
                            type="password"
                            fullWidth
                            onChange={e => setPassword(e.target.value)}
                        />
                        <Button variant="contained" color="primary" disabled={!validateForm()} type="submit" >
                            Kirjaudu sisään
                        </Button>
                    </div>                   
                </form>
            </div>
        </div>
    )
}

export default withRouter(Frontpage)