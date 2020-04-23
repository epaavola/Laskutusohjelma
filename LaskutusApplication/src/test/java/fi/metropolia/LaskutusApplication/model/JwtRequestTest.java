package fi.metropolia.LaskutusApplication.model;

import org.junit.jupiter.api.BeforeEach;

class JwtRequestTest {

    private JwtRequest jwtRequestUnderTest;

    @BeforeEach
    void setUp() {
        jwtRequestUnderTest = new JwtRequest("username", "password");
    }
}
