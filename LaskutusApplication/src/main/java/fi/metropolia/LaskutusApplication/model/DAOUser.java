package fi.metropolia.LaskutusApplication.model;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

import org.hibernate.annotations.NaturalId;

@Entity
@Table(name = "user")
public class DAOUser {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column
    
	private String username;
	@Column
    
	@JsonIgnore
	private String password;
	
	@Column
	private String name;
	@Column
	 @NaturalId
	private String email;
	@Column
	private String yTunnus;
	@Column
	private String address;
	@Column
	private String city;

	public DAOUser( String username, String name, String email, String yTunnus,
			String city, String address) {
		this. username = username;
		this.name = name;
		this.email = email;
		this.yTunnus = yTunnus;
		this.city = city;
		this.address = address;
}
	public DAOUser () {
		
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

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
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