 package fi.metropolia.LaskutusApplication.controller;


 import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import fi.metropolia.LaskutusApplication.dao.UserDao;
import fi.metropolia.LaskutusApplication.model.DAOUser;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class UserListController {

    @Autowired
    UserDao userListRepo;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/users")
    public List<DAOUser> getAllUsers(){
        List<DAOUser> users = new ArrayList<>();
        userListRepo.findAll().forEach(users :: add);
        return users;
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/users/{id}") 
    public Optional<DAOUser> getById(@PathVariable long id) {
        return userListRepo.findById(id) ;
               
    }
    


    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/users")
    public DAOUser addUser(@RequestBody DAOUser user){
        userListRepo.save(user);
        return user;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(path = "/users/{id}")
    public void deleteUser(@PathVariable long id){
            userListRepo.deleteById(id);
    }
} 