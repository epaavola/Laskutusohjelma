package fi.metropolia.LaskutusApplication.dao;



 import fi.metropolia.LaskutusApplication.model.DAOCompany;
 import org.springframework.data.repository.CrudRepository;


import org.springframework.stereotype.Repository;

import fi.metropolia.LaskutusApplication.model.Company;

 import java.util.List;


@Repository
public interface CompanyDao extends CrudRepository<DAOCompany, Long> {
	
	DAOCompany findByCompany(String username);
    List<DAOCompany> findAllByUser_Id(Long id);
}