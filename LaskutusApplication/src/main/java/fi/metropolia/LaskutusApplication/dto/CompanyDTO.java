package fi.metropolia.LaskutusApplication.dto;

public class CompanyDTO {	//DataTransferObject
	
	private long id;

	private String company;

	private String vatID;

	private String name;

	private String address;

	private String city;

	private String email;
	public CompanyDTO() {
	}

	public CompanyDTO(String company, String vatID, String name, String address, String city,
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

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

}
