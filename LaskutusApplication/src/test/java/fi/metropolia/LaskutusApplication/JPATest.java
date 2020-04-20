package fi.metropolia.LaskutusApplication;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertThat;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.test.context.junit4.SpringRunner;

import fi.metropolia.LaskutusApplication.dao.UserDao;
import fi.metropolia.LaskutusApplication.dto.UserDTO;
import fi.metropolia.LaskutusApplication.model.DAOUser;
import fi.metropolia.LaskutusApplication.model.User;
import fi.metropolia.LaskutusApplication.repository.UserListRepository;
import fi.metropolia.LaskutusApplication.service.JwtUserDetailsService;

@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)

public class JPATest {

	@TestConfiguration
	static class UserServiceImplTestContextConfiguration {

		@Bean
		public JwtUserDetailsService employeeService() {
			return new JwtUserDetailsService();
		}
	}

	@Autowired
	private JwtUserDetailsService userService;

	@MockBean
	private UserDao userRepository;
//Set name and password
	@Before
	public void setUp() {
		DAOUser alex = new DAOUser();
		alex.setUsername("alex");
		alex.setPassword("alex");

		Mockito.when(userRepository.findByUsername(alex.getUsername())).thenReturn(alex);
	}
	//Get username from UserDetails, passes if the correct one founds

	@Test
	public void whenValidName_thenUserShouldBeFound() {
		String name = "alex";
		UserDetails found = userService.loadUserByUsername(name);

		assertThat(found.getUsername()).isEqualTo(name);
	}

}
