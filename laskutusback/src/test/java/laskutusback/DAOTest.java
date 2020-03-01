package laskutusback;


import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import model.DAObject;
import model.Yritys;

public class DAOTest extends Ulkoasu {

	
	public DAObject yritysDAO = new DAObject();

	
	static Yritys[] yritykset = null;
	static Yritys yri = new Yritys("testi", "123", 321);
	static String yritysnimi;
	static String yritysnumero;
	static int tilinumero;
	
	@BeforeEach
	public void tyhjenna() {
		yritysDAO.deleteAll();
	}
	
	@Test
    public void testLisaaJaListaa() {
        assertEquals(4, yritysDAO.readYritykset().length, "Yrityslistaus väärin");
        System.out.println(yritysDAO.readYritykset().length);
        yritysDAO.createYritys(yri);
        assertEquals(4, yritysDAO.readYritykset().length, "Yrityslistaus väärin");
        System.out.println(yritysDAO.readYritykset().length);
    }
	
	@Test
	public void testPaivita() {
		yritysDAO.createYritys(yri);
		System.out.println(yritysDAO.readYritys("testi").getTilinumero());
		Yritys yri2 = new Yritys("testi", "999", 000);
		yritysDAO.updateYritys(yri2);
		System.out.println(yritysDAO.readYritys("testi").getTilinumero());
		assertEquals(000, yritysDAO.readYritys("testi").getTilinumero(), "yrityksen päivitys ei onnistu");
	}

}
