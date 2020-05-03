package fi.metropolia.LaskutusApplication.controller;

import java.util.ArrayList;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;


import fi.metropolia.LaskutusApplication.dao.CompanyDao;
import fi.metropolia.LaskutusApplication.dao.InvoiceDao;
import fi.metropolia.LaskutusApplication.dao.UserDao;
import fi.metropolia.LaskutusApplication.model.DAOCompany;
import fi.metropolia.LaskutusApplication.model.DAOInvoice;
import fi.metropolia.LaskutusApplication.model.DAOUser;
import fi.metropolia.LaskutusApplication.*;
import fi.metropolia.LaskutusApplication.model.Invoice;
import fi.metropolia.LaskutusApplication.model.InvoiceLine;
import fi.metropolia.LaskutusApplication.model.Product;
@CrossOrigin
@RestController
public class InvoiceController {
	@Autowired
	CompanyDao clientService;
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
	//Deletes invoice by it's number
	 @DeleteMapping(path = "/invoice/{invoiceNumber}")
	    public void deleteInvoice(@PathVariable String invoiceNumber) {
	        DAOInvoice inv = invoiceRepo.findByInvoiceNumber(invoiceNumber);
	        invoiceRepo.deleteById(inv.getInvoice_id());
	    
	}
	 @GetMapping("/form/{company_Id}")
		public String create(@PathVariable(value="company_Id") String username, Map<String, Object> model, RedirectAttributes flash) {
			DAOCompany client = clientService.findByCompany(username);
			if(client == null) {
				flash.addFlashAttribute("error", "User doesn't exists");
				return "redirect:/clients";
			}
			Invoice invoice = new Invoice();
			invoice.setCompany(client);
			model.put("invoice", invoice);
			model.put("title", "Create invoice");

			return "/invoices/form";
		}
	 	//Searches company products
	 @GetMapping(value="/product/{search}", produces={"application/json"})
		public @ResponseBody Optional<DAOCompany> loadProducts(@PathVariable Long search){
			return clientService.findById(search);
		}

}
