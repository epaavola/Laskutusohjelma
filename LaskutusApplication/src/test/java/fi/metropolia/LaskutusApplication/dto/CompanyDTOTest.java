package fi.metropolia.LaskutusApplication.dto;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.test.context.junit4.SpringRunner;

import fi.metropolia.LaskutusApplication.dao.CompanyDao;
import fi.metropolia.LaskutusApplication.model.DAOCompany;

@RunWith(SpringRunner.class)
class CompanyDTOTest {
	@TestConfiguration
	static class CompanyServiceImplTestContextConfiguration {

	}


	@MockBean
	private CompanyDao companyRepository;

	@Before
	public void setUp() {
		DAOCompany alex = new DAOCompany();
		alex.setName("alex");

		Mockito.when(companyRepository.findByCompany(alex.getName())).thenReturn(alex);
	}

	@Test
	public void whenValidName_thenCompanyShouldBeFound() {
		String name = "alex";
		DAOCompany found = companyRepository.findByCompany(name);

		assertThat(found.getName()).isEqualTo(name);
	}
}