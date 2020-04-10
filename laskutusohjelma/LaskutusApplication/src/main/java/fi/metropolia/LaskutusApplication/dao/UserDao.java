package fi.metropolia.LaskutusApplication.dao;


import org.springframework.data.repository.CrudRepository;


import org.springframework.stereotype.Repository;

import fi.metropolia.LaskutusApplication.model.DAOUser;



@Repository
public interface UserDao extends CrudRepository<DAOUser, Long> {
	
	DAOUser findByUsername(String username);
	
}