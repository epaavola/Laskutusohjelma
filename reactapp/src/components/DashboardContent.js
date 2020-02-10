import React from 'react';
import 'typeface-roboto'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';

/**
 * Content of dashboard page
 */

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      paddingLeft: theme.spacing(50),
      marginTop: theme.spacing(5),
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: theme.spacing(10),
        padding: theme.spacing(2.5),
    },
    buttonMain: {
        color: 'primary',
        padding: theme.spacing(8),
        size: 'large',
        flexGrow: '1',
    },
    latestInvoice: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: theme.spacing(10),
        marginLeft: theme.spacing(10),
        padding: theme.spacing(2.5),
    },
    paperButton: {
        display: 'flex',
        justifyContent: 'center',
        color: 'primary',
        padding: theme.spacing(0),
        marginBottom: theme.spacing(5),
    },
    paperLatestInvoice: {
        display: 'flex',
        flexGrow: '1',
        justifyContent: 'center',
        padding: theme.spacing(2.5),
    }
}));


const DashboardContent = () => {

    const classes = useStyles();

    return(
    <div className={classes.root}>

        <div className={classes.buttonContainer}>       
            <Paper className={classes.paperButton} elevation={3}>
                <Button className={classes.buttonMain}>Uusi Lasku</Button>
            </Paper>
            <Paper className={classes.paperButton} elevation={3}>
                <Button className={classes.buttonMain}>Asiakkaat</Button>
            </Paper>    
        </div>
        <div className={classes.buttonContainer}>
            <Paper className={classes.paperButton} elevation={3}>
                <Button className={classes.buttonMain}>Arkisto</Button>
            </Paper>
            <Paper className={classes.paperButton} elevation={3}>
                <Button className={classes.buttonMain}>Asetukset</Button>
            </Paper>
        </div>
        <div className={classes.latestInvoice}>
            <Paper className={classes.paperLatestInvoice}>
            <Typography variant="h4" color="primary">
                    Viimeisimmät laskut
                </Typography>
            </Paper>
        </div>
    </div>
    )    
}


export default DashboardContent