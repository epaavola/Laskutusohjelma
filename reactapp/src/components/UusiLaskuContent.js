import React, { useState, useEffect } from 'react'
import 'typeface-roboto'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import { getUser } from '../service/UserDataService';
import { getCustomers } from '../service/ClientDataService'
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

const useStyles = makeStyles(theme => ({
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
        height: '50px',
        marginRight: '1%'
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
    let netPrice
    let tax
    let gross

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
        netPrice = Math.round((productPriceNet.price + productObject.price * productObject.amount) * 100) / 100
        tax = Math.round((productPriceTax.price + productObject.price * productObject.amount * (productObject.alvKanta / 100)) * 100) / 100
        gross = Math.round((netPrice + tax) * 100) / 100
        productPriceNet.setPrices(netPrice)
        productPriceTax.setPrices(tax)
        productPriceGross.setPrices(gross)
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
            - (productToUpdate.price * productToUpdate.amount * (productToUpdate.alvKanta / 100))) * 100) / 100
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
        netPrice = Math.round((productPriceNet.price - productToDelete.price * productToDelete.amount) * 100) / 100
        tax = Math.round((productPriceTax.price - productToDelete.price * productToDelete.amount * (productToDelete.alvKanta / 100)) * 100) / 100
        gross = Math.round((netPrice + tax) * 100) / 100
        console.log(netPrice)
        productPriceNet.setPrices(netPrice)
        productPriceTax.setPrices(tax)
        productPriceGross.setPrices(gross)
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
                                label={strings.companyName}
                                type="text"
                                fullWidth
                                value={billerName.value}
                                //value={biller.object.name.value}
                                onChange={billerName.onChange}
                            //onChange={biller.onObjectChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard"
                                label={strings.address}
                                type="text"
                                fullWidth
                                value={billerPostAddress.value}
                                onChange={billerPostAddress.onChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard"
                                label={strings.postal}
                                type="text"
                                fullWidth
                                value={billerPostalCode.value}
                                onChange={billerPostalCode.onChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard"
                                label={strings.businessid}
                                type="text"
                                fullWidth
                                value={billerBusinessId.value}
                                onChange={billerBusinessId.onChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard"
                                select
                                label={strings.bank}
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
                                label={strings.accnumber + " (IBAN)"}
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
                                {strings.invoiceRecipient}
                            </Typography>
                            <TextField
                                className={classes.TextField}
                                variant="standard"
                                select
                                label={strings.customer}
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
                                label={strings.name + " / " + strings.companyName}
                                type="text"
                                fullWidth
                                value={invoiceReceiverName.value}
                                onChange={invoiceReceiverName.onChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard"
                                label={strings.contactP}
                                type="text"
                                fullWidth
                                value={invoiceReceiverContactPerson.value}
                                onChange={invoiceReceiverContactPerson.onChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard"
                                label={strings.address}
                                type="text"
                                fullWidth
                                value={invoiceReceiverPostAddress.value}
                                onChange={invoiceReceiverPostAddress.onChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard"
                                label={strings.postalnmb}
                                type="text"
                                fullWidth
                                value={invoiceReceiverPostalCode.value}
                                onChange={invoiceReceiverPostalCode.onChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard"
                                label={strings.postaldist}
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
                                label={strings.invoiceNmb}
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
                                    label={strings.dateOfInvoice}
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
                                    label={strings.invoiceDue}
                                    minDate={minDate}
                                    value={invoiceExpirationDate.date}
                                    onChange={invoiceExpirationDate.onChangeDate}
                                    KeyboardButtonProps={{ 'aria-label': 'change-date' }}
                                />
                            </MuiPickersUtilsProvider>
                            <TextField
                                className={classes.TextField}
                                variant="standard"
                                label={strings.delayRate + ", %"}
                                type="text"
                                fullWidth
                                value={invoicePenaltyInterest.value}
                                onChange={invoicePenaltyInterest.onChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard"
                                label={strings.refnmb}
                                type="text"
                                fullWidth
                                value={invoiceRefNumber.value}
                                onChange={invoiceRefNumber.onChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard"
                                label={strings.remarkTime}
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
                        {strings.invoiceMsg}
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
                                {strings.productinfo}
                            </Typography>
                            <TextField
                                className={classes.TextField}
                                variant="standard"
                                label={strings.productName}
                                type="text"
                                fullWidth
                                value={productName.value}
                                onChange={productName.onChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard"
                                label={strings.productAmount}
                                type="text"
                                fullWidth
                                value={productAmount.value}
                                onChange={productAmount.onChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard"
                                label={strings.priceGross + ", €"}
                                type="text"
                                fullWidth
                                value={productPrice.value}
                                onChange={productPrice.onChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard"
                                select
                                label={strings.vat}
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
                    {strings.productadd}
                </Button>
                <div className={classes.createButtonDiv}>
                    

                    <Link to={{
                        pathname: "/invoicepreview",
                        state: {
                            billerName: billerName.value,
                            billerPostAddress: billerPostAddress.value,
                            billerPostalCode: billerPostalCode.value,
                            billerBusinessId: billerBusinessId.value,
                            billerAccountNumber: billerAccountNumber.value,
                            invoiceNumber: invoiceNumber.value,
                            invoiceDate: invoiceDate.date,
                            invoiceExpirationDate: invoiceExpirationDate.date,
                            invoicePenaltyInterest: invoicePenaltyInterest.value,
                            invoiceMessage: invoiceMessage.value,
                            invoiceRefNumber: invoiceRefNumber.value,
                            invoiceNotificationTime: invoiceNotificationTime.value,
                            invoiceReceiverContactPerson: invoiceReceiverContactPerson.value,
                            invoiceReceiverName: invoiceReceiverName.value,
                            invoiceReceiverPostAddress: invoiceReceiverPostAddress.value,
                            invoiceReceiverPostOffice: invoiceReceiverPostOffice.value,
                            invoiceReceiverPostalCode: invoiceReceiverPostalCode.value,
                            products: products.array,
                            productPriceNet: productPriceNet.price,
                            productPriceGross: productPriceGross.price,
                            productPriceTax: productPriceTax.price
                         
                        }
                    }} >
                        <Button variant="contained" color="primary" className={classes.createInvoiceButton}>{strings.preview}</Button>
                    </Link>

                    <Button type="submit" variant="contained" color="primary" className={classes.createInvoiceButton}>
                        {strings.create}
                    </Button>
                </div>
            </form>

            <Typography variant="h3" color="primary" className={classes.previewHeader}>
                {strings.invoiceProducts}
            </Typography>
            <div className={classes.productsCard}>
                {products.array.length === 0 ?
                    <Typography variant="h6" color="secondary">
                        {strings.emptyproductlist}
                    </Typography>
                    :
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>{strings.productName}</TableCell>
                                    <TableCell>{strings.productAmount}</TableCell>
                                    <TableCell>{strings.priceGross + ", €"}</TableCell>
                                    <TableCell>{strings.vat + ", %"}</TableCell>
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
                                            onClick={() => openDialog(product.name)}>{strings.update}</Button></TableCell>
                                        <TableCell><Button type="button" variant="contained" color="secondary" onClick={() => handleDeletingProduct(product.name)}>Poista</Button></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>}
                <div>
                    <Dialog open={dialogOpen} onClose={closeDialog} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">{strings.updateProduct}</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                {strings.updateProductExp}
                            </DialogContentText>
                            <TextField
                                className={classes.TextField}
                                variant="standard"
                                label={strings.productName}
                                type="text"
                                fullWidth
                                value={productName.value}
                                onChange={productName.onChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard"
                                label={strings.productAmount}
                                type="text"
                                fullWidth
                                value={productAmount.value}
                                onChange={productAmount.onChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard"
                                label={strings.priceGross + ", € (veroton)"}
                                type="text"
                                fullWidth
                                value={productPrice.value}
                                onChange={productPrice.onChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard"
                                select
                                label={strings.vat}
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
                            <Button onClick={closeDialog} color="secondary" variant="contained">
                                {strings.cancel}
                            </Button>
                            <Button onClick={() => { handleUpdatingProduct(tempProduct); closeDialog() }} color="primary" variant="contained">
                                {strings.update}
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
                {products.array.length === 0 ?
                    ''
                    :
                    <div className={classes.total}>
                        <Typography variant="h3" color="primary">
                            {strings.total}
                        </Typography>
                        <TableContainer component={Paper}>
                            <Table className={classes.table}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>{strings.priceGross + ", €"}</TableCell>
                                        <TableCell>{strings.tax + ", €"}</TableCell>
                                        <TableCell>{strings.priceNet + ", €"}</TableCell>
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