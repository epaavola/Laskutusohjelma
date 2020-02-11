import React from 'react'
import 'typeface-roboto'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

const useStyles  = makeStyles({
    header1: {
        margin: '1%'
    },
    form: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    card: {
        width: '20%',
        margin: '1%'
    },
    TextField: {
        margin: '2%'
    }
})

const UusiLaskuContent = (props) => {
    const classes = useStyles()

    return (
        <div>
            <Typography variant="h2" color="primary" className={classes.header1}>
                Luo uusi lasku
            </Typography>
            <form className={classes.form}>
            <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h6" color="secondary">
                            Laskunsaajan tiedot
                        </Typography>
                        <TextField
                            className={classes.TextField}
                            variant="outlined" 
                            label="Nimi"
                            type="text"
                            fullWidth
                        />
                        <TextField
                            className={classes.TextField}
                            variant="outlined" 
                            label="Yhteyshenkilö"
                            type="text"
                            fullWidth
                        />
                        <TextField
                            className={classes.TextField}
                            variant="outlined" 
                            label="Postiosoite"
                            type="text"
                            fullWidth
                        />
                        <TextField
                            className={classes.TextField}
                            variant="outlined" 
                            label="Postitoimipaikka"
                            type="text"
                            fullWidth
                        />
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h6" color="secondary">
                            Laskun tiedot
                        </Typography>
                        <TextField
                            className={classes.TextField}
                            variant="outlined" 
                            label="Laskun numero"    
                            type="text"
                            fullWidth
                        />
                        <TextField
                            className={classes.TextField}
                            variant="outlined" 
                            label="Laskun päiväys, dd.mm.yyyy"
                            type="text"
                            fullWidth
                        />
                        <TextField
                            className={classes.TextField}
                            variant="outlined" 
                            label="Eräpäivä, dd.mm.yyyy"
                            type="text"
                            fullWidth
                        />
                        <TextField
                            className={classes.TextField}
                            variant="outlined" 
                            label="Myöhästymiskorko, %"
                            type="text"
                            fullWidth
                        />
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h6" color="secondary">
                            Omat tiedot
                        </Typography>
                        <TextField
                            className={classes.TextField}
                            variant="outlined" 
                            label="Y-tunnus"    
                            type="text"
                            fullWidth
                        />
                        <TextField
                            className={classes.TextField}
                            variant="outlined" 
                            label="Nimi"
                            type="text"
                            fullWidth
                        />
                        <TextField
                            className={classes.TextField}
                            variant="outlined" 
                            label="Postiosoite"
                            type="text"
                            fullWidth
                        />
                        <TextField
                            className={classes.TextField}
                            variant="outlined" 
                            label="Postitoimipaikka"
                            type="text"
                            fullWidth
                        />
                    </CardContent>
                </Card>
            </form>
        </div>
    )
}

export default UusiLaskuContent