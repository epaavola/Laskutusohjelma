import React from 'react'
import 'typeface-roboto'
import { withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import AppIcon from '../images/Laskutuslogo.png'

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
    const onSubmit = (event) => {
        event.preventDefault()
        props.history.push('/dashboard')
    }
    const classes = useStyles()
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
                        />
                        <TextField 
                            className={classes.loginTextField} 
                            variant="outlined" 
                            label="Salasana"
                            type="password"
                            fullWidth
                        />
                        <Button variant="contained" color="primary" type="submit">
                            Kirjaudu sisään
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default withRouter(Frontpage)