package fi.metropolia.LaskutusApplication.dao;


import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;



import org.springframework.stereotype.Repository;

import fi.metropolia.LaskutusApplication.model.DAOInvoice;



@Repository
public interface InvoiceDao extends CrudRepository<DAOInvoice, Long> {
	
//finds invoice by it's number or all by userID
	DAOInvoice findByInvoiceNumber(String invoiceNumber);
    List<DAOInvoice> findAllByUser_Id(Long id);	
}