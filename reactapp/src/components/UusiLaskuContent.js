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
import {getClients} from '../service/ClientDataService'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import { useField } from '../hooks/UseFields'
import { getALVdata, getBankData } from '../components/DataVariables'

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
    const client = useField('')

    //States
    const [user, setUser] = useState([])
    const [clients, setClients] = useState([])
    //Get customers data from database through API
    useEffect(() => {
        (async function fetchData() {
            await getClients().then(response => setClients(response.data))      
        })();
      });

    //Button to clear states  
    const emptyTextFields = (event) => {
        window.location.reload(false);
    }

    const handleAddingProduct = (event) => {
        event.preventDefault()
        const productObject = {
            name: productName.value,
            amount: productAmount.value,
            price: productPrice.value,
            alvKanta: alvKanta.value
        }
        products.setProduct(products.products.concat(productObject))
        let netPrice = Math.round((productPriceNet.price + productObject.price * productObject.amount) * 100) / 100
        let tax = Math.round((productPriceTax.price + productObject.price * productObject.amount * (productObject.alvKanta / 100)) * 100 ) / 100
        let gross = netPrice + tax
        productPriceNet.setPrices(netPrice)
        productPriceTax.setPrices(tax)
        productPriceGross.setPrices(gross)
        productName.reset()
        productPrice.reset()
        productAmount.reset()
        alvKanta.reset()
    }

    const handleUpdatingProduct = (event) => {
        event.preventDefault()
    }

    const handleDeletingProduct = (name) => {
       const productToDelete = products.products.find(product => product.name === name)
       products.setProduct(products.products.filter(product => product.name !== productToDelete.name))
       const indexToDelete = products.products.indexOf(productToDelete)
       products.products.splice(indexToDelete, 1)
    }

    //Get user data from database through API
    useEffect(() => {
        (async function fetchData() {
            await getUser().then(response => setUser(response.data))    
        })();  
      }, []);

    return (
        <div>
            <div className={classes.title}>
                <Typography variant="h2" color="primary" className={classes.header1}>
                    Luo uusi lasku
                </Typography>
                <Button variant="contained" color="secondary" className={classes.emptyButton} onClick={emptyTextFields}>
                    Tyhjennä
                </Button>
            </div>
            <form className={classes.form}>
                <div className={classes.invoiceInfoCards}>
                <Card className={classes.card}>
                        <CardContent>
                            <Typography variant="h6" color="secondary">
                                Omat tiedot
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
                            <FormControl variant="standard" className={classes.formControl}>
                                <InputLabel id="asiakasDropdown">
                                    Valitse Asiakas
                                </InputLabel>
                                <Select
                                    labelId="asiakasDropdownLabel"
                                    id="asiakasDropdown"
                                    value={client.value}
                                    onChange={client.onChange}   
                                >
                                <MenuItem value="">
                                    <em>Tyhjä</em>
                                </MenuItem>
                                <MenuItem value={'getValueFromAPI'}>Asiakas 1</MenuItem>
                                </Select>
                            </FormControl>
                            </Typography>
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
                                Laskun tiedot
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
                {products.products.length === 0 ? 
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
                            {products.products.map(product => (
                                <TableRow key={product.name}>
                                    <TableCell component="th" scope="row">{product.name}</TableCell>
                                    <TableCell>{product.amount}</TableCell>
                                    <TableCell>{product.price}</TableCell>
                                    <TableCell>{product.alvKanta}</TableCell>
                                    <TableCell align="right"><Button type="button" variant="contained" color="primary" onClick={handleUpdatingProduct}>Päivitä</Button></TableCell>
                                    <TableCell><Button type="button" variant="contained" color="secondary" onClick={() => handleDeletingProduct(product.name)}>Poista</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>}
                {productPriceNet.price === 0 ?
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