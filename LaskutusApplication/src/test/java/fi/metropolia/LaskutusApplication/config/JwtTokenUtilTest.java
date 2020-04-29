package fi.metropolia.LaskutusApplication.config;

import io.jsonwebtoken.Claims;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.function.Function;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

class JwtTokenUtilTest {

    private JwtTokenUtil jwtTokenUtilUnderTest;

    @BeforeEach
    void setUp() {
        jwtTokenUtilUnderTest = new JwtTokenUtil();
    }

    @Test
    void testGetUsernameFromToken() {
        // Setup

        // Run the test
        final String result = jwtTokenUtilUnderTest.getUsernameFromToken("token");

        // Verify the results
        assertEquals("result", result);
    }

    @Test
    void testGetExpirationDateFromToken() {
        // Setup

        // Run the test
        final Date result = jwtTokenUtilUnderTest.getExpirationDateFromToken("token");

        // Verify the results
        assertEquals(new GregorianCalendar(2019, Calendar.JANUARY, 1).getTime(), result);
    }

    @Test
    void testGetClaimFromToken() {
        // Setup
        final Function<Object, Object> claimsResolver = Function.identity();

        // Run the test
        //final T result = jwtTokenUtilUnderTest.getClaimFromToken("token", claimsResolver);

        // Verify the results
    }

    @Test
    void testGenerateToken() {
        // Setup
        final UserDetails userDetails = null;

        // Run the test
        final String result = jwtTokenUtilUnderTest.generateToken(userDetails);

        // Verify the results
        assertEquals("result", result);
    }

    @Test
    void testValidateToken() {
        // Setup
        final UserDetails userDetails = null;

        // Run the test
        final Boolean result = jwtTokenUtilUnderTest.validateToken("token", userDetails);

        // Verify the results
        assertTrue(result);
    }
}
