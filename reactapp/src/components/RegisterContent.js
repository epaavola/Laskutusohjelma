import React from 'react'
import 'typeface-roboto'
import { withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

/**
 *  Registration form for registration
 */

const useStyles  = makeStyles({
    container: {
    },
    registerInput: {
        marginTop: '5%',
        marginBottom: '1%',
        marginLeft: '40%',
        marginRight: '30%',
    },
    form: {
        textAlign: 'center',
        marginLeft: '40%',
        marginRight: '40%',
        width: '15%',
        height: '50%'
    },
    registerTextField: {
        marginBottom: '20px'
    },
    image: {
        width: '75%',
        height: '75%',
        alignItems: 'center'
    }
})

const Registeration = (props) => {
    const onSubmit = (event) => {
        event.preventDefault()
        props.history.push('/')
    }
    const classes = useStyles()
    return (
        
        <div className={classes.container}>   
            <div className={classes.registerInput}>
                <Typography variant="h3" color="primary">
                    Syötä tietosi
                </Typography>
                <br></br>
                <Typography>
                    * = pakollinen tieto
                </Typography>
            </div>
            <div>
                <form className={classes.form} onSubmit={onSubmit}>
                    <div>
                        <TextField 
                            className={classes.registerTextField} 
                            variant="outlined" 
                            label="Etunimi*"
                            type="text"
                            fullWidth
                        />
                        <TextField 
                            className={classes.registerTextField} 
                            variant="outlined" 
                            label="Sukunimi*"
                            type="text"
                            fullWidth
                        />
                        <TextField 
                            className={classes.registerTextField} 
                            variant="outlined" 
                            label="Sähköpostiosoite*"
                            type="text"
                            fullWidth
                        />
                        <TextField 
                            className={classes.registerTextField} 
                            variant="outlined" 
                            label="Y-tunnus"
                            type="text"
                            fullWidth
                        />
                        <TextField 
                            className={classes.registerTextField} 
                            variant="outlined" 
                            label="Postiosoite"
                            type="text"
                            fullWidth
                        />
                        <TextField 
                            className={classes.registerTextField} 
                            variant="outlined" 
                            label="Postitoimipaikka"
                            type="text"
                            fullWidth
                        />
                        <TextField 
                            className={classes.registerTextField} 
                            variant="outlined" 
                            label="Salasana*"
                            type="password"
                            fullWidth
                        />
                        <Button variant="contained" color="primary" type="submit">
                            Rekisteröidy
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default withRouter(Registeration)