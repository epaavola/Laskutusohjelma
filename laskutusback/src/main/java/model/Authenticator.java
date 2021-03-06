package model;

import com.google.gson.Gson;

import org.apache.commons.codec.binary.Base64;
import org.apache.commons.lang3.StringUtils;

import spark.Request;
import spark.Response;

/**
 * Authorization checker and converter
 */
public class Authenticator {

    private DAObject dataccesobject;
    private Gson gson;

    public Authenticator(DAObject dao, Gson gson) {
        this.dataccesobject = dao;
        this.gson = gson;
    }

    /**
     * preflight OPTION request responder
     * @param req
     * @return gson object with access origin headers
     */
    public Object prerequest(Request req, Response res){
        return gson.toJson(new Responssi(StatusResponse.SUCCESS));
    }

    /**
     * Checks username and password from database
     */
    public boolean authenticate(Request req) {
        System.out.println("Authenticating");
        if (req.headers("Authorization") != null) {
            String a = StringUtils.substringAfter(req.headers("Authorization"), "Basic");
            String decoded = new String(Base64.decodeBase64(a));
            String[] arr = decoded.split(":", 2);
            a = a.replaceAll("\\s+", "");
            if (!(arr[1].isEmpty()) && dataccesobject.checkUserAndPass(arr[0], a) != false) {
                System.out.println("OK");
                return true;
            }
        }
        System.out.println("Missing authorization in request");
        return false;
    }

    /**
     * Decodes authorization token and returns username
     */
    public String checkPermission(Request req) {
        System.out.println("Checking user permission");
        String a = StringUtils.substringAfter(req.headers("Authorization"), "Basic");
        String decoded = new String(Base64.decodeBase64(a));
        String[] arr = decoded.split(":", 2);
        return arr[0];
    }

    /**
     * Returns authorization token
     */
    public String getReqToken(Request req) {
        String a = StringUtils.substringAfter(req.headers("Authorization"), "Basic");
        a = a.replaceAll("\\s+", "");
        System.out.println(a+" getting req token");
        return a;
    }
}