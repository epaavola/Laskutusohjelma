package fi.metropolia.LaskutusApplication.dto;

import org.junit.jupiter.api.BeforeEach;

class InvoiceDTOTest {

    private InvoiceDTO invoiceDTOUnderTest;

    @BeforeEach
    void setUp() {
        invoiceDTOUnderTest = new InvoiceDTO("invoiceNumber", 0.0, 0.0, 0.0);
    }
}
