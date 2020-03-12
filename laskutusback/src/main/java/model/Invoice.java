package model;

import javax.persistence.*;

/**
 * Invoice object
 * ManyToOne mapping to user username
 */
@Entity
@Table(name = "INVOICES")
public class Invoice {

    @ManyToOne
    @JoinColumn(name = "username", nullable = false)
    private User User;

    @Id
    @GeneratedValue
    private int id;

    @Column(name = "laskunumero")
    private String laskunumero;

    @Column(name = "paivamaara")
    private String paivamaara;

    @Column(name = "erapaiva")
    private String erapaiva;

    @Column(name = "myohastymiskorko")
    private String myohastymiskorko;

    public Invoice() {

    }

    public Invoice(model.User user, String laskunumero, String paivamaara, String erapaiva, String myohastymiskorko) {
        User = user;
        this.laskunumero = laskunumero;
        this.paivamaara = paivamaara;
        this.erapaiva = erapaiva;
        this.myohastymiskorko = myohastymiskorko;
    }

    public User getUser() {
        return User;
    }

    public void setUser(User user) {
        User = user;
    }

    public String getLaskunumero() {
        return laskunumero;
    }

    public void setLaskunumero(String laskunumero) {
        this.laskunumero = laskunumero;
    }

    public String getPaivamaara() {
        return paivamaara;
    }

    public void setPaivamaara(String paivamaara) {
        this.paivamaara = paivamaara;
    }

    public String getErapaiva() {
        return erapaiva;
    }

    public void setErapaiva(String erapaiva) {
        this.erapaiva = erapaiva;
    }

    public String getMyohastymiskorko() {
        return myohastymiskorko;
    }

    public void setMyohastymiskorko(String myohastymiskorko) {
        this.myohastymiskorko = myohastymiskorko;
    }

    public Invoice(String laskunumero, String paivamaara, String erapaiva, String myohastymiskorko) {
        this.laskunumero = laskunumero;
        this.paivamaara = paivamaara;
        this.erapaiva = erapaiva;
        this.myohastymiskorko = myohastymiskorko;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

}
