package fi.metropolia.LaskutusApplication.model;


import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

import org.hibernate.annotations.NaturalId;

@Entity
@Table(name = "USER")		//DataAccessObject

public class DAOUser {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
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
    private String vatID;
    @Column
    private String address;
    @Column
    private String city;
    @Column
    private String bankAccount;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private Set<DAOCompany> customers;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private Set<DAOInvoice> invoices;

    public DAOUser(String username, String name, String email, String vatID,
                   String address, String city, String bankAccount) {
        this.username = username;
        this.name = name;
        this.email = email;
        this.vatID = vatID;
        this.city = city;
        this.address = address;
        this.bankAccount = bankAccount;
    }

    public DAOUser() {

    }
    public Set<DAOInvoice> getInvoices() {
        return invoices;
    }

    public void setInvoices(Set<DAOInvoice> invoices) {
        this.invoices = invoices;
    }
    public Set<DAOCompany> getCustomers() {
        return customers;
    }

    public void setCustomers(Set<DAOCompany> customers) {
        this.customers = customers;
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