package fi.metropolia.LaskutusApplication.model;


 import javax.persistence.*;

@Entity
@Table(name = "CUSTOMERS")
public class DAOCompany {

//	@ManyToOne(fetch = FetchType.EAGER)
//	@JoinColumn(name = "user_id", nullable = false)
//	private DAOUser user;

	@Id
	@GeneratedValue
	private long id;

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

	public DAOCompany() {
	}

	public DAOCompany(String yritysnimi, String ytunnus, String yhthlo, String osoite, String postitoimipaikka,
			String sposti) {
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

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

} 
