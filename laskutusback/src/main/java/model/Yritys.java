package model;

import javax.persistence.*;

@Entity
@Table(name = "CUSTOMERS")
public class Yritys {

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "username", nullable = false)
	private User User;

	@Id
	@GeneratedValue
	private int id;

	@Column(name = "nimi", nullable = false)
	private String yritysnimi;

	@Column(name = "tunnus")
	private String ytunnus;

	@Column(name = "yhteyshlo")
	private String yhthlo;

	@Column(name = "osoite")
	private String osoite;

	@Column(name = "postitoimipaikka")
	private String postitoimipaikka;

	@Column(name = "sahkoposti")
	private String sposti;

	public Yritys() {
	}

	public Yritys(String yritysnimi, String ytunnus, String yhthlo, String osoite, String postitoimipaikka,
			String sposti) {
		this.yritysnimi = yritysnimi;
		this.ytunnus = ytunnus;
		this.yhthlo = yhthlo;
		this.osoite = osoite;
		this.postitoimipaikka = postitoimipaikka;
		this.sposti = sposti;
	}

	public Yritys(model.User user, int id, String yritysnimi, String ytunnus, String yhthlo, String osoite,
			String postitoimipaikka, String sposti) {
		User = user;
		this.id = id;
		this.yritysnimi = yritysnimi;
		this.ytunnus = ytunnus;
		this.yhthlo = yhthlo;
		this.osoite = osoite;
		this.postitoimipaikka = postitoimipaikka;
		this.sposti = sposti;
	}

	public String getYritysnimi() {
		return yritysnimi;
	}

	public void setYritysnimi(String yritysnimi) {
		this.yritysnimi = yritysnimi;
	}

	public User getUser() {
		return User;
	}

	public void setUser(User user) {
		User = user;
	}

	public String getYtunnus() {
		return ytunnus;
	}

	public void setYtunnus(String ytunnus) {
		this.ytunnus = ytunnus;
	}

	public String getYhthlo() {
		return yhthlo;
	}

	public void setYhthlo(String yhthlo) {
		this.yhthlo = yhthlo;
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
		return sposti;
	}

	public void setSposti(String sposti) {
		this.sposti = sposti;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

}
