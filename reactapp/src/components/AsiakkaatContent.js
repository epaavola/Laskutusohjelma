import React, { useState, useEffect } from 'react'
import 'typeface-roboto'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Paper } from '@material-ui/core'
<<<<<<< HEAD
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { getCustomers, newClient, deleteClient, updateClient } from '../service/ClientDataService'
import strings from "../LocalizedStrings"
=======
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { getCustomers, newCustomer, deleteCustomer, updateClient } from '../service/ClientDataService';
import { useField } from '../hooks/UseFields'

>>>>>>> 2c4e6574bfff894d7061c18ed88560f65fe80371

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

    //Variables
    const company = useField('company')
    const name = useField('name')
    const vatID = useField('vatID')
    const address = useField('address')
    const city = useField('city')
    const email = useField('email')

    // Style
    const classes = useStyles()

    //States
    const [customers, setCustomers] = useState([])
    const [open, setOpen] = useState(false)

    //Handle register
    const onSubmit = async (event) => {
        if(company.value != null) {
            event.preventDefault()
            newCustomer(company.value, vatID.value, name.value, address.value, city.value, email.value)
        }
        handleClose()
        window.location.reload()   
    }

    //Get customers data from database through API
    useEffect(() => {
        showCustomerData()
    }, []);

    function showCustomerData() {
        getCustomers().then(res => setCustomers(res.data))
    }
    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
        window.location.reload()
    }

    return (
        <div>
            <div className={classes.title}>
                <Typography variant="h2" color="primary" className={classes.header1}>
                    {strings.customers}
                </Typography>
                <Button className={classes.newAsiakasButton} variant="contained" color="primary" onClick={handleClickOpen}>Lisää uusi asiakas</Button>
            </div>
            <div className={classes.content}>
                <TableContainer component={Paper}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">{strings.companyName}</TableCell>
                                <TableCell align="center">{strings.contactP}</TableCell>
                                <TableCell align="center">{strings.businessid}</TableCell>                       
                                <TableCell align="center">{strings.address}</TableCell>
                                <TableCell align="center">{strings.postal}</TableCell>
                                <TableCell align="center">{strings.email}</TableCell>
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
                                        onClick={(e) => { updateClient(customer.company, e)}}>{strings.update}</Button></TableCell>
                                    <TableCell ><Button variant="contained" color="secondary"
                                        onClick={(e) => { deleteCustomer(customer.company, e); handleClose() }}>{strings.delete}</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle>Uusi Asiakas</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Täytä uuden asiakkaan tiedot taulukkoon ja paina sen jälkeen tallenna.
                        Voit tallentaa asiakkaan vaikka jokin tieto puuttuisi.
                        Tietoja voi helposti muokata jälkikäteen 'päivitä' -painikkeen avulla.
          </DialogContentText>
                    <TextField
                        className={classes.TextField}
                        variant="standard"
                        label="Yrityksen nimi"
                        type="text"
                        fullWidth
                        value={company.value}
                        onChange={company.onChange}
                    />
                    <TextField
                        className={classes.TextField}
                        variant="standard"
                        label="Yhteyshenkilö"
                        type="text"
                        fullWidth
                        value={name.value}
                        onChange={name.onChange}
                    />
                    <TextField
                        className={classes.TextField}
                        variant="standard"
                        label="Y-tunnus"
                        type="text"
                        fullWidth
                        value={vatID.value}
                        onChange={vatID.onChange}
                    />
                    <TextField
                        className={classes.TextField}
                        variant="standard"
                        label="Postiosoite"
                        type="text"
                        fullWidth
                        value={address.value}
                        onChange={address.onChange}
                    />
                    <TextField
                        className={classes.TextField}
                        variant="standard"
                        label="Postinumero ja -toimipaikka"
                        type="text"
                        fullWidth
                        value={city.value}
                        onChange={city.onChange}
                    />
                    <TextField
                        className={classes.TextField}
                        variant="standard"
                        label="Sähköposti"
                        type="text"
                        fullWidth
                        value={email.value}
                        onChange={email.onChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Peruuta
                    </Button>
                    <Button onClick={onSubmit} color="primary">
                        Tallenna
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}


export default AsiakkaatContent