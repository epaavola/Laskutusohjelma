package fi.metropolia.LaskutusApplication.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import fi.metropolia.LaskutusApplication.model.Product;


public interface ProductDao extends CrudRepository<Product, Long> {
//Searches product by its name
	@Query("select p from Product p where p.name like %?1%")
	public List<Product> findByName(String search);
	
	public List<Product> findByNameLikeIgnoreCase(String search);
}
