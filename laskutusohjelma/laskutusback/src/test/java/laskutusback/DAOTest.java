package laskutusback;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;

import model.DAObject;
import model.Yritys;

public class DAOTest extends Ui {
	
static DAObject yritysDAO = new DAObject();
	
	static Yritys[] yritykset = null;
	static Yritys yri = new Yritys("testi", "123", "321", "213", "231", "123");
	static String yritysnimi;
	static int yritysnumero;
	static int tilinumero;
	
	@AfterEach
	public void tyhjennä() {
		yritysDAO.deleteAll();
	}
	/*
	@Test
    public void testLisääJaListaa() {
        assertEquals(0, yritysDAO.readYritykset().length, "Yrityslistaus väärin");
        System.out.println(yritysDAO.readYritykset().length);
        yritysDAO.createYritys(yri);
        assertEquals(1, yritysDAO.readYritykset().length, "Yrityslistaus väärin");
        System.out.println(yritysDAO.readYritykset().length);
    }
	
	@Test
	public void testPäivitä() {
		yritysDAO.createYritys(yri);
		System.out.println(yritysDAO.readYritys("testi").getYtunnus());
		Yritys yri2 = new Yritys("testi", "222", "322", "2233", "254331", "123");
		yritysDAO.updateYritys(yri2);
		System.out.println(yritysDAO.readYritys("testi").getYtunnus());
		assertEquals("222", yritysDAO.readYritys("testi").getYtunnus(), "yrityksen päivitys ei onnistu");
	}
*/
}
