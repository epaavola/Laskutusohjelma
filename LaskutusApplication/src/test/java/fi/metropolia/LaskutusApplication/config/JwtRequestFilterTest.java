package fi.metropolia.LaskutusApplication.config;

import fi.metropolia.LaskutusApplication.service.JwtUserDetailsService;
import org.junit.jupiter.api.BeforeEach;
import org.mockito.InjectMocks;
import org.mockito.Mock;

import static org.mockito.MockitoAnnotations.initMocks;

class JwtRequestFilterTest {

    @Mock
    private JwtUserDetailsService mockJwtUserDetailsService;
    @Mock
    private JwtTokenUtil mockJwtTokenUtil;

    @InjectMocks
    private JwtRequestFilter jwtRequestFilterUnderTest;

    @BeforeEach
    void setUp() {
        initMocks(this);
    }
}
