package fi.metropolia.LaskutusApplication.config;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.security.core.AuthenticationException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertThrows;

class JwtAuthenticationEntryPointTest {

    private JwtAuthenticationEntryPoint jwtAuthenticationEntryPointUnderTest;

    @BeforeEach
    void setUp() {
        jwtAuthenticationEntryPointUnderTest = new JwtAuthenticationEntryPoint();
    }

    @Test
    void testCommence() throws Exception {
        // Setup
        final HttpServletRequest request = null;
        final HttpServletResponse response = null;
        final AuthenticationException authException = null;

        // Run the test
        jwtAuthenticationEntryPointUnderTest.commence(request, response, authException);

        // Verify the results
    }

    @Test
    void testCommence_ThrowsIOException() {
        // Setup
        final HttpServletRequest request = null;
        final HttpServletResponse response = null;
        final AuthenticationException authException = null;

        // Run the test
        assertThrows(IOException.class, () -> {
            jwtAuthenticationEntryPointUnderTest.commence(request, response, authException);
        });
    }
}
