package fi.metropolia.LaskutusApplication.controller;


import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import fi.metropolia.LaskutusApplication.dao.UserDao;
import fi.metropolia.LaskutusApplication.model.DAOUser;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserListController {

    @Autowired
    UserDao userListRepo;
 /*   @Autowired
    CompanyDao company; */

    @GetMapping(path = "/users")
    public List<DAOUser> getAllUsers() {
        List<DAOUser> users = new ArrayList<>();
        userListRepo.findAll().forEach(users::add);
        return users;
    }

    @GetMapping(path = "/user")
    public DAOUser getUser(Authentication authentication) {
        return userListRepo.findByUsername(authentication.getName());
    }
 /*   @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/companies")
    public List<Company> getAllCompanies(){
        List<Company> comp = new ArrayList<>();
        company.findAll().forEach(comp :: add);
        return comp;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/companies")
    public Company addUser(@RequestBody Company comp){
        company.save(comp);
        return comp;
    } */

    @GetMapping("/users/{id}")
    public Optional<DAOUser> getById(@PathVariable long id) {
        return userListRepo.findById(id);

    }


    @PostMapping(path = "/users")
    public DAOUser addUser(@RequestBody DAOUser user) {
        userListRepo.save(user);
        return user;
    }


    @DeleteMapping(path = "/users/{id}")
    public void deleteUser(@PathVariable long id) {
        userListRepo.deleteById(id);
    }
} 