package model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import org.apache.commons.codec.binary.Base64;

@Entity
@Table(name = "USERS")
public class User {

    // username yritynimi ytunnus osoite postitoi sähköp tilinro

    @OneToMany(mappedBy = "User", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Yritys> customers = new ArrayList<Yritys>();

    @Id
    @Column(nullable = false, name = "username")
    private String username;

    @Column(nullable = false, name = "password")
    private String password;

    @Column(name = "nimi")
    private String nimi;

    @Column(name = "ytunnus")
    private String ytunnus;

    @Column(name = "osoite")
    private String osoite;

    @Column(name = "postitoimipaikka")
    private String postitoimipaikka;

    @Column(name = "sahkoposti")
    private String sahkoposti;

    @Column(name = "tilinumero")
    private String tilinro;

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public User() {
    }

    public User(@NotNull String username, @NotNull String password, String nimi, String ytunnus, String osoite,
            String postitoimipaikka, String sposti, String tilinro) {
        this.username = username;
        this.password = password;
        this.nimi = nimi;
        this.ytunnus = ytunnus;
        this.osoite = osoite;
        this.postitoimipaikka = postitoimipaikka;
        this.sahkoposti = sposti;
        this.tilinro = tilinro;
    }

    public User(String username) {
        this.username = username;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEncoded() {
        return new String(Base64.encodeBase64(this.username.concat(this.password).getBytes()));
    }

    public String getDecoded() {
        String decoded = new String(Base64.decodeBase64(this.password));
        String[] arr = decoded.split(" : ", 2);
        return arr[1];
    }

    public List<Yritys> getCustomers() {
        return customers;
    }

    public void setCustomers(List<Yritys> customers) {
        this.customers = customers;
    }

    public String getNimi() {
        return nimi;
    }

    public void setNimi(String nimi) {
        this.nimi = nimi;
    }

    public String getYtunnus() {
        return ytunnus;
    }

    public void setYtunnus(String ytunnus) {
        this.ytunnus = ytunnus;
    }

    public String getOsoite() {
        return osoite;
    }

    public void setOsoite(String osoite) {
        this.osoite = osoite;
    }

    public String getPostitoimipaikka() {
        return postitoimipaikka;
    }

    public void setPostitoimipaikka(String postitoimipaikka) {
        this.postitoimipaikka = postitoimipaikka;
    }

    public String getSposti() {
        return sahkoposti;
    }

    public void setSposti(String sposti) {
        this.sahkoposti = sposti;
    }

    public String getTilinro() {
        return tilinro;
    }

    public void setTilinro(String tilinro) {
        this.tilinro = tilinro;
    }
}