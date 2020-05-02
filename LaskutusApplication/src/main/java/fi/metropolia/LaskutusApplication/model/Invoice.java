package fi.metropolia.LaskutusApplication.model;


import javax.persistence.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
@Entity
@Table(name="invoices")
public class Invoice implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;

	private String invoiceNumber;

	private Double netAmount; // Netto
	private Double grossAmount; // Brutto
	private Double vatAmount; // alvi
	
	@ManyToOne(fetch=FetchType.LAZY)
	private Company company;

	@OneToMany(fetch=FetchType.LAZY, cascade=CascadeType.ALL, orphanRemoval=true)
	@JoinColumn(name="invoice_id")
	private List<InvoiceLine> lines;
	
	public Invoice() {
		this.lines = new ArrayList<>();
	}
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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

	public Company getClient() {
		return company;
	}

	public void setClient(Company company) {
		this.company = company;
	}

	public List<InvoiceLine> getLines() {
		return lines;
	}

	public void setLines(List<InvoiceLine> lines) {
		this.lines = lines;
	}

	public void addLine(InvoiceLine line) {
		this.lines.add(line);
	}

	public Double getTotal() {
		Double total = 0.0;
		for (InvoiceLine line : lines) {
			total += line.calculatePrice();
		}
		return total;
	}

}
