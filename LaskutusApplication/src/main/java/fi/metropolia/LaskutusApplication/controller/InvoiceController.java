package fi.metropolia.LaskutusApplication.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import fi.metropolia.LaskutusApplication.dao.InvoiceDao;
import fi.metropolia.LaskutusApplication.dao.UserDao;
import fi.metropolia.LaskutusApplication.model.DAOInvoice;
import fi.metropolia.LaskutusApplication.model.DAOUser;

@CrossOrigin
@RestController
public class InvoiceController {

	@Autowired
	InvoiceDao invoiceRepo;
	@Autowired
	UserDao userListRepo;

    //Gets all invoices
	@GetMapping(value = "/invoices")
	List<DAOInvoice> getAllInvoices(Authentication authentication) {
        DAOUser user = userListRepo.findByUsername(authentication.getName());
        return new ArrayList<>(invoiceRepo.findAllByUser_Id(user.getId()));

	}
	//Adds invoice for the right user
    @PostMapping(path = "/invoice")
    public DAOInvoice addInvoice(@RequestBody DAOInvoice inv, Authentication authentication){
        inv.setUser(userListRepo.findByUsername(authentication.getName()));
        invoiceRepo.save(inv);
        return inv;
    }
	//Delets invoice by it's number
	 @DeleteMapping(path = "/invoice/{invoiceNumber}")
	    public void deleteInvoice(@PathVariable String invoiceNumber) {
	        DAOInvoice inv = invoiceRepo.findByInvoiceNumber(invoiceNumber);
	        invoiceRepo.deleteById(inv.getInvoice_id());
	    
	}

}
