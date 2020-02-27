package main;

import com.google.gson.Gson;
import model.*;
import static spark.Spark.*;

public class Main {

	static DAObject yritysDAO = new DAObject();
	public static void main(String[] args) {

		get("/yritykset", (req, res) -> {
			res.type("application/json");
			String on = new Gson()
					.toJson(new Responssi(StatusResponse.SUCCESS, new Gson().toJsonTree(yritysDAO.readYritykset())));
			System.out.println(on);
			return on;
		});

		get("/yritykset/:nimi", (req, res) -> {
			res.type("application/json");
			return new Gson().toJson(new Responssi(StatusResponse.SUCCESS,
					new Gson().toJsonTree((yritysDAO.readYritys(req.params((":nimi")))))));
		});

		post("/yritykset", (req, res) -> {
			res.type("application/json");
			Yritys yritys = new Gson().fromJson(req.body(), Yritys.class);
			yritysDAO.createYritys(yritys);
			return new Gson().toJson(new Responssi(StatusResponse.SUCCESS));
		});

		put("/yritykset/:nimi", (req, res) -> {
			res.type("application/json");
			Yritys toEdit = new Gson().fromJson(req.body(), Yritys.class);
			Yritys edited = yritysDAO.updateYritys(toEdit);
			if (edited != null) {
				return new Gson().toJson(new Responssi(StatusResponse.SUCCESS, new Gson().toJsonTree(edited)));
			} else {
				return new Gson().toJson(
					new Responssi(StatusResponse.ERROR, new Gson().toJson("User not found or error in edit")));
			}
		});

		options("/yritykset/:nimi", (req, res) -> {
			res.type("application/json");
			return new Gson().toJson(new Responssi(StatusResponse.SUCCESS,
			(yritysDAO.tarkistaYritys(req.params(":nimi"))) ? "Exists" : "Not in the db"));
		});

		delete("/yritykset/:nimi", (req, res) -> {
			res.type("application/json");
			yritysDAO.deleteYritys(req.params(":nimi"));
			return new Gson().toJson(new Responssi(StatusResponse.SUCCESS, "yritys poistettu"));
		});
	}
}
