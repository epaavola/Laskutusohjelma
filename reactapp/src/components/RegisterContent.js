import React, {useState} from 'react'
import 'typeface-roboto'
import { withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import {newUser} from '../service/UserDataService'

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

    //States
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [nimi, setNimi] = useState('')
    const [osoite, setOsoite] = useState('')
    const [postitoimipaikka, setPostitoimipaikka] = useState('')
    const [sahkoposti, setSahkoposti] = useState('')
    const [ytunnus, setYtunnus] = useState('')
    const [tilinro, setTilinro] = useState('')

    //Handle register
    const onSubmit = async (event) => {
        event.preventDefault()
        await newUser(username,password,nimi,osoite,postitoimipaikka,sahkoposti,tilinro,ytunnus)
        
        if (window.confirm('Haluatko heti kirjautua sisään?')) {
            props.history.push('/dashboard')
        } else {
            props.history.push('/')
        }
        
    }

    //Handle inputs
    const handleUserameChange = (event) => {
        setUsername(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }
    const handleNimiChange = (event) => {
        setNimi(event.target.value)
    }
    const handleOsoiteChange = (event) => {
        setOsoite(event.target.value)
    }
    const handlePostitoimipaikkaChange = (event) => {
        setPostitoimipaikka(event.target.value)
    }
    const handleSahkopostiChange = (event) => {
        setSahkoposti(event.target.value)
    }
    const handleYtunnusChange = (event) => {
        setYtunnus(event.target.value)
    }
    const handleTilinroChange = (event) => {
        setTilinro(event.target.value)
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
                            label="Käyttäjänimi*"
                            type="text"
                            fullWidth
                            value={username}
                            onChange={handleUserameChange}
                        />
                        <TextField 
                            className={classes.registerTextField} 
                            variant="outlined" 
                            label="Salasana*"
                            type="password"
                            fullWidth
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <TextField 
                            className={classes.registerTextField} 
                            variant="outlined" 
                            label="Yritys*"
                            type="text"
                            fullWidth
                            value={nimi}
                            onChange={handleNimiChange}
                        />
                        <TextField 
                            className={classes.registerTextField} 
                            variant="outlined" 
                            label="Sähköpostiosoite*"
                            type="text"
                            fullWidth
                            value={sahkoposti}
                            onChange={handleSahkopostiChange}
                        />
                        <TextField 
                            className={classes.registerTextField} 
                            variant="outlined" 
                            label="Y-tunnus"
                            type="text"
                            fullWidth
                            value={ytunnus}
                            onChange={handleYtunnusChange}
                        />
                        <TextField 
                            className={classes.registerTextField} 
                            variant="outlined" 
                            label="Postiosoite"
                            type="text"
                            fullWidth
                            value={osoite}
                            onChange={handleOsoiteChange}
                        />
                        <TextField 
                            className={classes.registerTextField} 
                            variant="outlined" 
                            label="Postitoimipaikka"
                            type="text"
                            fullWidth
                            value={postitoimipaikka}
                            onChange={handlePostitoimipaikkaChange}
                        />
                        <TextField 
                            className={classes.registerTextField} 
                            variant="outlined" 
                            label="Tilinumero"
                            type="text"
                            fullWidth
                            value={tilinro}
                            onChange={handleTilinroChange}
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