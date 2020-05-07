package fi.metropolia.LaskutusApplication.controller;

import fi.metropolia.LaskutusApplication.config.JwtTokenUtil;
import fi.metropolia.LaskutusApplication.dto.UserDTO;
import fi.metropolia.LaskutusApplication.model.DAOUser;
import fi.metropolia.LaskutusApplication.model.JwtRequest;
import fi.metropolia.LaskutusApplication.service.JwtUserDetailsService;
import org.junit.Ignore;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.mockito.MockitoAnnotations.initMocks;

class JwtAuthenticationControllerTest {

    @Mock
    private AuthenticationManager mockAuthenticationManager;
    @Mock
    private JwtTokenUtil mockJwtTokenUtil;
    @Mock
    private JwtUserDetailsService mockUserDetailsService;

    @InjectMocks
    private JwtAuthenticationController jwtAuthenticationControllerUnderTest;

    @BeforeEach
    void setUp() {
        initMocks(this);
    }




    @Test
    void testSaveUser() throws Exception {
        // Setup
        final UserDTO user = new UserDTO("username", "name", "email", "vatID", "address", "city", "bankAccount");

        // Configure JwtUserDetailsService.save(...).
        final DAOUser daoUser = new DAOUser("username", "name", "email", "vatID", "address", "city", "bankAccount");
        when(mockUserDetailsService.save(any(UserDTO.class))).thenReturn(daoUser);

        // Run the test
        final ResponseEntity<?> result = jwtAuthenticationControllerUnderTest.saveUser(user);

        // Verify the results
    }


}
