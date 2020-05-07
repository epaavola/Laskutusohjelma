package fi.metropolia.LaskutusApplication.dto;

public class InvoiceDTO {	//DataTransferObject

	private String invoiceNumber;
	private Double netAmount;
	private Double grossAmount;
	private Double vatAmount;
	private long id;

	public InvoiceDTO(String invoiceNumber, Double netAmount, Double grossAmount, Double vatAmount) {
		this.invoiceNumber = invoiceNumber;
		this.netAmount = netAmount;
		this.grossAmount = grossAmount;
		this.vatAmount = vatAmount;

	}

	public InvoiceDTO() {

	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String invoiceNumber() {
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

	public Double getVatAmount() {
		return vatAmount;
	}

	public void setVatAmount(Double vatAmount) {
		this.vatAmount = vatAmount;
	}

	public Double getGrossAmount() {
		return grossAmount;
	}

	public void setGrossAmount(Double grossAmount) {
		this.grossAmount = grossAmount;
	}

}
