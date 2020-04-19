package fi.metropolia.LaskutusApplication.model;


 import com.fasterxml.jackson.annotation.JsonIgnore;


 import javax.persistence.*;

@Entity
@Table(name = "CUSTOMERS")
public class DAOCompany {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long customer_id;

	@Column
	private String company;

	@Column
	private String vatID;

	@Column
	private String name;

	@Column
	private String address;

	@Column
	private String city;

	@Column
	private String email;

	@ManyToOne
	@JoinColumn(name = "user_id", referencedColumnName = "id", updatable = false, nullable = false)
	@JsonIgnore
	private DAOUser user;

	public DAOCompany() {
	}

	public DAOCompany(String company, String vatID, String name, String address, String city,
			String email) {
		this.company = company;
		this.vatID = vatID;
		this.name = name;
		this.address = address;
		this.city = city;
		this.email = email;
	}



	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}



	public String getVatID() {
		return vatID;
	}

	public void setVatID(String vatID) {
		this.vatID = vatID;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public DAOUser getUser() {
		return user;
	}

	public void setUser(DAOUser user) {
		this.user = user;
	}

	public long getCustomer_id() {
		return customer_id;
	}

	public void setCustomer_id(long customer_id) {
		this.customer_id = customer_id;
	}
} 
