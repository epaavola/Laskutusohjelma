package model;

import javax.persistence.*;

@Entity
@Table(name="yritys")
public class Yritys {
	
	@Id
	@Column(name="nimi")
	private String yritysnimi;
	
	@Column(name="numero")
	private String yritysnumero;
	
	@Column(name="tili")
	private int tilinumero;
	
	public Yritys(String y, String yn, int tn) {
		this.yritysnimi = y;
		this.yritysnumero = yn;
		this.tilinumero = tn;
	}
	
	public Yritys() {
		
	}

	public String getYritysnimi() {
		return yritysnimi;
	}

	public void setYritysnimi(String yritysnimi) {
		this.yritysnimi = yritysnimi;
	}

	public String getYritysnumero() {
		return yritysnumero;
	}

	public void setYritysnumero(String yritysnumero) {
		this.yritysnumero = yritysnumero;
	}

	public int getTilinumero() {
		return tilinumero;
	}

	public void setTilinumero(int tilinumero) {
		this.tilinumero = tilinumero;
	}

}
