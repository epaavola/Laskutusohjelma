import React, {useState, useEffect} from 'react'
import 'typeface-roboto'
import { withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import {newUser} from '../service/UserDataService'
import { useField } from '../hooks/UseFields'
import strings from "../LocalizedStrings"

/**
 *  Registration form for new user registration
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

    //Variables
    const username = useField('username')
    const password = useField('password')
    const name = useField('name')
    const address = useField('address')
    const city = useField('city')
    const email = useField('email')
    const vatID = useField('vatID')
    const bankAccount = useField('bankAccount')

    //States
    const [isRegistered, setIsRegistered] = useState(0)

    //Handle register
    const onSubmit = async (event) => {
        event.preventDefault()
        newUser(username.value,password.value,name.value,address.value,city.value,email.value,bankAccount.value,vatID.value)
        .then(response => setIsRegistered(response.status)) 
    }

    // Move to the dashboard after login is OK
    useEffect(() => {
        if(isRegistered === 200)
            props.history.push('/')
        }, [isRegistered]) 

    const classes = useStyles()
    return (
        
        <div className={classes.container}>   
            <div className={classes.registerInput}>
                <Typography variant="h3" color="primary">
                    {strings.enterInfo}
                </Typography>
                <br></br>
                <Typography>
                    * = {strings.required}
                </Typography>
            </div>
            <div>
                <form className={classes.form} onSubmit={onSubmit}>
                    <div>
                        <TextField 
                            className={classes.registerTextField} 
                            variant="outlined" 
                            label="Käyttäjänimi*"
                            type="text"
                            fullWidth
                            value={username.value}
                            onChange={username.onChange}
                        />
                        <TextField 
                            className={classes.registerTextField} 
                            variant="outlined" 
                            label="Salasana*"
                            type="password"
                            fullWidth
                            value={password.value}
                            onChange={password.onChange}
                        />
                        <TextField 
                            className={classes.registerTextField} 
                            variant="outlined" 
                            label="Yritys*"
                            type="text"
                            fullWidth
                            value={name.value}
                            onChange={name.onChange}
                        />
                        <TextField 
                            className={classes.registerTextField} 
                            variant="outlined" 
                            label="Sähköpostiosoite*"
                            type="text"
                            fullWidth
                            value={email.value}
                            onChange={email.onChange}
                        />
                        <TextField 
                            className={classes.registerTextField} 
                            variant="outlined" 
                            label="Y-tunnus"
                            type="text"
                            fullWidth
                            value={vatID.value}
                            onChange={vatID.onChange}
                        />
                        <TextField 
                            className={classes.registerTextField} 
                            variant="outlined" 
                            label="Postiosoite"
                            type="text"
                            fullWidth
                            value={address.value}
                            onChange={address.onChange}
                        />
                        <TextField 
                            className={classes.registerTextField} 
                            variant="outlined" 
                            label="Postitoimipaikka"
                            type="text"
                            fullWidth
                            value={city.value}
                            onChange={city.onChange}
                        />
                        <TextField 
                            className={classes.registerTextField} 
                            variant="outlined" 
                            label="Tilinumero"
                            type="text"
                            fullWidth
                            value={bankAccount.value}
                            onChange={bankAccount.onChange}
                        />
                        <Button variant="contained" color="primary" type="submit">
                            {strings.signup}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default withRouter(Registeration)