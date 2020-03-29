package controller;

import com.google.gson.Gson;

import spark.*;
import model.*;

/**
 * CustomerApi handles rest calls to customer routes
 * and returns json response
 */
public class CustomerApi {

    private DAObject dataccesobject;
    private Authenticator auth;
    private Gson gson;

    public CustomerApi(DAObject dao, Authenticator auth, Gson gson) {
        this.auth = auth;
        this.dataccesobject = dao;
        this.gson = gson;
    }

    public Object getAll(Request req, Response res) {
        res.type("application/json");
        System.out.println(req.requestMethod());
        Object on = gson
                .toJson(new Responssi(StatusResponse.SUCCESS, gson.toJsonTree(dataccesobject.readYritykset(auth.checkPermission(req)))));
        System.out.println("get all " +on);
        return on;
    }

    public Object getOne(Request req, Response res) {
        res.type("application/json");
        System.out.println(req.requestMethod());
        System.out.println("getone " + req.params(":nimi"));
        if (dataccesobject.checkYritys(req.params(":nimi")) && dataccesobject.readYritys(req.params(":nimi"), auth.checkPermission(req)) != null) {
            return gson.toJson(new Responssi(StatusResponse.SUCCESS,
                    gson.toJsonTree((dataccesobject.readYritys(req.params(":nimi"), auth.checkPermission(req))))));
        } else {
            return gson.toJson(new Responssi(StatusResponse.ERROR, gson.toJson("Customer not found")));
        }
    }

    public Object addCustomer(Request req, Response res) {
        res.type("application/json");
        System.out.println(req.requestMethod());
        //System.out.println(req.headers("Authorization"));
        User user = dataccesobject.readUser(auth.checkPermission(req));
        Yritys yritys = gson.fromJson(req.body(), Yritys.class);
        yritys.setUser(user);
        System.out.println(yritys.getYritysnimi() + " :yritys");
        System.out.println(yritys.getUser().getUsername() + " :username");
        dataccesobject.createYritys(yritys);
        return gson.toJson(new Responssi(StatusResponse.SUCCESS));
    }

    public Object updateCustomer(Request req, Response res) {
        res.type("application/json");
        System.out.println(req.requestMethod());
        Yritys toEdit = gson.fromJson(req.body(), Yritys.class);
        if (dataccesobject.updateYritys(toEdit, auth.checkPermission(req))) {
            return gson.toJson(new Responssi(StatusResponse.SUCCESS));
        } else {
            return gson.toJson(
                    new Responssi(StatusResponse.ERROR, gson.toJson("Customer not found or error in edit")));
        }
    }

    public Object checkIfExistsCustomer(Request req, Response res) {
        res.type("application/json");
        return gson.toJson(new Responssi(StatusResponse.SUCCESS,
                (dataccesobject.checkYritys(req.params(":nimi"))) ? "Exists" : "Not in the db"));
    }

    public Object deleteCustomer(Request req, Response res) {
        res.type("application/json");
        System.out.println(req.requestMethod());
        String nimi = req.params(":nimi");
        nimi.replace("%20", " ");
        if(dataccesobject.deleteYritys(nimi, auth.checkPermission(req)) != false){
            return gson.toJson(new Responssi(StatusResponse.SUCCESS, "Customer deleted"));
        } else {
            return gson.toJson(
                    new Responssi(StatusResponse.ERROR, gson.toJson("Customer not found")));
        }
    }
}