
package fi.metropolia.LaskutusApplication.dto;

import static org.assertj.core.api.Assertions.assertThat;


import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.test.context.junit.jupiter.SpringExtension;


import fi.metropolia.LaskutusApplication.dao.CompanyDao;
import fi.metropolia.LaskutusApplication.dao.UserDao;
import fi.metropolia.LaskutusApplication.model.DAOCompany;
import fi.metropolia.LaskutusApplication.model.DAOUser;

@ExtendWith(SpringExtension.class)
public class UserDTOTest {
	@TestConfiguration
	static class UserNameConfigurationTest {

	}

	@MockBean
	private UserDao userRepository;
//setup username
	@BeforeEach
	public void setUp() {
		DAOUser alex = new DAOUser();
		alex.setUsername("alex");

		Mockito.when(userRepository.findByUsername(alex.getUsername())).thenReturn(alex);
	}
//test if name is found
	@Test
	public void whenValidName_thenUserShouldBeFound() {
		String name = "alex";
		DAOUser found = userRepository.findByUsername(name);

		assertThat(found.getUsername()).isEqualTo(name);
	}
}
