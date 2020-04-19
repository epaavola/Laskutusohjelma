package fi.metropolia.LaskutusApplication.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Set;

@Entity
@Table(name = "INVOICES", uniqueConstraints = { @UniqueConstraint(columnNames = {"invoice_number"}) })
public class Invoice {

	private Long id;
	private String invoiceNumber;
	private DAOUser user;
	private Double netAmount;	//Netto
	private Double grossAmount; //Brutto
	private Double vatAmount; // alvi

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@Column(name = "invoice_number", nullable = false)
	public String getInvoiceNumber() {
		return invoiceNumber;
	}

	public void setInvoiceNumber(String invoiceNumber) {
		this.invoiceNumber = invoiceNumber;
	}

	@ManyToOne
	@JoinColumn(name = "user_id", referencedColumnName = "id", updatable = false, nullable = false)
	@JsonIgnore
	public DAOUser getUser() {
		return user;
	}

	public void setUser(DAOUser user) {
		this.user = user;
	
	}

	@Column(name = "net_value", nullable = false)
	public Double getNetAmount() {
		return netAmount;
	}

	public void setNetAmount(Double netAmount) {
		this.netAmount = netAmount;
	}

	@Column(name = "gross_value", nullable = false)
	public Double getGrossAmount() {
		return grossAmount;
	}

	public void setGrossAmount(Double grossAmount) {
		this.grossAmount = grossAmount;
	}

	@Column(name = "vat_value", nullable = false)
	public Double getVatAmount() {
		return vatAmount;
	}

	public void setVatAmount(Double vatAmount) {
		this.vatAmount = vatAmount;
	}

}
