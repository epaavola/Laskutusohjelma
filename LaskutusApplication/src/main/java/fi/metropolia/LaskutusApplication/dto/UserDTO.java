package fi.metropolia.LaskutusApplication.dto;


public class UserDTO {
	private String username;
	private String password;
	private String name;
	private String email;
	private String vatID;
	private String address;
	private String city;
	private String bankAccount;
	private long id;
	
	public UserDTO( String username, String name, String email, String vatID,
			String address, String city, String bankAccount) {
		this.username = username;
		this.name = name;
		this.email = email;
		this.vatID = vatID;
		this.city = city;
		this.address = address;
		this.bankAccount = bankAccount;
	}
	public UserDTO() {
		
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getVatID() {
		return vatID;
	}

	public void setVatID(String vatID) {
		this.vatID = vatID;
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
	
	public String getBankAccount() { return this.bankAccount; }

	public void setBankAccount(String bankAccount) { this.bankAccount = bankAccount; }
}