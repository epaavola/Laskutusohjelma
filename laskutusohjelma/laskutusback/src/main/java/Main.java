
import model.*;
import controller.*;
import static spark.Spark.*;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

/**
 * Main declares routes with Spark and creates authenticator, userapi,
 * customerapi and invoiceapi
 */
public class Main {

	static DAObject dataccesobject = new DAObject();
	static GsonBuilder builder = new GsonBuilder().disableHtmlEscaping();
	static Gson gson = builder.create();

	public static void main(String[] args) {

		// port(8080);

		CorsFilter.apply();

		Authenticator authenticator = new Authenticator(dataccesobject, gson);
		CustomerApi customerApi = new CustomerApi(dataccesobject, authenticator, gson);
		InvoiceApi invoiceApi = new InvoiceApi(dataccesobject, authenticator, gson);
		UserApi userApi = new UserApi(dataccesobject, authenticator, gson);

		path("/api", () -> {
			before("/*", (req, res) -> {
				if (!(req.requestMethod() == "OPTIONS")) {
					if (!(authenticator.authenticate(req))) {
						halt(401);
					}
				}
			});
			options("/*", (req,res) -> {
				return userApi.prerequest(req, res);
			});
			path("/customers", () -> {
				options("", (req,res) -> {
					return userApi.prerequest(req, res);
				});

				get("", (req, res) -> {
					return customerApi.getAll(req, res);
				});

				get("/:nimi", (req, res) -> {
					return customerApi.getOne(req, res);
				});

				post("", (req, res) -> {
					return customerApi.addCustomer(req, res);
				});

				put("", (req, res) -> {
					return customerApi.updateCustomer(req, res);
				});

				/*
				 * options("/:nimi", (req, res) -> { return
				 * customerApi.checkIfExistsCustomer(req, res); });
				 */

				delete("/:nimi", (req, res) -> {
					return customerApi.deleteCustomer(req, res);
				});
			});

			path("/invoices", () -> {
				get("", (req, res) -> {
					return invoiceApi.getAll(req, res);
				});

				get("/:numero", (req, res) -> {
					return invoiceApi.getOne(req, res);
				});

				post("", (req, res) -> {
					return invoiceApi.addInvoice(req, res);
				});

				options("/:numero", (req, res) -> {
					return invoiceApi.checkIfExistsInvoice(req, res);
				});

				delete("/:numero", (req, res) -> {
					return invoiceApi.deleteInvoice(req, res);
				});
			});

			path("/user", () -> {
				get("", (req, res) -> {
					return userApi.getUser(req, res);
				});

				put("", (req, res) -> {
					return userApi.updateUser(req, res);
				});

				delete("/:nimi", (req, res) -> {
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
