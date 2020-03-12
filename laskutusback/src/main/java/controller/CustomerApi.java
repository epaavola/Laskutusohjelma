package controller;

import com.google.gson.Gson;

import spark.*;
import model.*;

/**
 * CustomerApi handles rest calls to customer routes
 * and returns json response
 */
public class CustomerApi {

    DAObject dataccesobject;
    Authenticator auth;

    public CustomerApi(DAObject dao, Authenticator auth) {
        this.auth = auth;
        this.dataccesobject = dao;
    }

    public Object getAll(Request req, Response res) {
        res.type("application/json");
        Object on = new Gson()
                .toJson(new Responssi(StatusResponse.SUCCESS, new Gson().toJsonTree(dataccesobject.readYritykset(auth.checkPermission(req)))));
        System.out.println(on);
        return on;
    }

    public Object getOne(Request req, Response res) {
        res.type("application/json");
        System.out.println("getone " + req.params(":nimi"));
        if (dataccesobject.checkYritys(req.params(":nimi")) && dataccesobject.readYritys(req.params(":nimi"), auth.checkPermission(req)) != null) {
            return new Gson().toJson(new Responssi(StatusResponse.SUCCESS,
                    new Gson().toJsonTree((dataccesobject.readYritys(req.params(":nimi"), auth.checkPermission(req))))));
        } else {
            return new Gson().toJson(new Responssi(StatusResponse.ERROR, new Gson().toJson("Customer not found")));
        }
    }

    public Object addCustomer(Request req, Response res) {
        res.type("application/json");
        //System.out.println(req.headers("Authorization"));
        User user = new User(auth.checkPermission(req), auth.getReqToken(req));
        Yritys yritys = new Gson().fromJson(req.body(), Yritys.class);
        yritys.setUser(user);
        dataccesobject.createYritys(yritys);
        return new Gson().toJson(new Responssi(StatusResponse.SUCCESS));
    }

    public Object updateCustomer(Request req, Response res) {
        res.type("application/json");
        Yritys toEdit = new Gson().fromJson(req.body(), Yritys.class);
        if (dataccesobject.updateYritys(toEdit, auth.checkPermission(req))) {
            return new Gson().toJson(new Responssi(StatusResponse.SUCCESS));
        } else {
            return new Gson().toJson(
                    new Responssi(StatusResponse.ERROR, new Gson().toJson("Customer not found or error in edit")));
        }
    }

    public Object checkIfExistsCustomer(Request req, Response res) {
        res.type("application/json");
        return new Gson().toJson(new Responssi(StatusResponse.SUCCESS,
                (dataccesobject.checkYritys(req.params(":nimi"))) ? "Exists" : "Not in the db"));
    }

    public Object deleteCustomer(Request req, Response res) {
        res.type("application/json");
        if(dataccesobject.deleteYritys(req.params(":nimi"), auth.checkPermission(req)) != false){
            return new Gson().toJson(new Responssi(StatusResponse.SUCCESS, "Customer deleted"));
        } else {
            return new Gson().toJson(
                    new Responssi(StatusResponse.ERROR, new Gson().toJson("Customer not found")));
        }
    }
}