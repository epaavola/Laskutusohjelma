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
        width: '25%',
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
        border: '1px solid black'
      }, 
      th: {
        margin: theme.spacing(5),
        border: '1px solid black'
      }, 
      td: {
        margin: theme.spacing(5),
        border: '1px solid black'
      },
    total: {
        marginTop: theme.spacing(5)
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
    const [invoiceMessage, setInvoiceMessage] = useState('')

    const [billerBusinessId, setBillerBusinessId] = useState('')
    const [billerName, setBillerName] = useState('')
    const [billerPostAddress, setBillerPostAddress] = useState('')
    const [billerPostalCode, setBillerPostalCode] = useState('')

    const [products, setProducts] = useState([])
    const [productName, setProductName] = useState('')
    const [productAmount, setProductAmount] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productPriceNet, setProductPriceNet] = useState(0)

    const [alvKanta, setAlvKanta] = useState('')

    const [asiakas, setAsiakas] = useState('')
    

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
        setInvoiceMessage('')
        setBillerBusinessId('')
        setBillerName('')
        setBillerPostAddress('')
        setBillerPostalCode('')
        setProducts([])
        setProductName('')
        setProductPrice('')
        setProductAmount('')
        setAlvKanta('')
        setProductPriceNet('')
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
    const handleInvoiceMessageChange = (event) => {
        setInvoiceMessage(event.target.value)
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
        setProductPriceNet(productPriceNet + productObject.price * productObject.amount)
        console.log('productPriceNet', productPriceNet)
        setProductName('')
        setProductPrice('')
        setProductAmount('')
        setAlvKanta('')
    }

    const handleAlvKantaChange = (event) => {
        setAlvKanta(event.target.value)
    }

    const handleDropdownChange = event => {
        setAsiakas(event.target.value);
      };

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
                <Button variant="contained" color="secondary" className={classes.emptyButton} onClick={emptyTextFields}>
                    Tyhjennä
                </Button>
            </div>
            <form className={classes.form} onSubmit={handleAddingProduct}>
                <div className={classes.invoiceInfoCards}>
                <Card className={classes.card}>
                        <CardContent>
                            <Typography variant="h6" color="secondary">
                                Omat tiedot
                            </Typography>
                            <TextField
                                className={classes.TextField}
                                variant="outlined" 
                                label="Yrityksen nimi"
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
                                label="Postinumero ja -toimipaikka"
                                type="text"
                                fullWidth
                                value={billerPostalCode}
                                onChange={handleBillerPostalCodeChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="outlined" 
                                label="Y-tunnus"    
                                type="text"
                                fullWidth
                                value={billerBusinessId}
                                onChange={handleBillerBusinessIdChange}
                            />
                        </CardContent>
                    </Card>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant="h6" color="secondary">
                                Laskunsaajan tiedot
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel id="asiakasDropdown">
                                    Valitse Asiakas
                                </InputLabel>
                                <Select
                                    labelId="asiakasDropdownLabel"
                                    id="asiakasDropdown"
                                    value={asiakas}
                                    onChange={handleDropdownChange}
                                    labelWidth={'1em'}
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
                                variant="outlined" 
                                label="Nimi / yrityksen nimi"
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
                                label="Postinumero ja -toimipaikka"
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
                                variant="outlined" 
                                label="Tuotteen nimi"
                                type="text"
                                fullWidth
                                value={productName}
                                onChange={handleProductNameChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="outlined" 
                                label="Kappalemäärä"
                                type="text"
                                fullWidth
                                value={productAmount}
                                onChange={handleProductAmountChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="outlined" 
                                label="Hinta, € (verollinen)"
                                type="text"
                                fullWidth
                                value={productPrice}
                                onChange={handleProductPriceChange}
                            />
                            <TextField
                                className={classes.TextField}
                                variant="outlined"
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
                <Button variant="contained" color="primary" className={classes.createProductButton} onClick={handleAddingProduct}>
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
                <table className={classes.table}>
                    <tr>
                        <th className={classes.th}>Tuotteen nimi</th>
                        <th className={classes.th}>Kappalemäärä</th>
                        <th className={classes.th}>Hinta, €</th>
                        <th className={classes.th}>ALV-kanta, %</th>
                    </tr>
                    {products.map(product => 
                        <tr key={product.name}>
                            <td className={classes.td}>{product.name}</td>
                            <td className={classes.td}>{product.amount}</td>
                            <td className={classes.td}>{product.price}</td>
                            <td className={classes.td}>{product.alvKanta}</td>
                        </tr>)
                    }
                </table>}
                {productPriceNet === 0 ?
                    ''
                : 
                <div className={classes.total}>
                    <Typography variant="h3" color="primary">
                        Yhteensä
                    </Typography>
                    <table className={classes.table}>
                    <tr>
                        <th className={classes.th}>Netto, €</th>
                        <th className={classes.th}>Brutto, €</th>
                        <th className={classes.th}>Vero, €</th>
                        <th className={classes.th}>Yhteensä, €</th>
                    </tr>
                    <tr>
                        <td className={classes.td}>{productPriceNet}</td>
                    </tr>
                    </table>
                </div>}
            </div>
        </div>
    )
}

export default UusiLaskuContent