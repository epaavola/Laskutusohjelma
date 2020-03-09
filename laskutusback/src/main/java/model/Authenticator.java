package model;

import org.apache.commons.codec.binary.Base64;
import org.apache.commons.lang3.StringUtils;

import spark.Request;

public class Authenticator {

    private DAObject dataccesobject;

    public Authenticator(DAObject dao) {
        this.dataccesobject = dao;
    }

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
        System.out.println("Not logged in");
        return false;
    }

    public String checkPermission(Request req) {
        System.out.println("Checking user permission");
        String a = StringUtils.substringAfter(req.headers("Authorization"), "Basic");
        String decoded = new String(Base64.decodeBase64(a));
        String[] arr = decoded.split(":", 2);
        return arr[0];
    }

    public String getReqToken(Request req) {
        String a = StringUtils.substringAfter(req.headers("Authorization"), "Basic");
        a = a.replaceAll("\\s+", "");
        System.out.println(a);
        return a;
    }
}