package model;
import com.google.gson.JsonElement;

public class Responssi {

    private StatusResponse status;
    private String message;
    private JsonElement data;

    public Responssi(StatusResponse status){
        this.status = status;
    }

    public Responssi(StatusResponse status, String message){
        this.status = status;
        this.message = message;
    }

    public Responssi(StatusResponse status, JsonElement data){
        this.status = status;
        this.data = data;
    }

    public StatusResponse getStatus() {
        return status;
    }

    public void setStatus(StatusResponse status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public JsonElement getData() {
        return data;
    }

    public void setData(JsonElement data) {
        this.data = data;
    }
}