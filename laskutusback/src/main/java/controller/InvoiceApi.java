package controller;

import com.google.gson.Gson;

import model.*;
import spark.*;

/**
 * InvoiceApi handles rest calls to invoice routes
 * and returns json response
 */
public class InvoiceApi {

    DAObject dataccesobject;
    Authenticator auth;
    Gson gson;

    public InvoiceApi(DAObject dao, Authenticator auth, Gson gson) {
        this.auth = auth;
        this.dataccesobject = dao;
        this.gson = gson;
    }

    public Object getAll(Request req, Response res) {
        res.type("application/json");
        Object on = gson
                .toJson(new Responssi(StatusResponse.SUCCESS, gson.toJsonTree(dataccesobject.readLaskut(auth.checkPermission(req)))));
        return on;
    }

    public Object getOne(Request req, Response res) {
        res.type("application/json");
        System.out.println("getone " + req.params(":nimi"));
        if (dataccesobject.checkLasku(req.params(":nimi")) && dataccesobject.readLasku(req.params(":numero"), auth.checkPermission(req)) != null) {
            return new Gson().toJson(new Responssi(StatusResponse.SUCCESS,
                    new Gson().toJsonTree((dataccesobject.readLasku(req.params(":numero"), auth.checkPermission(req))))));
        } else {
            return new Gson().toJson(new Responssi(StatusResponse.ERROR, new Gson().toJson("Invoice not found")));
        }
    }

	public Object addInvoice(Request req, Response res) {
		res.type("application/json");
        //System.out.println(req.headers("Authorization"));
        User user = new User(auth.checkPermission(req), auth.getReqToken(req));
        Invoice lasku = gson.fromJson(req.body(), Invoice.class);
        lasku.setUser(user);
        dataccesobject.createLasku(lasku);
        return gson.toJson(new Responssi(StatusResponse.SUCCESS));
    }

	public Object checkIfExistsInvoice(Request req, Response res) {
		res.type("application/json");
        return new Gson().toJson(new Responssi(StatusResponse.SUCCESS,
                (dataccesobject.checkLasku(req.params(":numero"))) ? "Exists" : "Not in the db"));
	}

	public Object deleteInvoice(Request req, Response res) {
		res.type("application/json");
        if(dataccesobject.deleteLasku(req.params(":numero"), auth.checkPermission(req)) != false){
            return new Gson().toJson(new Responssi(StatusResponse.SUCCESS, "Invoice deleted"));
        } else {
            return new Gson().toJson(
                    new Responssi(StatusResponse.ERROR, new Gson().toJson("Invoice not found")));
        }
	}
}