package fi.metropolia.LaskutusApplication.dao;



 import fi.metropolia.LaskutusApplication.model.DAOCompany;
 import org.springframework.data.repository.CrudRepository;


import org.springframework.stereotype.Repository;

import fi.metropolia.LaskutusApplication.model.Company;



@Repository
public interface CompanyDao extends CrudRepository<DAOCompany, Long> {
	
	DAOCompany findByCompany(String username);

}