package laskutusback;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;

import model.DAObject;
import model.Yritys;

public class DAOTest extends Ulkoasu {
	
static DAObject yritysDAO = new DAObject();
	
	static Yritys[] yritykset = null;
	static Yritys yri = new Yritys("testi", 123, 321);
	static String yritysnimi;
	static int yritysnumero;
	static int tilinumero;
	
	@AfterEach
	public void tyhjennä() {
		yritysDAO.deleteAll();
	}
	
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
		System.out.println(yritysDAO.readYritys("testi").getTilinumero());
		Yritys yri2 = new Yritys("testi", 999, 000);
		yritysDAO.updateYritys(yri2);
		System.out.println(yritysDAO.readYritys("testi").getTilinumero());
		assertEquals(000, yritysDAO.readYritys("testi").getTilinumero(), "yrityksen päivitys ei onnistu");
	}

}
