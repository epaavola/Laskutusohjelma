import React, { useState, useEffect } from 'react'
import 'typeface-roboto'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { getCustomers, newClient, deleteClient, updateClient } from '../service/ClientDataService';


const useStyles = makeStyles(theme => ({
    title: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    header1: {
        margin: '1%'
    },
    table: {
        
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: '10%', 
        marginRight: '10%',
        marginTop: '2%'
    },
    TextField: {
        margin: '2%'
    },
    newAsiakasButton: {
        marginLeft: theme.spacing(4),
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
    }
})) 


const AsiakkaatContent = (props) => {

    // Style
    const classes = useStyles()

    //States
    const [customers, setCustomers] = useState([])
    const [updatePage, setUpdatePage] = useState(false)

    //Get customers data from database through API
    useEffect(() => {       
        showCustomerData()
    }, []);

    function showCustomerData() {
        getCustomers().then(res => setCustomers(res.data))
    }
    return (
        <div>
            <div className={classes.title}>
                <Typography variant="h2" color="primary" className={classes.header1}>
                    Asiakkaat
                </Typography>
                <Button className={classes.newAsiakasButton} variant="contained" color="primary" onClick={(e) => {newClient(); setUpdatePage(!updatePage)}}>Lisää uusi asiakas</Button>
            </div>
            <div className={classes.content}>
                <TableContainer component={Paper}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Yrityksen Nimi</TableCell>
                                <TableCell align="center">Yhteyshenkilö</TableCell>
                                <TableCell align="center">Y-tunnus</TableCell>                       
                                <TableCell align="center">Osoite</TableCell>
                                <TableCell align="center">Postitoimipaikka</TableCell>
                                <TableCell align="center">Sähköposti</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>                  
                            {customers.map(customer => (
                                    <TableRow key={customer.id}>   
                                    <TableCell align="center">{customer.company}</TableCell>
                                    <TableCell align="center">{customer.name}</TableCell>
                                    <TableCell align="center">{customer.vatID}</TableCell>
                                    <TableCell align="center">{customer.address}</TableCell>
                                    <TableCell align="center">{customer.city}</TableCell>
                                    <TableCell align="center">{customer.email}</TableCell>
                                    <TableCell ><Button variant="contained" color="primary" 
                                        onClick={(e) => {updateClient(customer.company, e); setUpdatePage(!updatePage)}}>Päivitä</Button></TableCell>
                                    <TableCell ><Button variant="contained" color="secondary" 
                                        onClick={(e) => {deleteClient(customer.company, e); setUpdatePage(!updatePage)}}>Poista</Button></TableCell>
                                    </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    ) 
}


export default AsiakkaatContent