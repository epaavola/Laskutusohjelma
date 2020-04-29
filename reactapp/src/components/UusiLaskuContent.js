import React, { useState, useEffect } from 'react'
import 'typeface-roboto'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import { getUser } from '../service/UserDataService';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {getCustomers} from '../service/ClientDataService'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import { useField } from '../hooks/UseFields'
import { getALVdata, getBankData } from '../components/DataVariables'
import strings from "../LocalizedStrings.js"

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
    createButtonDiv: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingTop: theme.spacing(5),
        paddingRight: theme.spacing(45),
    },
    createInvoiceButton: {
        width: '120px',
        height: '50px'
    },
    createProductButton: {
        width: '150px',
        height: '50px',
        marginLeft: '46%',
    },
    card: {
        width: '20%',
        margin: '1%'
    },
    productsCard: {
        minWidth: '40%',
        maxWidth: '60%',
        marginTop: '1%',
        marginLeft: '15%'
    },
    TextField: {
        margin: '2%'
    },
    invoiceMessage: {
        marginLeft: '18%',
        marginRight: '18%'
    },
    previewHeader: {
        marginLeft: '15%'
    },
    table: {
        minWidth: 650
      },
    total: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(10)
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 160,
    },
    
}))

const UusiLaskuContent = (props) => {
    //Style
    const classes = useStyles()

    //Variables
    const minDate = new Date()
    const alvKannat = getALVdata()
    const pankit = getBankData()

    const customers = useField([])
    const customerActive = useField([])
    const customer = useField('')
    const invoiceReceiverName = useField('invoiceReceiverName')
    const invoiceReceiverContactPerson = useField('invoiceReceiverContactPerson')
    const invoiceReceiverPostAddress = useField('invoiceReceiverPostAddress')
    const invoiceReceiverPostalCode = useField('invoiceReceiverPostalCode')
    const invoiceReceiverPostOffice = useField('invoiceReceiverPostOffice')

    const invoiceNumber = useField('invoiceNumber')
    const invoiceDate = useField(new Date()) 
    const invoiceExpirationDate = useField(new Date()) 
    const invoicePenaltyInterest = useField('invoicePenaltyInterest')
    const invoiceMessage = useField('invoiceMessage')
    const invoiceRefNumber = useField('invoiceRefNumber')
    const invoiceNotificationTime = useField('invoiceNotificationTime')

    const billerBusinessId = useField('billerBusinessId')
    const billerName = useField('billerName')
    const billerPostAddress = useField('billerPostAddress')
    const billerPostalCode = useField('billerPostalCode')
    const billerAccountNumber = useField('billerAccountNumber')
 
    const productName = useField('productName')
    const productAmount = useField('productAmount')
    const productPrice = useField('productPrice')
    const productPriceNet = useField(0) 
    const productPriceGross = useField(0) 
    const productPriceTax = useField(0) 
    const alvKanta = useField('')
    const products = useField([])
    const bank = useField('')
    const [dialogOpen, setDialogOpen] = useState(false)
    const [tempProduct, setTempProduct] = useState('')
    const netPrice = useField(0)
    const tax = useField(0)
    const gross = useField(0)

    //Run fetch functions on page load
    useEffect(() => {       
        showCustomerData()
        showUserData()
    }, []);

    // Get customers from database
    function showCustomerData() {
        getCustomers().then(res => {
            customers.setArrayData(res.data)
        })
    }
    // Get the user data from database and fill the 'Omat tiedot' form
    function showUserData() {
        getUser().then(res => {
            billerName.setValue(res.data.name)
            billerPostAddress.setValue(res.data.address)
            billerPostalCode.setValue(res.data.city)
            billerBusinessId.setValue(res.data.vatID)
            billerAccountNumber.setValue(res.data.bankAccount)
        })    
    }

    //Button to clear states  
    const emptyTextFields = (event) => {
        window.location.reload(false);
    }

    const handleAddingProduct = () => {
        console.log('product price net tultaessa addingiin', productPriceNet.price)
        const productObject = {
            name: productName.value,
            amount: productAmount.value,
            price: productPrice.value,
            alvKanta: alvKanta.value
        }
        products.setArrayData(products.array.concat(productObject))
        netPrice.setPrices(Math.round((productPriceNet.price + productObject.price * productObject.amount) * 100) / 100)
        tax.setPrices(Math.round((productPriceTax.price + productObject.price * productObject.amount * (productObject.alvKanta / 100)) * 100 ) / 100)
        gross.setPrices(Math.round((netPrice.price + tax.price) * 100) / 100)
        productPriceNet.setPrices(netPrice.price)
        productPriceTax.setPrices(tax.price)
        productPriceGross.setPrices(gross.price)
        productName.reset()
        productPrice.reset()
        productAmount.reset()
        alvKanta.reset()
    }

    const openDialog = (name) => {
        setDialogOpen(true)
        setTempProduct(name)
    }

    const closeDialog = () => {
        setDialogOpen(false)
    }

    const handleUpdatingProduct = (name) => {
        var productToUpdate = products.array.find(product => product.name === name)
        netPrice = Math.round(((productPriceNet.price + productPrice.value * productAmount.value) - (productToUpdate.price * productToUpdate.amount)) * 100) / 100
        tax = Math.round(((productPriceTax.price + productPrice.value * productAmount.value * (alvKanta.value / 100)) 
            - (productToUpdate.price * productToUpdate.amount * (productToUpdate.alvKanta / 100))) * 100 ) / 100
        gross = Math.round((netPrice + tax) * 100) / 100
        productPriceNet.setPrices(netPrice)
        productPriceTax.setPrices(tax)
        productPriceGross.setPrices(gross)
        const indexToUpdate = products.array.indexOf(productToUpdate)
        productToUpdate.name = productName.value
        productToUpdate.amount = productAmount.value
        productToUpdate.price = productPrice.value
        productToUpdate.alvKanta = alvKanta.value
        products.setArrayData(products.array.filter(product => product.name !== productToUpdate.name))
        products.array.splice(indexToUpdate, 1)
        products.setArrayData(products.array.concat(productToUpdate))
        productName.reset()
        productPrice.reset()
        productAmount.reset()
        alvKanta.reset()
        setTempProduct('')
    }

    const handleDeletingProduct = (name) => {
        const productToDelete = products.array.find(product => product.name === name)
        netPrice.setPrices(Math.round((productPriceNet.price - productToDelete.price * productToDelete.amount) * 100) / 100)
        tax.setPrices(Math.round((productPriceTax.price - productToDelete.price * productToDelete.amount * (productToDelete.alvKanta / 100)) * 100 ) / 100)
        gross.setPrices(Math.round((netPrice.price + tax.price) * 100) / 100)
        console.log(netPrice.price)
        productPriceNet.setPrices(netPrice.price)
        productPriceTax.setPrices(tax.price)
        productPriceGross.setPrices(gross.price)
        console.log('price net kun deleten update valmis', productPriceNet.price)
        products.setArrayData(products.array.filter(product => product.name !== productToDelete.name))
        const indexToDelete = products.array.indexOf(productToDelete)
        products.array.splice(indexToDelete, 1)
    }

    return (
        <div>
            <div className={classes.title}>
                <Typography variant="h2" color="primary" className={classes.header1}>
                    {strings.newInvoice}
                </Typography>
                <Button variant="contained" color="secondary" className={classes.emptyButton} onClick={emptyTextFields}>
                    {strings.clear}
                </Button>
            </div>
            <form className={classes.form}>
                <div className={classes.invoiceInfoCards}>
                <Card className={classes.card}>
                        <CardContent>
                            <Typography variant="h6" color="secondary">
                                {strings.info}
                            </Typography>
                            <TextField
                                className={classes.TextField}
                                variant="standard" 
                                label="Yrityksen nimi"
                                type="text"
                                fullWidth
                                value={billerName.value}
                                onChange={billerName.onChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard" 
                                label="Postiosoite"
                                type="text"
                                fullWidth
                                value={billerPostAddress.value}
                                onChange={billerPostAddress.onChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard" 
                                label="Postinumero ja -toimipaikka"
                                type="text"
                                fullWidth
                                value={billerPostalCode.value}
                                onChange={billerPostalCode.onChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard" 
                                label="Y-tunnus"    
                                type="text"
                                fullWidth
                                value={billerBusinessId.value}
                                onChange={billerBusinessId.onChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard" 
                                select 
                                label="Pankki"
                                type="text"
                                fullWidth
                                value={bank.value}
                                onChange={bank.onChange}
                            >
                                {pankit.map(pankki => (
                                    <MenuItem key={pankki.value} value={pankki.value}>
                                        {pankki.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                className={classes.TextField}
                                variant="standard" 
                                label="Tilinumero (IBAN)"    
                                type="text"
                                fullWidth
                                value={billerAccountNumber.value}
                                onChange={billerAccountNumber.onChange}
                            />
                        </CardContent>
                    </Card>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant="h6" color="secondary">
                                Laskunsaajan tiedot
                            </Typography>
                            <TextField
                                className={classes.TextField}
                                variant="standard" 
                                select 
                                label="Asiakas"
                                type="text"
                                fullWidth
                                value={customer.value}
                                onChange={customer.onChange}
                            >
                                {customers.array.map(asiakas => (
                                    <MenuItem key={asiakas.company} value={asiakas.company}>
                                        {asiakas.company}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                className={classes.TextField}
                                variant="standard" 
                                label="Nimi / yrityksen nimi"
                                type="text"
                                fullWidth
                                value= {invoiceReceiverName.value}
                                onChange={invoiceReceiverName.onChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard" 
                                label="Yhteyshenkilö"
                                type="text"
                                fullWidth
                                value={invoiceReceiverContactPerson.value}
                                onChange={invoiceReceiverContactPerson.onChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard" 
                                label="Postiosoite"
                                type="text"
                                fullWidth
                                value={invoiceReceiverPostAddress.value}
                                onChange={invoiceReceiverPostAddress.onChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard" 
                                label="Postinumero"
                                type="text"
                                fullWidth
                                value={invoiceReceiverPostalCode.value}
                                onChange={invoiceReceiverPostalCode.onChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard" 
                                label="Postitoimipaikka"
                                type="text"
                                fullWidth
                                value={invoiceReceiverPostOffice.value}
                                onChange={invoiceReceiverPostOffice.onChange}
                            />
                        </CardContent>
                    </Card>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant="h6" color="secondary">
                                {strings.invoiceInfo}
                            </Typography>
                            <TextField
                                className={classes.TextField}
                                variant="standard" 
                                label="Laskun numero"    
                                type="text"
                                fullWidth
                                value={invoiceNumber.value}
                                onChange={invoiceNumber.onChange}
                            />
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    className={classes.TextField}
                                    disableToolbar
                                    variant="inline"
                                    format="dd.MM.yyyy"
                                    fullWidth
                                    id="date-picker-standard"
                                    label="Laskun päiväys"
                                    minDate={minDate}
                                    value={invoiceDate.date}
                                    onChange={invoiceDate.onChangeDate}
                                    KeyboardButtonProps={{ 'aria-label': 'change-date' }}
                                />
                                <KeyboardDatePicker
                                    className={classes.TextField}
                                    disableToolbar
                                    variant="inline"
                                    format="dd.MM.yyyy"
                                    fullWidth
                                    id="date-picker-standard"
                                    label="Laskun eräpäivä"
                                    minDate={minDate}
                                    value={invoiceExpirationDate.date}
                                    onChange={invoiceExpirationDate.onChangeDate}
                                    KeyboardButtonProps={{ 'aria-label': 'change-date' }}
                                />
                            </MuiPickersUtilsProvider>
                            <TextField
                                className={classes.TextField}
                                variant="standard" 
                                label="Myöhästymiskorko, %"
                                type="text"
                                fullWidth
                                value={invoicePenaltyInterest.value}
                                onChange={invoicePenaltyInterest.onChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard" 
                                label="Viitenumero"
                                type="text"
                                fullWidth
                                value={invoiceRefNumber.value}
                                onChange={invoiceRefNumber.onChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard" 
                                label="Huomautusaika (vrk)"
                                type="text"
                                fullWidth
                                value={invoiceNotificationTime.value}
                                onChange={invoiceNotificationTime.onChange}
                            />
                        </CardContent>
                    </Card>
                </div>
                <div className={classes.invoiceMessage}>
                    <Typography variant="h6" color="secondary">
                        Laskuviesti
                    </Typography>
                    <TextField
                        variant="outlined"
                        type="text"
                        fullWidth
                        value={invoiceMessage.value}
                        onChange={invoiceMessage.onChange}
                    />
                </div>
                <div className={classes.invoiceInfoCards}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant="h6" color="secondary">
                                Tuotteiden tiedot
                            </Typography>
                            <TextField
                                className={classes.TextField}
                                variant="standard" 
                                label="Tuotteen nimi"
                                type="text"
                                fullWidth
                                value={productName.value}
                                onChange={productName.onChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard" 
                                label="Kappalemäärä"
                                type="text"
                                fullWidth
                                value={productAmount.value}
                                onChange={productAmount.onChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard" 
                                label="Hinta, € (veroton)"
                                type="text"
                                fullWidth
                                value={productPrice.value}
                                onChange={productPrice.onChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard"
                                select 
                                label="ALV-kanta"
                                type="text"
                                fullWidth
                                value={alvKanta.value}
                                onChange={alvKanta.onChange}
                            >
                                {alvKannat.map(kanta => (
                                    <MenuItem key={kanta.value} value={kanta.value}>
                                        {kanta.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </CardContent>
                    </Card>
                </div>
                <Button type="button" variant="contained" color="primary" className={classes.createProductButton} onClick={handleAddingProduct}>
                    Lisää tuote
                </Button>
                <div className={classes.createButtonDiv}>
                    <Button type="submit" variant="contained" color="primary" className={classes.createInvoiceButton}>
                        Luo
                    </Button>
                </div>
            </form>
            
            <Typography variant="h3" color="primary" className={classes.previewHeader}>
                    Tuotteet laskulla
            </Typography>
            <div className={classes.productsCard}>
                {products.array.length === 0 ? 
                    <Typography variant="h6" color="secondary">
                    Ei vielä lisättyjä tuotteita
                    </Typography>
                : 
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Tuotteen nimi</TableCell>
                                <TableCell>Kappalemäärä</TableCell>
                                <TableCell>Veroton hinta, €</TableCell>
                                <TableCell>ALV-kanta, %</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products.array.map(product => (
                                <TableRow key={product.name}>
                                    <TableCell component="th" scope="row">{product.name}</TableCell>
                                    <TableCell>{product.amount}</TableCell>
                                    <TableCell>{product.price}</TableCell>
                                    <TableCell>{product.alvKanta}</TableCell>
                                    <TableCell align="right"><Button type="button" variant="contained" color="primary" 
                                        onClick={() => openDialog(product.name)}>Päivitä</Button></TableCell>
                                    <TableCell><Button type="button" variant="contained" color="secondary" onClick={() => handleDeletingProduct(product.name)}>Poista</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>}
                <div>
                    <Dialog open={dialogOpen} onClose={closeDialog} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Tuotteen päivitys</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                            Päivittääksesi tuotteen, syötä tuotteet kaikki tiedot uudelleen ja paina päivitä. Paina peruuta peruuttaaksesi.
                            </DialogContentText>
                            <TextField
                                className={classes.TextField}
                                variant="standard" 
                                label="Tuotteen uusi nimi"
                                type="text"
                                fullWidth
                                value={productName.value}
                                onChange={productName.onChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard" 
                                label="Uusi kappalemäärä"
                                type="text"
                                fullWidth
                                value={productAmount.value}
                                onChange={productAmount.onChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard" 
                                label="Uusi hinta, € (veroton)"
                                type="text"
                                fullWidth
                                value={productPrice.value}
                                onChange={productPrice.onChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard"
                                select 
                                label="Uusi ALV-kanta"
                                type="text"
                                fullWidth
                                value={alvKanta.value}
                                onChange={alvKanta.onChange}
                            >
                                {alvKannat.map(kanta => (
                                    <MenuItem key={kanta.value} value={kanta.value}>
                                        {kanta.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={closeDialog} variant="contained" color="secondary">
                            Peruuta
                            </Button>
                            <Button onClick={() => { handleUpdatingProduct(tempProduct); closeDialog() }} variant="contained" color="primary">
                            Päivitä
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
                {products.array.length === 0 ?
                    ''
                : 
                <div className={classes.total}>
                    <Typography variant="h3" color="primary">
                        Yhteensä
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Veroton, €</TableCell>
                                    <TableCell>Vero, €</TableCell>
                                    <TableCell>Verollinen, €</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>{productPriceNet.price}</TableCell>
                                    <TableCell>{productPriceTax.price}</TableCell>
                                    <TableCell>{productPriceGross.price}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>}
            </div>
        </div>
    )
}

export default UusiLaskuContent