package fi.metropolia.LaskutusApplication.controller;

import fi.metropolia.LaskutusApplication.dao.InvoiceDao;
import fi.metropolia.LaskutusApplication.dao.UserDao;
import fi.metropolia.LaskutusApplication.model.DAOInvoice;
import fi.metropolia.LaskutusApplication.model.DAOUser;
import org.junit.Ignore;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.security.core.Authentication;

import java.util.Arrays;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class InvoiceControllerTest {

    private InvoiceController invoiceControllerUnderTest;

    @BeforeEach
    void setUp() {
        invoiceControllerUnderTest = new InvoiceController();
        invoiceControllerUnderTest.invoiceRepo = mock(InvoiceDao.class);
        invoiceControllerUnderTest.userListRepo = mock(UserDao.class);
    }


    @Test
    void testDeleteInvoice() {
        // Setup

        // Configure InvoiceDao.findByInvoiceNumber(...).
        final DAOInvoice daoInvoice = new DAOInvoice("invoiceNumber", 0.0, 0.0, 0.0);
        when(invoiceControllerUnderTest.invoiceRepo.findByInvoiceNumber("invoiceNumber")).thenReturn(daoInvoice);

        // Run the test
        invoiceControllerUnderTest.deleteInvoice("invoiceNumber");

        // Verify the results
        verify(invoiceControllerUnderTest.invoiceRepo).deleteById(0L);
    }


}
