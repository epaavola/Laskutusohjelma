package fi.metropolia.LaskutusApplication.dto;

import org.junit.jupiter.api.BeforeEach;

class CompanyDTOTest {

    private CompanyDTO companyDTOUnderTest;

    @BeforeEach
    void setUp() {
        companyDTOUnderTest = new CompanyDTO("company", "vatID", "name", "address", "city", "email");
    }
}
