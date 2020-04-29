package fi.metropolia.LaskutusApplication.dto;

import org.junit.jupiter.api.BeforeEach;

class UserDTOTest {

    private UserDTO userDTOUnderTest;

    @BeforeEach
    void setUp() {
        userDTOUnderTest = new UserDTO("username", "name", "email", "vatID", "address", "city", "bankAccount");
    }
}
