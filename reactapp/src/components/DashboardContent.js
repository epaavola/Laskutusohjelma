import React, { useState, useEffect } from 'react';
import 'typeface-roboto'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';
import { getUser } from '../service/UserDataService';
import { withRouter } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import strings from "../LocalizedStrings"

/**
 * Content of dashboard page
 */

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingLeft: theme.spacing(5),
        marginTop: theme.spacing(5),
    },
    table: {
        color: "primary",
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
    userInfo: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: theme.spacing(10),
        marginRight: theme.spacing(10),
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
        flexDirection: 'column',
        flexGrow: '1',
        justifyContent: 'felx-start',
        padding: theme.spacing(2.5),
    },
    paperUserInfo: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '1',
        justifyContent: 'felx-start',
        padding: theme.spacing(2.5),
    },
    paperUserInfoHeader: {
        paddingLeft: theme.spacing(10),
        paddingRight: theme.spacing(10)
    }
}));

const DashboardContent = () => {

    //Style
    const classes = useStyles();

    //States
    const [user, setUser] = useState([])

    //Get user data from database through API
    useEffect(() => {       
            showUserData()
      }, []);

    function showUserData() {
        getUser().then(res => setUser(res.data))
    }

    //return  
    return(
    <div className={classes.root}>
        <div className={classes.userInfo}>
            <Paper className={classes.paperUserInfo}>
                <Typography variant="h4" color="primary" className={classes.paperUserInfoHeader}>
                    {strings.info}
                </Typography>
                <TableContainer>
                    <Table>
                        <TableBody>                  
                            <TableRow>
                                <TableCell>{strings.company} :</TableCell>
                                <TableCell>{user.name}</TableCell> 
                            </TableRow>
                            <TableRow>
                                <TableCell>{strings.name} :</TableCell>
                                <TableCell>{user.username}</TableCell> 
                            </TableRow>
                            <TableRow>
                                <TableCell>{strings.email} :</TableCell>
                                <TableCell>{user.email}</TableCell> 
                            </TableRow>
                            <TableRow>
                                <TableCell>{strings.businessid} :</TableCell>
                                <TableCell>{user.vatID}</TableCell> 
                            </TableRow>
                            <TableRow>
                                <TableCell>{strings.address} :</TableCell>
                                <TableCell>{user.address}</TableCell> 
                            </TableRow>
                            <TableRow>
                                <TableCell>{strings.postal} :</TableCell>
                                <TableCell>{user.city}</TableCell> 
                            </TableRow>
                            <TableRow>
                                <TableCell>{strings.accnumber} :</TableCell>
                                <TableCell>{user.bankAccount}</TableCell> 
                            </TableRow>
                            <TableRow>  
                                <TableCell ><Button variant="contained" color="primary" 
                                    onClick={console.log("Ei toiminnallisuutta")}>{strings.update}</Button></TableCell>
                            </TableRow>
            
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
        <div className={classes.buttonContainer}>       
            <Paper className={classes.paperButton} elevation={3}>
                <Button className={classes.buttonMain} component={Link} to ="/uusilasku">{strings.newInvoice}</Button>
            </Paper>
            <Paper className={classes.paperButton} elevation={3}>
                <Button className={classes.buttonMain} component={Link} to ="/asiakkaat">{strings.customers}</Button>
            </Paper>    
        </div>
        <div className={classes.buttonContainer}>
            <Paper className={classes.paperButton} elevation={3}>
                <Button className={classes.buttonMain} component={Link} to ="/arkisto">{strings.archive}</Button>
            </Paper>
            <Paper className={classes.paperButton} elevation={3}>
                <Button className={classes.buttonMain} component={Link} to ="/asetukset">{strings.settings}</Button>
            </Paper>
        </div>
        <div className={classes.latestInvoice}>
            <Paper className={classes.paperLatestInvoice}>
            <Typography variant="h4" color="primary">
                    {strings.latestInvoices}
                </Typography>
            </Paper>
        </div>
    </div>
    )    
}


export default withRouter(DashboardContent)