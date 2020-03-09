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
import { getClients, newClient, deleteClient, updateClient } from '../service/ClientDataService';


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
    const [yritykset, setYritykset] = useState([])

    //Get all clients from database through API
    useEffect(() => {
        let data = null;
        (async function fetchData() {
            data = await getClients();
            setYritykset(data)
        })();
      }, []);

    return (
        <div>
            <div className={classes.title}>
                <Typography variant="h2" color="primary" className={classes.header1}>
                    Asiakkaat
                </Typography>
                <Button className={classes.newAsiakasButton} variant="contained" color="primary" onClick={(e) => newClient(e)}>Lisää uusi asiakas</Button>
            </div>
            <div className={classes.content}>
                <TableContainer component={Paper}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell align="right">Yrityksen Nimi</TableCell>
                                <TableCell align="right">Y-tunnus</TableCell>
                                <TableCell align="right">Yhteyshenkilö</TableCell>
                                <TableCell align="right">Osoite</TableCell>
                                <TableCell align="right">Postitoimipaikka</TableCell>
                                <TableCell align="right">Sähköposti</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>                  
                            {yritykset.map(yritys => (
                                    <TableRow key={yritys.id}>
                                    <TableCell component="th" scope="row">{yritys.id}</TableCell>   
                                    <TableCell align="right">{yritys.yritysnimi}</TableCell>
                                    <TableCell align="right">{yritys.yritysnumero}</TableCell>
                                    <TableCell align="right">-</TableCell>
                                    <TableCell align="right">-</TableCell>
                                    <TableCell align="right">{yritys.tilinumero}</TableCell>
                                    <TableCell align="right">-</TableCell>
                                    <TableCell ><Button variant="contained" color="primary" onClick={(e) => updateClient(yritys.id, e)}>Päivitä</Button></TableCell>
                                    <TableCell ><Button variant="contained" color="secondary" onClick={(e) => deleteClient(yritys.id, e)}>Poista</Button></TableCell>
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