package fi.metropolia.LaskutusApplication.model;

public class CompanyDTO {
	
	private long id;

	private String yritysnimi;

	private String ytunnus;

	private String yhthlo;

	private String osoite;

	private String postitoimipaikka;

	private String sposti;
	public CompanyDTO() {
	}

	public CompanyDTO(String yritysnimi, String ytunnus, String yhthlo, String osoite, String postitoimipaikka,
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

	public void setId(int id) {
		this.id = id;
	}

}
