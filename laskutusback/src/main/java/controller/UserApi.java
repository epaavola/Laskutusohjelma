package controller;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import spark.*;
import model.*;

/**
 * UserApi handles rest calls to user routes
 * and returns json response
 */
public class UserApi {

    DAObject dataccesobject;
    Authenticator auth;
    Gson gson;

    public UserApi(DAObject dao, Authenticator auth, Gson gson) {
        this.dataccesobject = dao;
        this.auth = auth;
        this.gson = gson;
    }

    public Object prerequest(Request req, Response res){
        return gson.toJson(new Responssi(StatusResponse.SUCCESS));
    }

    public Object getUser(Request req, Response res) {
        res.type("application/json");
        System.out.println("get user");
        if (dataccesobject.checkUserExistence(auth.checkPermission(req)) != false) {
            return gson.toJson(new Responssi(StatusResponse.SUCCESS,
                    gson.toJsonTree((dataccesobject.readUser(auth.checkPermission(req))))));
        } else {
            return new Gson().toJson(new Responssi(StatusResponse.ERROR, new Gson().toJson("User not found")));
        }
    }

    public Object addUser(Request req, Response res) {
        res.type("application/json");
        User user = new Gson().fromJson(req.body(), User.class);
        user.setPassword(":" + user.getEncoded());
        dataccesobject.createUser(user);
        return gson.toJson(new Responssi(StatusResponse.SUCCESS));
    }

    public Object updateUser(Request req, Response res) {
        res.type("application/json");
        User toEdit = new Gson().fromJson(req.body(), User.class);
        if (dataccesobject.updateUser(toEdit)) {
            return gson.toJson(new Responssi(StatusResponse.SUCCESS));
        } else {
            return gson.toJson(
                    new Responssi(StatusResponse.ERROR, new Gson().toJson("Customer not found or error in edit")));
        }
    }

    public Object checkIfExistsUser(Request req, Response res) {
        res.type("application/json");
        return gson.toJson(new Responssi(StatusResponse.SUCCESS,
                (dataccesobject.checkUserExistence(req.params(":nimi")) ? "Exists" : "Not in the db")));
    }

    public Object deleteUser(Request req, Response res) {
        res.type("application/json");
        dataccesobject.deleteUser(req.params(":nimi"));
        return gson.toJson(new Responssi(StatusResponse.SUCCESS, "User deleted"));
    }

    public Object login(Request req, Response res) {
        res.type("application/json");
        User user = new Gson().fromJson(req.body(), User.class);
        user.setPassword(":" + user.getEncoded());
        if (dataccesobject.checkUserAndPass(user.getUsername(), user.getEncoded())) {
            String token = user.getEncoded();
            System.out.println(token);
            return gson.toJson(new Responssi(StatusResponse.SUCCESS, new Gson().toJsonTree(token)));
        } else {
            return gson.toJson(new Responssi(StatusResponse.ERROR, "Käyttäjänimi tai salasana väärä"));
        }
    }
}