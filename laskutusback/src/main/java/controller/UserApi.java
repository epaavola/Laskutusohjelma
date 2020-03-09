package controller;

import com.google.gson.Gson;

import spark.*;
import model.*;

public class UserApi {

    DAObject dataccesobject;

    public UserApi(DAObject dao) {
        this.dataccesobject = dao;
    }

    public Object addUser(Request req, Response res) {
        res.type("application/json");
        User user = new Gson().fromJson(req.body(), User.class);
        user.setPassword(":" + user.getEncoded());
        dataccesobject.createUser(user);
        return new Gson().toJson(new Responssi(StatusResponse.SUCCESS));
    }

    public Object updateUser(Request req, Response res) {
        res.type("application/json");
        User toEdit = new Gson().fromJson(req.body(), User.class);
        if (dataccesobject.updateUser(toEdit)) {
            return new Gson().toJson(new Responssi(StatusResponse.SUCCESS));
        } else {
            return new Gson().toJson(
                    new Responssi(StatusResponse.ERROR, new Gson().toJson("Customer not found or error in edit")));
        }
    }

    public Object checkIfExistsUser(Request req, Response res) {
        res.type("application/json");
        return new Gson().toJson(new Responssi(StatusResponse.SUCCESS,
                (dataccesobject.checkUserExistence(req.params(":nimi")) ? "Exists" : "Not in the db")));
    }

    public Object deleteUser(Request req, Response res) {
        res.type("application/json");
        dataccesobject.deleteUser(req.params(":nimi"));
        return new Gson().toJson(new Responssi(StatusResponse.SUCCESS, "User deleted"));
    }

    public Object login(Request req, Response res) {
        res.type("application/json");
        User user = new Gson().fromJson(req.body(), User.class);
        if (dataccesobject.checkUserAndPass(user.getUsername(), user.getEncoded())) {
            String token = user.getEncoded();
            return new Gson().toJson(new Responssi(StatusResponse.SUCCESS, new Gson().toJsonTree(token)));
        } else {
            return new Gson().toJson(new Responssi(StatusResponse.ERROR, "Käyttäjänimi tai salasana väärä"));
        }
    }
}