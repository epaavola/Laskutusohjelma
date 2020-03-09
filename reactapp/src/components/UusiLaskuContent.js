import React, { useState } from 'react'
import 'typeface-roboto'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import PreviewIcon from '../images/Laskupohja.png'

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
    preview: {
        marginLeft: '15%',
        marginRight: '15%',
        marginTop: '5%',
        backgroundImage: `url(${PreviewIcon})`,
        height: '1732px',
        width: '1310px'
    },
    previewImage: {
        width: '100%',
        height: 'auto'
    },
    previewField: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
            border: '0px'
            },
            '&:hover fieldset' : {
                border: '0px'
            }
        }
    },
    preview_billerInfoHeader: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '100px',
    },
    preview_billerInfoHeader_name: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
            border: '0px'
            },
            '&:hover fieldset' : {
                border: '0px'
            }
        },
        marginTop: '90px'
    },
    preview_billerInfoHeader_postaddress: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
            border: '0px'
            },
            '&:hover fieldset' : {
                border: '0px'
            }
        },
    },
    preview_invoiceInfo: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '100px',
    },
    preview_invoiceReceiverInfo: {
        display: 'flex',
        flexDirection: 'column',
    },
    preview_invoiceDetails: {
        display: 'flex',
        flexDirection: 'column',
    },
    preview_invoiceInfo_receiverName: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
            border: '0px'
            },
            '&:hover fieldset' : {
                border: '0px'
            }
        },
        marginTop: '20px'
    },
    preview_invoiceInfo_receiverContactPerson: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
            border: '0px'
            },
            '&:hover fieldset' : {
                border: '0px'
            }
        },
    },
    preview_invoiceInfo_receiverPostAddress: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
            border: '0px'
            },
            '&:hover fieldset' : {
                border: '0px'
            }
        },
    },
    preview_invoiceInfo_receiverPostalCode: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
            border: '0px'
            },
            '&:hover fieldset' : {
                border: '0px'
            }
        },
    },
    preview_invoiceInfo_invoiceNumber: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
            border: '0px'
            },
            '&:hover fieldset' : {
                border: '0px'
            }
        },
        marginLeft: '295px',
        marginTop: '5px'
    },
    preview_invoiceInfo_invoiceDate: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
            border: '0px'
            },
            '&:hover fieldset' : {
                border: '0px'
            }
        },
        marginLeft: '295px',
        marginTop: '3px'
    },
    preview_invoiceInfo_invoiceExpirationDate: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
            border: '0px'
            },
            '&:hover fieldset' : {
                border: '0px'
            }
        },
        marginLeft: '295px',
        marginTop: '2px'
    },
    preview_invoiceInfo_invoicePenaltyInterest: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
            border: '0px'
            },
            '&:hover fieldset' : {
                border: '0px'
            }
        },
        marginLeft: '295px',
        marginTop: '2px'
    },
    preview_invoiceMessage: {
        display: 'flex',
        flexDirection: 'column',
    },
    preview_invoiceMessageDetails: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
            border: '0px'
            },
            '&:hover fieldset' : {
                border: '0px'
            }
        },
        marginLeft: '110px',
        marginTop: '25px'
    },
    preview_products: {
        display: 'flex',
        flexDirection: 'row'
    },
    preview_productName: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
            border: '0px'
            },
            '&:hover fieldset' : {
                border: '0px'
            }
        },
        marginLeft: '110px',
        marginTop: '150px'
    },
    preview_productAmount: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
            border: '0px'
            },
            '&:hover fieldset' : {
                border: '0px'
            }
        },
        marginLeft: '125px',
        marginTop: '150px',
        width: '100px'
    },
    preview_productPrice: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
            border: '0px'
            },
            '&:hover fieldset' : {
                border: '0px'
            }
        },
        marginLeft: '40px',
        marginTop: '150px',
        width: '75px'
    },
    preview_productAlvKanta: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
            border: '0px'
            },
            '&:hover fieldset' : {
                border: '0px'
            }
        },
        marginLeft: '40px',
        marginTop: '150px'
    }
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

    const [alvKanta, setAlvKanta] = useState('')

    const [previewBillerName, setPreviewBillerName] = useState('')
    const [previewBillerPostAddress, setPreviewBillerPostAddress] = useState('')
    const [previewBillerPostalCode, setPreviewBillerPostalCode] = useState('')

    const [previewInvoiceReceiverName, setPreviewInvoiceReceiverName] = useState('')
    const [previewInvoiceReceiverContactPerson, setPreviewInvoiceReceiverContanctPerson] = useState('')
    const [previewInvoiceReceiverPostAddress, setPreviewInvoiceReceiverPostAddress] = useState('')
    const [previewInvoiceReceiverPostalCode, setPreviewInvoiceReceiverPostalCode] = useState('')

    const [previewInvoiceNumber, setPreviewInvoiceNumber] = useState('')
    const [previewInvoiceDate, setPreviewInvoiceDate] = useState('')
    const [previewInvoiceExpirationDate, setPreviewInvoiceExpirationDate] = useState('')
    const [previewInvoicePenaltyInterest, setPreviewInvoicePenaltyInterest] = useState('')
    const [previewInvoiceMessage, setPreviewInvoiceMessage] = useState('')
    

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
        setPreviewBillerName('')
        setPreviewBillerPostAddress('')
        setPreviewBillerPostalCode('')
        setPreviewInvoiceReceiverName('')
        setPreviewInvoiceReceiverContanctPerson('')
        setPreviewInvoiceReceiverPostAddress('')
        setPreviewInvoiceReceiverPostalCode('')
        setPreviewInvoiceNumber('')
        setPreviewInvoiceDate('')
        setPreviewInvoiceExpirationDate('')
        setPreviewInvoicePenaltyInterest('')
        setPreviewInvoiceMessage('')
        setProducts([])
        setProductName('')
        setProductPrice('')
        setProductAmount('')
        setAlvKanta('')
    }

    //Event listeners
    const handleInvoiceReceiverNameChange = (event) => {
        setInvoiceReceiverName(event.target.value)
        setPreviewInvoiceReceiverName(event.target.value)
    }
    const handleInvoiceReceiverContactPersonChange = (event) => {
        setInvoiceReceiverContactPerson(event.target.value)
        setPreviewInvoiceReceiverContanctPerson(event.target.value)
    }
    const handleInvoiceReceiverPostAddressChange = (event) => {
        setInvoiceReceiverPostAddress(event.target.value)
        setPreviewInvoiceReceiverPostAddress(event.target.value)
    }
    const handleInvoiceReceiverPostalCodeChange = (event) => {
        setInvoiceReceiverPostalCode(event.target.value)
        setPreviewInvoiceReceiverPostalCode(event.target.value)
    }
    const handleInvoiceNumberChange = (event) => {
        setInvoiceNumber(event.target.value)
        setPreviewInvoiceNumber(event.target.value)
    }
    const handleInvoiceDateChange = (event) => {
        setInvoiceDate(event.target.value)
        setPreviewInvoiceDate(event.target.value)
    }
    const handleInvoiceExpirationDateChange = (event) => {
        setInvoiceExpirationDate(event.target.value)
        setPreviewInvoiceExpirationDate(event.target.value)
    }
    const handleInvoicePenaltyInterestChange = (event) => {
        setInvoicePenaltyInterest(event.target.value)
        setPreviewInvoicePenaltyInterest(event.target.value + " %")
    }
    const handleInvoiceMessageChange = (event) => {
        setInvoiceMessage(event.target.value)
        if (event.target.value.length >= 118 || event.target.value.length <= 235) {
            setPreviewInvoiceMessage(event.target.value.substring(0, 118) 
            + "\n" + event.target.value.substring(118, 236)
            + "\n" + event.target.value.substring(236, 354)
            + "\n" + event.target.value.substring(354, 472)
            + "\n" + event.target.value.substring(472, 590)
            + "\n" + event.target.value.substring(590, 708)
            + "\n" + event.target.value.substring(708, 826))
        } else {
            setPreviewInvoiceMessage(event.target.value)
        }
    }
    const handleBillerBusinessIdChange = (event) => {
        setBillerBusinessId(event.target.value)
    }
    const handleBillerNameChange = (event) => {
        setBillerName(event.target.value)
        setPreviewBillerName(event.target.value)
    }
    const handleBillerPostAddressChange = (event) => {
        setBillerPostAddress(event.target.value)
        setPreviewBillerPostAddress(event.target.value + ", ")
    }
    const handleBillerPostalCodeChange = (event) => {
        setBillerPostalCode(event.target.value)
        setPreviewBillerPostalCode(event.target.value)
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
        setProductName('')
        setProductPrice('')
        setProductAmount('')
        setAlvKanta('')
    }

    const handleAlvKantaChange = (event) => {
        setAlvKanta(event.target.value)
    }

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
                    Esikatselu
                </Typography>
            <div className={classes.preview}>
                <div className={classes.preview_billerInfoHeader}>
                    <TextField
                        className={classes.preview_billerInfoHeader_name}
                        inputProps={{style: {
                            fontSize: 26,
                            fontWeight: 'bold'
                        }}}
                        variant="outlined"
                        type="text"
                        size="small"
                        value={previewBillerName}
                    />
                    <TextField
                        className={classes.preview_billerInfoHeader_postaddress}
                        inputProps={{style: {
                            fontSize: 16
                        }}}
                        variant="outlined"
                        type="text"
                        size="small"
                        value={previewBillerPostAddress + previewBillerPostalCode}
                    />
                </div>
                <div className={classes.preview_invoiceInfo}>
                    <div className={classes.preview_invoiceReceiverInfo}>
                        <TextField
                            className={classes.preview_invoiceInfo_receiverName}
                            inputProps={{style: {
                                fontSize: 24,
                                fontWeight: 'bold'
                            }}}
                            variant="outlined"
                            type="text"
                            size="small"
                            value={previewInvoiceReceiverName}
                        />
                        <TextField
                            className={classes.preview_invoiceInfo_receiverContactPerson}
                            inputProps={{style: {
                                fontSize: 24,
                                fontWeight: 'bold'
                            }}}
                            variant="outlined"
                            type="text"
                            size="small"
                            value={previewInvoiceReceiverContactPerson}
                        />
                        <TextField
                            className={classes.preview_invoiceInfo_receiverPostAddress}
                            inputProps={{style: {
                                fontSize: 24,
                                fontWeight: 'bold'
                            }}}
                            variant="outlined"
                            type="text"
                            size="small"
                            value={previewInvoiceReceiverPostAddress}
                        />
                        <TextField
                            className={classes.preview_invoiceInfo_receiverPostalCode}
                            inputProps={{style: {
                                fontSize: 24,
                                fontWeight: 'bold'
                            }}}
                            variant="outlined"
                            type="text"
                            size="small"
                            value={previewInvoiceReceiverPostalCode}
                        />
                    </div>
                    <div className={classes.preview_invoiceDetails}>
                        <TextField
                            className={classes.preview_invoiceInfo_invoiceNumber}
                            inputProps={{style: {
                                fontSize: 20,
                                fontWeight: 'bold'
                            }}}
                            variant="outlined"
                            type="text"
                            size="small"
                            value={previewInvoiceNumber}
                        />
                        <TextField
                            className={classes.preview_invoiceInfo_invoiceDate}
                            inputProps={{style: {
                                fontSize: 20,
                                fontWeight: 'bold'
                            }}}
                            variant="outlined"
                            type="text"
                            size="small"
                            value={previewInvoiceDate}
                        />
                        <TextField
                            className={classes.preview_invoiceInfo_invoiceExpirationDate}
                            inputProps={{style: {
                                fontSize: 20,
                                fontWeight: 'bold'
                            }}}
                            variant="outlined"
                            type="text"
                            size="small"
                            value={previewInvoiceExpirationDate}
                        />
                        <TextField
                            className={classes.preview_invoiceInfo_invoicePenaltyInterest}
                            inputProps={{style: {
                                fontSize: 20,
                                fontWeight: 'bold'
                            }}}
                            variant="outlined"
                            type="text"
                            size="small"
                            value={previewInvoicePenaltyInterest}
                        />
                    </div>
                </div>
                <div className={classes.preview_invoiceMessage}>
                    <TextField
                        className={classes.preview_invoiceMessageDetails}
                        inputProps={{style: {
                            fontSize: 16,
                        }}}
                        variant="outlined"
                        multiline
                        rowsMax="7"
                        type="text"
                        size="small"
                        value={previewInvoiceMessage}
                    />
                </div>
                <div className={classes.preview_products}>
                    <TextField
                        className={classes.preview_productName}
                        inputProps={{style: {
                            fontSize: 14,
                        }}}
                        variant="outlined"
                        multiline
                        rowsMax="20"
                        type="text" 
                        size="small"
                        value={products.map(product => product.name).join('\n\n')}
                    />
                    <TextField
                        className={classes.preview_productAmount}
                        inputProps={{style: {
                            fontSize: 14,
                        }}}
                        variant="outlined"
                        multiline
                        rowsMax="20"
                        type="text" 
                        size="small"
                        value={products.map(product => product.amount).join('\n\n')}
                    />
                    <TextField
                        className={classes.preview_productPrice}
                        inputProps={{style: {
                            fontSize: 14,
                        }}}
                        variant="outlined"
                        multiline
                        rowsMax="20"
                        type="text" 
                        size="small"
                        value={products.map(product => product.price + " €").join('\n\n')}
                    />
                    <TextField
                        className={classes.preview_productAlvKanta}
                        inputProps={{style: {
                            fontSize: 14,
                        }}}
                        variant="outlined"
                        multiline
                        rowsMax="20"
                        type="text" 
                        size="small"
                        value={products.map(product => product.alvKanta + " %").join('\n\n')}
                    />
                </div>
            </div>
        </div>
    )
}

export default UusiLaskuContent