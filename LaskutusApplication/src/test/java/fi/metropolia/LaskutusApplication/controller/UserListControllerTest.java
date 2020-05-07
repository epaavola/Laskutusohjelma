package fi.metropolia.LaskutusApplication.controller;

import fi.metropolia.LaskutusApplication.dao.CompanyDao;
import fi.metropolia.LaskutusApplication.dao.UserDao;
import fi.metropolia.LaskutusApplication.model.DAOCompany;
import fi.metropolia.LaskutusApplication.model.DAOUser;
import org.junit.Ignore;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.security.core.Authentication;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class UserListControllerTest {

    private UserListController userListControllerUnderTest;

    @BeforeEach
    void setUp() {
        userListControllerUnderTest = new UserListController();
        userListControllerUnderTest.userListRepo = mock(UserDao.class);
        userListControllerUnderTest.company = mock(CompanyDao.class);
    }

    @Test
    void testGetAllUsers() {
        // Setup

        // Configure UserDao.findAll(...).
        final Iterable<DAOUser> daoUsers = Arrays.asList(new DAOUser("username", "name", "email", "vatID", "address", "city", "bankAccount"));
        when(userListControllerUnderTest.userListRepo.findAll()).thenReturn(daoUsers);

        // Run the test
        final List<DAOUser> result = userListControllerUnderTest.getAllUsers();

        // Verify the results
    }

    @Test
    @Ignore
    void testGetUser() {
        // Setup
        final Authentication authentication = null;

        // Configure UserDao.findByUsername(...).
        final DAOUser daoUser = new DAOUser("username", "name", "email", "vatID", "address", "city", "bankAccount");
        when(userListControllerUnderTest.userListRepo.findByUsername("username")).thenReturn(daoUser);

        // Run the test
        final DAOUser result = userListControllerUnderTest.getUser(authentication);

        // Verify the results
    }

    @Test
    @Ignore
    void testGetAllCompanies() {
        // Setup
        final Authentication authentication = null;

        // Configure UserDao.findByUsername(...).
        final DAOUser daoUser = new DAOUser("username", "name", "email", "vatID", "address", "city", "bankAccount");
        when(userListControllerUnderTest.userListRepo.findByUsername("username")).thenReturn(daoUser);

        // Configure CompanyDao.findAllByUser_Id(...).
        final List<DAOCompany> daoCompanies = Arrays.asList(new DAOCompany("company", "vatID", "name", "address", "city", "email"));
        when(userListControllerUnderTest.company.findAllByUser_Id(0L)).thenReturn(daoCompanies);

        // Run the test
        final List<DAOCompany> result = userListControllerUnderTest.getAllCompanies(authentication);

        // Verify the results
    }

    @Test
    @Ignore
    void testAddCustomer() {
        // Setup
        final DAOCompany comp = new DAOCompany("company", "vatID", "name", "address", "city", "email");
        final Authentication authentication = null;

        // Configure UserDao.findByUsername(...).
        final DAOUser daoUser = new DAOUser("username", "name", "email", "vatID", "address", "city", "bankAccount");
        when(userListControllerUnderTest.userListRepo.findByUsername("username")).thenReturn(daoUser);

        // Configure CompanyDao.save(...).
        final DAOCompany daoCompany = new DAOCompany("company", "vatID", "name", "address", "city", "email");
        when(userListControllerUnderTest.company.save(any(DAOCompany.class))).thenReturn(daoCompany);

        // Run the test
        final DAOCompany result = userListControllerUnderTest.addCustomer(comp, authentication);

        // Verify the results
    }

    @Test
    void testGetById() {
        // Setup

        // Configure UserDao.findById(...).
        final Optional<DAOUser> daoUser = Optional.of(new DAOUser("username", "name", "email", "vatID", "address", "city", "bankAccount"));
        when(userListControllerUnderTest.userListRepo.findById(0L)).thenReturn(daoUser);

        // Run the test
        final Optional<DAOUser> result = userListControllerUnderTest.getById(0L);

        // Verify the results
    }

    @Test
    void testAddUser() {
        // Setup
        final DAOUser user = new DAOUser("username", "name", "email", "vatID", "address", "city", "bankAccount");

        // Configure UserDao.save(...).
        final DAOUser daoUser = new DAOUser("username", "name", "email", "vatID", "address", "city", "bankAccount");
        when(userListControllerUnderTest.userListRepo.save(any(DAOUser.class))).thenReturn(daoUser);

        // Run the test
        final DAOUser result = userListControllerUnderTest.addUser(user);

        // Verify the results
    }

    @Test
    void testDeleteUser() {
        // Setup

        // Run the test
        userListControllerUnderTest.deleteUser(0L);

        // Verify the results
        verify(userListControllerUnderTest.userListRepo).deleteById(0L);
    }

    @Test
    @Ignore
    void testDeleteCustomer() {
        // Setup

        // Configure CompanyDao.findByCompany(...).
        final DAOCompany daoCompany = new DAOCompany("company", "vatID", "name", "address", "city", "email");
        when(userListControllerUnderTest.company.findByCompany("username")).thenReturn(daoCompany);

        // Run the test
        userListControllerUnderTest.deleteCustomer("companyName");

        // Verify the results
        verify(userListControllerUnderTest.company).deleteById(0L);
    }
}
