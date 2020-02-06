import React from 'react'
import 'typeface-roboto'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const useStyles  = makeStyles({
    container: {
        marginTop: '15%'
    },
    loginInput: {
        marginBottom: '50px',
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
    }
})

const Frontpage = () => {
    const classes = useStyles()
    return (
        
        <div className={classes.container}>   
            <div className={classes.loginInput}>
                <Typography variant="h3" color="primary">
                    Syötä kirjautumistietosi
                </Typography>
            </div>
            <div>
                <form className={classes.form}>
                    <div>
                        <TextField className={classes.loginTextField} variant="outlined" label="Käyttäjätunnus" />
                        <TextField className={classes.loginTextField} variant="outlined" label="Salasana" />
                        <Button variant="contained" color="primary">
                            Kirjaudu sisään
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Frontpage