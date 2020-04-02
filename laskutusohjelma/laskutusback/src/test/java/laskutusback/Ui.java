package laskutusback;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;

public class Ui {
	
    @BeforeAll
    public static void startTestSystem() {
        System.out.println("@BeforeAll TESTAAMINEN ALKAA.");
    }

    @AfterAll
    public static void stopTestSystem() {
        System.out.println("@AfterAll TESTAAMINEN VALMIS.");
    }

    @BeforeEach
    public void initTestSystem() {
        System.out.println("  @BeforeEach Käynnistä uusi testimetodi.");
    }

    @AfterEach
    public void cleanTestSystem() {
        System.out.println("  @AfterEach Testimetodi suoritettu.");
    }
}
