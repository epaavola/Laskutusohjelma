package fi.metropolia.LaskutusApplication.model;

import org.junit.jupiter.api.BeforeEach;

class DAOUserTest {

    private DAOUser daoUserUnderTest;

    @BeforeEach
    void setUp() {
        daoUserUnderTest = new DAOUser("username", "name", "email", "vatID", "address", "city", "bankAccount");
    }
}
