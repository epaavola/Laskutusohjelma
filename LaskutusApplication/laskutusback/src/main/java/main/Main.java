package main;
import java.util.Scanner;
import model.*;

public class Main {
	static DAObject yritysDAO = new DAObject();
	
	static Scanner scanner = new Scanner(System.in);
	static Yritys[] yritykset = null;
	static Yritys yri = null;
	static String yritysnimi;
	static int yritysnumero;
	static int tilinumero;

	public static void listaaYritykset() {
		yritykset = yritysDAO.readYritykset();
		for (Yritys a : yritykset) {
			System.out.println("Yrityksen nimi: " + a.getYritysnimi() +
					" Yrityksen numero: " + a.getYritysnumero() + " Tilinumero: " + a.getTilinumero());
		}
	}

	public static void lisääYritys() {
		System.out.println("Anna uuden yrityksen nimi: ");
		yritysnimi = scanner.nextLine();
		System.out.println("Yritysnumero: ");
		yritysnumero = scanner.nextInt();
		scanner.nextLine();
		System.out.println("Tilinumero: ");
		tilinumero = scanner.nextInt();
		scanner.nextLine();
		yri = new Yritys(yritysnimi, yritysnumero, tilinumero);
		if (yritysDAO.createYritys(yri)) {
			System.out.println("Lisäys onnistui");
		} else {
			System.out.println("Lisäys epäonnistui");
		}
	}

	public static void päivitäYritys() {
		System.out.println("Päivität nykyistä yritystä. Anna yrityksen nimi: ");
		yritysnimi = scanner.nextLine();
		System.out.println("Uusi yritysnumero: ");
		yritysnumero = scanner.nextInt();
		scanner.nextLine();
		System.out.println("Uusi tilinumero: ");
		tilinumero = scanner.nextInt();
		yri = new Yritys(yritysnimi, yritysnumero, tilinumero);
		if (yritysDAO.updateYritys(yri)) {
			System.out.println("Päivitys onnistui");
		} else {
			System.out.println("Päivitys epäonnistui");
		}
	}

	public static void poistaYritys() {
		System.out.println("Anna poistettavan yrityksen nimi: ");
		if (yritysDAO.deleteYritys(scanner.nextLine())) {
			System.out.println("Poisto onnistui");
		} else {
			System.out.println("Poisto epäonnistui");
		}
	}
	
	private static void suljeSessio() {
		yritysDAO.closeSes();	
	}

	public static void main(String[] args) {
		char valinta;
		final char CREATE = 'C', READ = 'R', UPDATE = 'U', DELETE = 'D', QUIT = 'Q';
		do {
			System.out.println("R: Listaa yritykset.");
			System.out.println("C: Luo uusi yritys.");
			System.out.println("U: Päivitä yritys.");
			System.out.println("D: Poista yritys.");
			System.out.println("Q: Lopeta.");
			valinta = (scanner.nextLine().toUpperCase()).charAt(0);
			switch (valinta) {
			case READ:
				listaaYritykset();
				break;
			case CREATE:
				lisääYritys();
				break;
			case UPDATE:
				päivitäYritys();
				break;
			case DELETE:
				poistaYritys();
				break;
			case QUIT:
				suljeSessio();
				break;
			}
		} while (valinta != QUIT);
	}
}
