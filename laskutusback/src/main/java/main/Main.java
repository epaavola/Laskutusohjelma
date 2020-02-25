package main;
import static spark.Spark.get;

import java.util.Scanner;
import java.util.stream.Collectors;

import model.*;

import static spark.Spark.*;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.Arrays;
import java.util.List;
import static spark.Spark.get;
import static spark.Spark.port;
import static spark.Spark.post;
import static spark.Spark.put;
import static spark.Spark.delete;


public class Main {
	static DAObject yritysDAO = new DAObject();
	private static ObjectMapper om = new ObjectMapper();
	static Scanner scanner = new Scanner(System.in);
	static Yritys[] yritykset = null;
	static Yritys yri = null;
	static String yritysnimi;
	static String yritysnumero;
	static int tilinumero;
	static int id;

	public static void listaaYritykset() {
		yritykset = yritysDAO.readYritykset();
		for (Yritys a : yritykset) {
			System.out.println("ID: " + a.getID() + " Yrityksen nimi: " + a.getYritysnimi() +
					" Yrityksen numero: " + a.getYritysnumero() + " Tilinumero: " + a.getTilinumero());
		}
	}

	public static void lisääYritys() {
		System.out.println("Anna uuden yrityksen nimi: ");
		yritysnimi = scanner.nextLine();
		System.out.println("Yritysnumero: ");
		yritysnumero = scanner.nextLine();
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
		yritysnumero = scanner.nextLine();
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
		System.out.println("Anna poistettavan yrityksen id: ");
		if (yritysDAO.deleteYritys(scanner.nextInt())) {
			System.out.println("Poisto onnistui");
		} else {
			System.out.println("Poisto epäonnistui");
		}
	}
	
	private static void suljeSessio() {
		yritysDAO.closeSes();	
	}

	public static void main(String[] args) {
		
		// Start embedded server at this port
		port(8080);
		
		//Enable Cors Origin
		CorsFilter.apply();
		
		// GET default
		get("/api", (request, response) -> "Laskutusohjelma API");
		
		// GET - anna yrityksen tiedot yrityksen nimellä
		get("/api/yritykset/:id", (req, res) -> {
			int _id = Integer.parseInt(req.params(":id"));	
			Yritys yritys = yritysDAO.readYritys(_id);
			if(yritys != null) {
				return om.writeValueAsString(yritys);
			}else {
				res.status(404); // 404 ei löydy
				return om.writeValueAsString("Yritystä ei löydy");
			}
		});
		
		get("/api/yritykset/", (req, res) -> {
			Yritys[] yritykset = yritysDAO.readYritykset();
			if(yritykset != null) {
				return om.writeValueAsString(yritykset);
			}else {
				res.status(404); // 404 ei löydy
				return om.writeValueAsString("Yrityksiä ei löydy");
			}
		});
		
	//	put("/api/yritykset/:id", (req, res) -> {
			
	//    });
	        
		delete("/api/yritykset/:id", (req, res) -> {
			String para = req.params(":id");
			int id = Integer.parseInt(para);
            Yritys yritys = yritysDAO.readYritys(id);
            if (yritys != null) {
            	yritysDAO.deleteYritys(id);
                return om.writeValueAsString("Yritys id:llä " + id + " on poistettu!");
            } else {
                res.status(404);
                return om.writeValueAsString("Yritystä ei löydy");
            }
	    });
		
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
