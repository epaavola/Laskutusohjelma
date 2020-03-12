package laskutusback;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import model.*;

public class CompanyDAOTest extends Ui {
	
static DAObject yritysDAO = new DAObject();
	
	static Yritys[] yritykset = null;
	static Yritys yri = new Yritys("testi", "123", "321", "213", "231", "123");
	static String yritysnimi;
	static int yritysnumero;
    static int tilinumero;
    User usr = new User("asd", "YXNkOllYTmtZWE5rWVE9PQ==");
	
	@AfterEach
	public void tyhjennä() {
		yritysDAO.deleteAll();
	}
	
	@Test
    public void testLisääJaListaa() {
        assertEquals(0, yritysDAO.readYritykset("asd").length, "Yrityslistaus väärin");
        System.out.println(yritysDAO.readYritykset("asd").length);
        yritysDAO.createYritys(yri);
        yri.setUser(usr);
        assertEquals(1, yritysDAO.readYritykset("asd").length, "Yrityslistaus väärin");
        System.out.println(yritysDAO.readYritykset("asd").length);
    }
	
	@Test
	public void testPäivitä() {
		yritysDAO.createYritys(yri);
		System.out.println(yritysDAO.readYritys("testi", "asd").getYtunnus());
        Yritys yri2 = new Yritys("testi", "222", "322", "2233", "254331", "123");
        yri2.setUser(usr);
		yritysDAO.updateYritys(yri2, "asd");
		System.out.println(yritysDAO.readYritys("testi", "asd").getYtunnus());
		assertEquals("222", yritysDAO.readYritys("testi", "asd").getYtunnus(), "yrityksen päivitys ei onnistu");
	}

}