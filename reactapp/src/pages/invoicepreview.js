import React from 'react'
import "../styles/InvoiceStyle.css"
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Products = ({ products }) => {
    const productList = products.map((prod, index) =>
        <tr>
            <td className="no" >{index + 1}</td>
            <td className="text-left" >{prod.name}</td>
            <td className="unit" >{prod.price}</td>
            <td className="qty" >{prod.amount}</td>
            <td className="total">{prod.price * prod.amount}</td>
        </tr>
    )
    return (
        <tbody>
            {productList}
        </tbody>
    )
}


const Previev = (props) => {

    const content = props.history.location.state
    console.log(content)

    return (
        <div>
            <div className="toolbar hidden-print">
                <div className="text-right">
                    <button id="printInvoice" className="btn btn-info"><i className="fa fa-print"></i> Print</button>
                    <Pdf targetRef={ref} filename="Invoice.pdf">
                        {({ toPdf }) => <button  onClick={toPdf}className="btn btn-info"><i className="fa fa-file-pdf-o"></i>Generate Pdf</button>}
                    </Pdf>
                </div>
                <hr />
            </div>
            <div ref={ref} className="invoice overflow-auto">
                <div styles="min-width: 600px">
                    <header>
                        <div className="row">
                            <div className="col">
                                <img src="../images/Laskutuslogo.png" data-holder-rendered="true" alt="Laskutusohjelma logo" />
                            </div>
                            <div className="col company-details">
                                <h2 className="name">
                                    {content.billerName}
                                </h2>
                                <div>{content.billerAddress + ", " + content.billerPostalCode}</div>
                                <div>(123) 456-789</div>
                                <div>company@example.com</div>
                            </div>
                        </div>
                    </header>
                    <main>
                        <div className="row contacts">
                            <div className="col invoice-to">
                                <div className="text-gray-light">INVOICE TO:</div>
                                <h2 className="to">{content.invoiceReceiverName}</h2>
                                <div className="address">{content.invoiceReceiverPostAddress + ", " + content.invoiceReceiverPostalCode + ", " + content.invoiceReceiverPostOffice}</div>
                                <div className="email"><a href="mailto:example@example.com">example@example.com</a></div>
                            </div>
                            <div className="col invoice-details">
                                <h1 className="invoice-id">{"INVOICE " + content.invoiceNumber}</h1>
                                <div className="date">{"Date of Invoice: " + content.invoiceDate}</div>
                                <div className="date">{"Due Date: " + content.invoiceExpirationDate}</div>
                            </div>
                        </div>
                        <table border="0" cellSpacing="0" cellPadding="0">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th className="text-left">NAME</th>
                                    <th className="text-right">AMOUNT</th>
                                    <th className="text-right">PRICE</th>
                                    <th className="text-right">TOTAL</th>
                                </tr>
                            </thead>

                            <Products products={content.products} />

                            <tfoot>
                                <tr>
                                    <td colSpan="2"></td>
                                    <td colSpan="2">SUBTOTAL</td>
                                    <td>$5,200.00</td>
                                </tr>
                                <tr>
                                    <td colSpan="2"></td>
                                    <td colSpan="2">TAX 25%</td>
                                    <td>$1,300.00</td>
                                </tr>
                                <tr>
                                    <td colSpan="2"></td>
                                    <td colSpan="2">GRAND TOTAL</td>
                                    <td>$6,500.00</td>
                                </tr>
                            </tfoot>
                        </table>
                        <div className="thanks">Thank you!</div>
                        <div className="notices">
                            <div>NOTICE:</div>
                            <div className="notice">A finance charge of 1.5% will be made on unpaid balances after 30 days.</div>
                        </div>
                    </main>
                    <footer>
                        Invoice was created on a computer and is valid without the signature and seal.
            </footer>
                </div>
                <div></div>
            </div>
        </div>

    )
}

export default Previev