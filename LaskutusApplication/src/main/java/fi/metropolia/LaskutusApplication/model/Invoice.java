package fi.metropolia.LaskutusApplication.model;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Set;

@Entity
@Table(name = "invoice", uniqueConstraints = { @UniqueConstraint(columnNames = { "invoice_number", "user_id" }) })
public class Invoice {

	private Long id;
	private String invoiceNumber;
	private User user;
	private LocalDate createDate;
	private LocalDate saleDate;
	private LocalDate paymentDate;
	private Double netAmount;	//Netto
	private Double grossAmount; //Brutto
	private Double vatAmount; // alvi

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
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
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Column(name = "create_date", nullable = false)
	public LocalDate getCreateDate() {
		return createDate;
	}

	public void setCreateDate(LocalDate createDate) {
		this.createDate = createDate;
	}

	@Column(name = "sale_date", nullable = false)
	public LocalDate getSaleDate() {
		return saleDate;
	}

	public void setSaleDate(LocalDate saleDate) {
		this.saleDate = saleDate;
	}

	@Column(name = "payment_date", nullable = false)
	public LocalDate getPaymentDate() {
		return paymentDate;
	}

	public void setPaymentDate(LocalDate paymentDate) {
		this.paymentDate = paymentDate;
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
