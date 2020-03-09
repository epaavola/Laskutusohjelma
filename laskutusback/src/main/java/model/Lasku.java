package model;

import javax.persistence.*;

@Entity
@Table(name = "LASKUT")
public class Lasku {

    // laskunro päivämäärä eräp myöhästymiskorko

    @ManyToOne
    @JoinColumn(name = "username", nullable = false)
    private User User;

    @Id
    @Column(name = "laskunumero")
    private String laskunumero;

    @Column(name = "paivamaara")
    private String paivamaara;

    @Column(name = "erapaiva")
    private String nimi;

    @Column(name = "myohastymiskorko")
    private String korko;

    public Lasku() {

    }

    public Lasku(String laskunumero, String paivamaara, String nimi, String korko) {
        this.laskunumero = laskunumero;
        this.paivamaara = paivamaara;
        this.nimi = nimi;
        this.korko = korko;
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

    public String getNimi() {
        return nimi;
    }

    public void setNimi(String nimi) {
        this.nimi = nimi;
    }

    public String getKorko() {
        return korko;
    }

    public void setKorko(String korko) {
        this.korko = korko;
    }

}
