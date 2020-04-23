package fi.metropolia.LaskutusApplication.model;

import org.junit.jupiter.api.BeforeEach;

class DAOInvoiceTest {

    private DAOInvoice daoInvoiceUnderTest;

    @BeforeEach
    void setUp() {
        daoInvoiceUnderTest = new DAOInvoice("invoiceNumber", 0.0, 0.0, 0.0);
    }
}
