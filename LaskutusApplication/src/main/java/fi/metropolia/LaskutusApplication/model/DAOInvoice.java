package fi.metropolia.LaskutusApplication.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.time.LocalDate;

import javax.persistence.*;

@Entity
@Table(name = "INVOICES")			//DataAccessObject
public class DAOInvoice {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long invoice_id;

	@Column
	private String invoiceNumber;

	@Column
	private Double netAmount;

	@Column
	private Double grossAmount;
	@Column
	private Double vatAmount;

	@ManyToOne
	@JoinColumn(name = "user_id", referencedColumnName = "id", updatable = false, nullable = false)
	@JsonIgnore
	private DAOUser user;

	public DAOInvoice() {
	}

	public DAOInvoice(String invoiceNumber, Double netAmount, Double grossAmount, Double vatAmount) {
		this.invoiceNumber = invoiceNumber;
		this.netAmount = netAmount;
		this.grossAmount = grossAmount;
		this.vatAmount = vatAmount;

	}

	public long getInvoice_id() {
		return invoice_id;
	}

	public void setInvoice_id(long invoice_id) {
		this.invoice_id = invoice_id;
	}

	public String getInvoiceNumber() {
		return invoiceNumber;
	}

	public void setInvoiceNumber(String invoiceNumber) {
		this.invoiceNumber = invoiceNumber;
	}

	public Double getNetAmount() {
		return netAmount;
	}

	public void setNetAmount(Double netAmount) {
		this.netAmount = netAmount;
	}

	public Double getGrossAmount() {
		return grossAmount;
	}

	public void setGrossAmount(Double grossAmount) {
		this.grossAmount = grossAmount;
	}

	public Double getVatAmount() {
		return vatAmount;
	}

	public void setVatAmount(Double vatAmount) {
		this.vatAmount = vatAmount;
	}

	public DAOUser getUser() {
		return user;
	}

	public void setUser(DAOUser user) {
		this.user = user;
	}

}
