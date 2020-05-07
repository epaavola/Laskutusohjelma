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


}
