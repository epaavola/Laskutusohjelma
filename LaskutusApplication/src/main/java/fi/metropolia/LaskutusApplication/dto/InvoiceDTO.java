package fi.metropolia.LaskutusApplication.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;

import javax.validation.constraints.NotBlank;
import java.time.LocalDate;

public class InvoiceDTO {

	private Long id;

	@NotBlank
	private String invoiceNumber;

	@NotBlank
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy", timezone = "Europe/Warsaw")
	@JsonSerialize(using = LocalDateSerializer.class)
	private LocalDate createDate;

	@NotBlank
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy", timezone = "Europe/Warsaw")
	@JsonSerialize(using = LocalDateSerializer.class)
	private LocalDate saleDate;

	@NotBlank
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy", timezone = "Europe/Warsaw")
	@JsonSerialize(using = LocalDateSerializer.class)
	private LocalDate paymentDate;

	@NotBlank
	private Double netAmount;

	@NotBlank
	private Double grossAmount;

	@NotBlank
	private Double vatAmount;

}
