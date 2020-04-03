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
import { Page, Text, View, Document, StyleSheet, PDFViewer, } from '@react-pdf/renderer'

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

//PDF-styles
const pdfStyles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
})

const PdfInvoice = () => {
    return (
        <Document>
            <Page size="A4" style={pdfStyles.page}>
                <View styles={pdfStyles.section}>
                    <Text>Testipaskaa 1</Text>
                </View>
                <View styles={pdfStyles.section}>
                    <Text>Testipaskaa 2</Text>
                </View>
            </Page>
        </Document>
    )
}

const UusiLaskuContent = (props) => {
    //Style
    const classes = useStyles()

    //Variables
    const minDate = new Date()
    const alvKannat = [
        {
            value: '0',
            label: '0 %'
        },
        {
            value: '10',
            label: '10 %'
        },
        {
            value: '14',
            label: '14 %'
        },
        {
            value: '24',
            label: '24 %'
        }
    ]

    const pankit = [
        {
            value: 'Aktia',
            label: 'Aktia Pankki'
        },
        {
            value: 'Danske',
            label: 'Danske Bank'
        },
        {
            value: 'Handelsbanken',
            label: 'Handelsbanken'
        },
        {
            value: 'Nordea',
            label: 'Nordea'
        },
        {
            value: 'OP',
            label: 'Osuuspankki'
        },
        {
            value: 'S-Pankki',
            label: 'S-Pankki'
        },
        {
            value: 'Säästöpankki',
            label: 'Säästöpankki'
        }
    ]

    //States
    const [user, setUser] = useState([])
    const [invoiceReceiverName, setInvoiceReceiverName] = useState('')
    const [invoiceReceiverContactPerson, setInvoiceReceiverContactPerson] = useState('')
    const [invoiceReceiverPostAddress, setInvoiceReceiverPostAddress] = useState('')
    const [invoiceReceiverPostalCode, setInvoiceReceiverPostalCode] = useState('')
    const [invoiceReceiverPostOffice, setInvoiceReceiverPostOffice] = useState('')

    const [invoiceNumber, setInvoiceNumber] = useState('')
    const [invoiceDate, setInvoiceDate] = React.useState(new Date())
    const [invoiceExpirationDate, setInvoiceExpirationDate] = React.useState(new Date())
    const [invoicePenaltyInterest, setInvoicePenaltyInterest] = useState('')
    const [invoiceMessage, setInvoiceMessage] = useState('')
    const [invoiceRefNumber, setInvoiceRefNumber] = useState('')
    const [invoiceNotificationTime, setInvoiceNotificationTime] = useState('')

    const [billerBusinessId, setBillerBusinessId] = useState('')
    const [billerName, setBillerName] = useState('')
    const [billerPostAddress, setBillerPostAddress] = useState('')
    const [billerPostalCode, setBillerPostalCode] = useState('')
    const [billerAccountNumber, setBillerAccountNumber] = useState('')

    const [products, setProducts] = useState([])
    const [productName, setProductName] = useState('')
    const [productAmount, setProductAmount] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productPriceNet, setProductPriceNet] = useState(0)
    const [productPriceGross, setProductPriceGross] = useState(0)
    const [productPriceTax, setProductPriceTax] = useState(0)

    const [alvKanta, setAlvKanta] = useState('')
    const [pankki, setPankki] = useState('')

    const [asiakas, setAsiakas] = useState('')
    const [clients, setClients] = useState([])
    
    //Get customers data from database through API
    useEffect(() => {
        (async function fetchData() {
            await getClients().then(response => setClients(response.data))      
        })();
      });

    //Button to clear states
    const emptyTextFields = (event) => {
        setInvoiceReceiverName('')
        setInvoiceReceiverContactPerson('')
        setInvoiceReceiverPostAddress('')
        setInvoiceReceiverPostalCode('')
        setInvoiceReceiverPostOffice('')
        setInvoiceNumber('')
        setInvoiceDate(new Date())
        setInvoiceExpirationDate(new Date())
        setInvoicePenaltyInterest('')
        setInvoiceMessage('')
        setInvoiceRefNumber('')
        setInvoiceNotificationTime('')
        setBillerBusinessId('')
        setBillerName('')
        setBillerPostAddress('')
        setBillerPostalCode('')
        setBillerAccountNumber('')
        setProducts([])
        setProductName('')
        setProductPrice('')
        setProductAmount('')
        setAlvKanta('')
        setPankki('')
        setProductPriceNet(0)
        setProductPriceGross(0)
        setProductPriceTax(0)
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
    const handleInvoiceReceiverPostOfficeChange = (event) => {
        setInvoiceReceiverPostOffice(event.target.value)
    }
    const handleInvoiceNumberChange = (event) => {
        setInvoiceNumber(event.target.value)
    }
    const handleInvoiceDateChange = date => {
        setInvoiceDate(date)
    }
    const handleInvoiceExpirationDateChange = date => {
        setInvoiceExpirationDate(date)
    }
    const handleInvoicePenaltyInterestChange = (event) => {
        setInvoicePenaltyInterest(event.target.value)
    }
    const handleInvoiceMessageChange = (event) => {
        setInvoiceMessage(event.target.value)
    }
    const handleInvoiceRefNumberChange = (event) => {
        setInvoiceRefNumber(event.target.value)
    }
    const handleInvoiceNotificationTimeChange = (event) => {
        setInvoiceNotificationTime(event.target.value + ' vrk')
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

    const handleBillerAccountNumberChange = (event) => {
        setBillerAccountNumber(event.target.value)
    }

    const handleProductNameChange = (event) => {
        setProductName(event.target.value)
    }

    const handleProductAmountChange = (event) => {
        setProductAmount(event.target.value)
    }

    const handleProductPriceChange = (event) => {
        setProductPrice(event.target.value)
    }

    const handleAddingProduct = (event) => {
        event.preventDefault()
        const productObject = {
            name: productName,
            amount: productAmount,
            price: productPrice,
            alvKanta: alvKanta
        }
        setProducts(products.concat(productObject))
        setProductPriceNet(Math.round((productPriceNet + productObject.price * productObject.amount) * 100) / 100)
        setProductPriceGross(Math.round((productPriceGross + productObject.price * productObject.amount) + (productObject.price * (productObject.alvKanta / 100)) * 100) / 100)
        setProductPriceTax(Math.round((productPriceTax + productObject.price * (productObject.alvKanta / 100)) * 100 ) / 100)
        setProductName('')
        setProductPrice('')
        setProductAmount('')
        setAlvKanta('')
    }

    const handleUpdatingProduct = (event) => {
        event.preventDefault()
    }

    const handleDeletingProduct = (event) => {
        event.preventDefault()
        /*const foundProduct = products.find(product => product.name === name)
        setProducts(products.map(product =>
            product.name === foundProduct.name ? '' : product))*/
    }

    const handleAlvKantaChange = (event) => {
        setAlvKanta(event.target.value)
    }

    const handlePankkiChange = (event) => {
        setPankki(event.target.value)
    }

    const handleDropdownChange = event => {
        setAsiakas(event.target.value)
    }
    
    const createPdfInvoice = () => {
        return (
            <PDFViewer>
                <PdfInvoice />
            </PDFViewer>
        )
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
            <form className={classes.form} onSubmit={createPdfInvoice}>
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
                                value={billerName}
                                onChange={handleBillerNameChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard" 
                                label="Postiosoite"
                                type="text"
                                fullWidth
                                value={billerPostAddress}
                                onChange={handleBillerPostAddressChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard" 
                                label="Postinumero ja -toimipaikka"
                                type="text"
                                fullWidth
                                value={billerPostalCode}
                                onChange={handleBillerPostalCodeChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard" 
                                label="Y-tunnus"    
                                type="text"
                                fullWidth
                                value={billerBusinessId}
                                onChange={handleBillerBusinessIdChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard" 
                                select 
                                label="Pankki"
                                type="text"
                                fullWidth
                                value={pankki}
                                onChange={handlePankkiChange}
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
                                value={billerAccountNumber}
                                onChange={handleBillerAccountNumberChange}
                            />
                        </CardContent>
                    </Card>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant="h6" color="secondary">
                                Laskunsaajan tiedot
                            <FormControl variant="standard" className={classes.formControl}>
                                <InputLabel id="asiakasDropdown">
                                    Valitse asiakas
                                </InputLabel>
                                <Select
                                    labelId="asiakasDropdownLabel"
                                    id="asiakasDropdown"
                                    value={asiakas}
                                    onChange={handleDropdownChange}   
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
                                value={invoiceReceiverName}
                                onChange={handleInvoiceReceiverNameChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard" 
                                label="Yhteyshenkilö"
                                type="text"
                                fullWidth
                                value={invoiceReceiverContactPerson}
                                onChange={handleInvoiceReceiverContactPersonChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard" 
                                label="Postiosoite"
                                type="text"
                                fullWidth
                                value={invoiceReceiverPostAddress}
                                onChange={handleInvoiceReceiverPostAddressChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard" 
                                label="Postinumero"
                                type="text"
                                fullWidth
                                value={invoiceReceiverPostalCode}
                                onChange={handleInvoiceReceiverPostalCodeChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard" 
                                label="Postitoimipaikka"
                                type="text"
                                fullWidth
                                value={invoiceReceiverPostOffice}
                                onChange={handleInvoiceReceiverPostOfficeChange}
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
                                value={invoiceNumber}
                                onChange={handleInvoiceNumberChange}
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
                                    value={invoiceDate}
                                    onChange={handleInvoiceDateChange}
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
                                    value={invoiceExpirationDate}
                                    onChange={handleInvoiceExpirationDateChange}
                                    KeyboardButtonProps={{ 'aria-label': 'change-date' }}
                                />
                            </MuiPickersUtilsProvider>
                            <TextField
                                className={classes.TextField}
                                variant="standard" 
                                label="Myöhästymiskorko, %"
                                type="text"
                                fullWidth
                                value={invoicePenaltyInterest}
                                onChange={handleInvoicePenaltyInterestChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard" 
                                label="Viitenumero"
                                type="text"
                                fullWidth
                                value={invoiceRefNumber}
                                onChange={handleInvoiceRefNumberChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard" 
                                label="Huomautusaika (vrk)"
                                type="text"
                                fullWidth
                                value={invoiceNotificationTime}
                                onChange={handleInvoiceNotificationTimeChange}
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
                        value={invoiceMessage}
                        onChange={handleInvoiceMessageChange}
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
                                value={productName}
                                onChange={handleProductNameChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard" 
                                label="Kappalemäärä"
                                type="text"
                                fullWidth
                                value={productAmount}
                                onChange={handleProductAmountChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard" 
                                label="Hinta, € (veroton)"
                                type="text"
                                fullWidth
                                value={productPrice}
                                onChange={handleProductPriceChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="standard"
                                select 
                                label="ALV-kanta"
                                type="text"
                                fullWidth
                                value={alvKanta}
                                onChange={handleAlvKantaChange}
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
                {products.length === 0 ? 
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
                            {products.map(product => (
                                <TableRow key={product.name}>
                                    <TableCell component="th" scope="row">{product.name}</TableCell>
                                    <TableCell>{product.amount}</TableCell>
                                    <TableCell>{product.price}</TableCell>
                                    <TableCell>{product.alvKanta}</TableCell>
                                    <TableCell align="right"><Button type="button" variant="contained" color="Primary" onClick={handleUpdatingProduct}>Päivitä</Button></TableCell>
                                    <TableCell><Button type="button" variant="contained" color="secondary" onClick={handleDeletingProduct(product.name)}>Poista</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>}
                {productPriceNet === 0 ?
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
                                    <TableCell>{productPriceNet}</TableCell>
                                    <TableCell>{productPriceTax}</TableCell>
                                    <TableCell>{productPriceGross}</TableCell>
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