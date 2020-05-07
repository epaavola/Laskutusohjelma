package fi.metropolia.LaskutusApplication.model;

import org.junit.Ignore;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class JwtResponseTest {

    private JwtResponse jwtResponseUnderTest;

    @BeforeEach
    void setUp() {
        jwtResponseUnderTest = new JwtResponse("jwttoken");
    }

    @Test
    @Ignore
    void testGetToken() {
        // Setup

        // Run the test
        final String result = jwtResponseUnderTest.getToken();

        // Verify the results
        assertEquals("result", result);
    }
}
