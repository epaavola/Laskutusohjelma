package fi.metropolia.LaskutusApplication.model;

import org.junit.jupiter.api.BeforeEach;

class DAOCompanyTest {

    private DAOCompany daoCompanyUnderTest;

    @BeforeEach
    void setUp() {
        daoCompanyUnderTest = new DAOCompany("company", "vatID", "name", "address", "city", "email");
    }
}
