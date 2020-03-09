

import model.*;
import static spark.Spark.*;

public class Main {

	static DAObject dataccesobject = new DAObject();

	public static void main(String[] args) {

		//port(8080);
		
		CorsFilter.apply();

		Authenticator authenticator = new Authenticator(dataccesobject);
		CustomerApi customerApi = new CustomerApi(dataccesobject, authenticator);
		UserApi userApi = new UserApi(dataccesobject);

		path("/api", () -> {
			before("/*", (req, res) -> {
				if (!(authenticator.authenticate(req))) {
					halt(401);
				}
			});
			path("/customers", () -> {
				get("/get", (req, res) -> {
					return customerApi.getAll(req, res);
				});

				get("/get/:nimi", (req, res) -> {
					return customerApi.getOne(req, res);
				});

				post("/add", (req, res) -> {
					return customerApi.addCustomer(req, res);
				});

				put("/update", (req, res) -> {
					return customerApi.updateCustomer(req, res);
				});

				options("/exists/:nimi", (req, res) -> {
					return customerApi.checkIfExistsCustomer(req, res);
				});

				delete("/delete/:nimi", (req, res) -> {
					return customerApi.deleteCustomer(req, res);
				});
			});

			path("/user", () -> {
				put("/update", (req, res) -> {
					return userApi.updateUser(req, res);
				});

				delete("/delete/:nimi", (req, res) -> {
					return userApi.deleteUser(req, res);
				});
			});
		});

		post("/createuser", (req, res) -> {
			return userApi.addUser(req, res);
		});

		options("/exists/:nimi", (req, res) -> {
			return userApi.checkIfExistsUser(req, res);
		});

		post("/login", (req, res) -> {
			return userApi.login(req, res);
		});
	}
}
