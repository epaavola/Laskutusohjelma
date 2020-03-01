import React, { useState, useEffect } from 'react'
import 'typeface-roboto'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { getUser } from '../service/UserDataService';

const useStyles  = makeStyles(theme => ({
    title: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    header1: {
        margin: '1%'
    },
    emptyButton: {
        width: '6%',
        height: '8%',
        marginTop: '2%',
        marginLeft: '1%'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    invoiceInfoCards: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    createButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingTop: theme.spacing(5),
        paddingRight: theme.spacing(45)
    },
    card: {
        width: '20%',
        margin: '1%'
    },
    TextField: {
        margin: '2%'
    }
}))

const UusiLaskuContent = (props) => {
    //Style
    const classes = useStyles()

    //States
    const [user, setUser] = useState([])
    const [invoiceReceiverName, setInvoiceReceiverName] = useState('')
    const [invoiceReceiverContactPerson, setInvoiceReceiverContactPerson] = useState('')
    const [invoiceReceiverPostAddress, setInvoiceReceiverPostAddress] = useState('')
    const [invoiceReceiverPostalCode, setInvoiceReceiverPostalCode] = useState('')
    const [invoiceNumber, setInvoiceNumber] = useState('')
    const [invoiceDate, setInvoiceDate] = useState('')
    const [invoiceExpirationDate, setInvoiceExpirationDate] = useState('')
    const [invoicePenaltyInterest, setInvoicePenaltyInterest] = useState('')
    const [billerBusinessId, setBillerBusinessId] = useState('')
    const [billerName, setBillerName] = useState('')
    const [billerPostAddress, setBillerPostAddress] = useState('')
    const [billerPostalCode, setBillerPostalCode] = useState('')

    //Button to clear states
    const emptyTextFields = (event) => {
        setInvoiceReceiverName('')
        setInvoiceReceiverContactPerson('')
        setInvoiceReceiverPostAddress('')
        setInvoiceReceiverPostalCode('')
        setInvoiceNumber('')
        setInvoiceDate('')
        setInvoiceExpirationDate('')
        setInvoicePenaltyInterest('')
        setBillerBusinessId('')
        setBillerName('')
        setBillerPostAddress('')
        setBillerPostalCode('')
    }

    //Event listeners
    const handleInvoiceReceiverNameChange = (event) => {
        setInvoiceReceiverName(event.target.value)
    }
    const handleInvoiceReceiverContactPersonChange = (event) => {
        setInvoiceReceiverContactPerson(event.target.value)
    }
    const handleInvoiceReceiverPostAddressChange = (event) => {
        setInvoiceReceiverPostAddress(event.target.value)
    }
    const handleInvoiceReceiverPostalCodeChange = (event) => {
        setInvoiceReceiverPostalCode(event.target.value)
    }
    const handleInvoiceNumberChange = (event) => {
        setInvoiceNumber(event.target.value)
    }
    const handleInvoiceDateChange = (event) => {
        setInvoiceDate(event.target.value)
    }
    const handleInvoiceExpirationDateChange = (event) => {
        setInvoiceExpirationDate(event.target.value)
    }
    const handleInvoicePenaltyInterestChange = (event) => {
        setInvoicePenaltyInterest(event.target.value)
    }
    const handleBillerBusinessIdChange = (event) => {
        setBillerBusinessId(event.target.value)
    }
    const handleBillerNameChange = (event) => {
        setBillerName(event.target.value)
    }
    const handleBillerPostAddressChange = (event) => {
        setBillerPostAddress(event.target.value)
    }
    const handleBillerPostalCodeChange = (event) => {
        setBillerPostalCode(event.target.value)
    }

    //Get user data from database through API
    useEffect(() => {
        let data = null;
        (async function fetchData() {
            data = await getUser();
            setUser(data)         
        })();
      }, []);

    return (
        <div>
            <div className={classes.title}>
                <Typography variant="h2" color="primary" className={classes.header1}>
                    Luo uusi lasku
                </Typography>
                <Button variant="contained" color="primary" className={classes.emptyButton} onClick={emptyTextFields}>
                    Tyhjennä
                </Button>
            </div>
            <form className={classes.form}>
                <div className={classes.invoiceInfoCards}>
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
                                value={invoiceReceiverName}
                                onChange={handleInvoiceReceiverNameChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="outlined" 
                                label="Yhteyshenkilö"
                                type="text"
                                fullWidth
                                value={invoiceReceiverContactPerson}
                                onChange={handleInvoiceReceiverContactPersonChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="outlined" 
                                label="Postiosoite"
                                type="text"
                                fullWidth
                                value={invoiceReceiverPostAddress}
                                onChange={handleInvoiceReceiverPostAddressChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="outlined" 
                                label="Postitoimipaikka"
                                type="text"
                                fullWidth
                                value={invoiceReceiverPostalCode}
                                onChange={handleInvoiceReceiverPostalCodeChange}
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
                                value={invoiceNumber}
                                onChange={handleInvoiceNumberChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="outlined" 
                                label="Laskun päiväys, dd.mm.yyyy"
                                type="text"
                                fullWidth
                                value={invoiceDate}
                                onChange={handleInvoiceDateChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="outlined" 
                                label="Eräpäivä, dd.mm.yyyy"
                                type="text"
                                fullWidth
                                value={invoiceExpirationDate}
                                onChange={handleInvoiceExpirationDateChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="outlined" 
                                label="Myöhästymiskorko, %"
                                type="text"
                                fullWidth
                                value={invoicePenaltyInterest}
                                onChange={handleInvoicePenaltyInterestChange}
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
                                value={billerBusinessId}
                                onChange={handleBillerBusinessIdChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="outlined" 
                                label="Nimi"
                                type="text"
                                fullWidth
                                value={billerName}
                                onChange={handleBillerNameChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="outlined" 
                                label="Postiosoite"
                                type="text"
                                fullWidth
                                value={billerPostAddress}
                                onChange={handleBillerPostAddressChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="outlined" 
                                label="Postitoimipaikka"
                                type="text"
                                fullWidth
                                value={billerPostalCode}
                                onChange={handleBillerPostalCodeChange}
                            />
                        </CardContent>
                    </Card>
                </div>
                <div className={classes.createButton}>
                    <Button type="submit" variant="contained" color="primary">
                        Luo
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default UusiLaskuContent