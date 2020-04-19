package fi.metropolia.LaskutusApplication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import fi.metropolia.LaskutusApplication.model.*;
public interface UserListRepository extends JpaRepository<User, Integer> {


}