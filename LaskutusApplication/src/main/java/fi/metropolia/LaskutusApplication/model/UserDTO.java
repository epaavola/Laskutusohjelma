package fi.metropolia.LaskutusApplication.model;


public class UserDTO {
	private String username;
	private String password;
	private String name;
	private String email;
	private String yTunnus;
	private String address;
	private String city;
	private long id;
	
	public UserDTO( String username, String name, String email, String yTunnus,
			String city, String address) {
		this.username = username;
		this.name = name;
		this.email = email;
		this.yTunnus = yTunnus;
		this.city = city;
		this.address = address;
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

	public String getyTunnus() {
		return yTunnus;
	}

	public void setyTunnus(String yTunnus) {
		this.yTunnus = yTunnus;
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
	

}