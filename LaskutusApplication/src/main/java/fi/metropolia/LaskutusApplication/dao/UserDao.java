package fi.metropolia.LaskutusApplication.dao;


import org.springframework.data.repository.CrudRepository;



import org.springframework.stereotype.Repository;

import fi.metropolia.LaskutusApplication.model.DAOUser;



@Repository
public interface UserDao extends CrudRepository<DAOUser, Long> {
	//Finds user by its username
	DAOUser findByUsername(String username);
	
}