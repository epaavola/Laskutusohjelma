package fi.metropolia.LaskutusApplication.model;


import javax.persistence.*;
import javax.validation.constraints.Size;

import org.hibernate.annotations.NaturalId;
import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotBlank;

import java.util.ArrayList;
import java.util.List;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    
    private String name;
    private String password;
    private String lastName;
    private String vatID;
    private String address;
    private String city;
    private String bankAccount;
    
    @NaturalId
    @NotBlank
    @Size(max = 40)
    @Email
    private String email;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
    	this.name = name;
    }
    public void setLastName(String lastName) {
    	this.lastName = lastName;
    }
    public String getLastName() {
    	return lastName;
    }
    
    public void setPassword(String password) {
    	this.password = password;
    }

    public String getPassword() {
        return password;
    }
    public void setEmail(String email) {
    	this.email = email;
    }
    public String getEmail() {
    	return email;
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