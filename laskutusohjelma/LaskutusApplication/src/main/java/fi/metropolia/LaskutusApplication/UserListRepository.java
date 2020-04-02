package fi.metropolia.LaskutusApplication;

import org.springframework.data.jpa.repository.JpaRepository;
import fi.metropolia.LaskutusApplication.model.*;
public interface UserListRepository extends JpaRepository<User, Integer> {


}