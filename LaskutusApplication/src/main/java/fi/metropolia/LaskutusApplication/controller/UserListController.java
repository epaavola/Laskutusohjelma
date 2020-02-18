package fi.metropolia.LaskutusApplication.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import fi.metropolia.LaskutusApplication.UserListRepository;
import fi.metropolia.LaskutusApplication.model.User;

import java.util.ArrayList;
import java.util.List;

@RestController
public class UserListController {

    @Autowired
    UserListRepository userListRepo;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/users")
    public List<User> getAllUsers(){
        List<User> users = new ArrayList<>();
        userListRepo.findAll().forEach(users :: add);
        return users;
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/users{id}")
    public List<User> getUser(@PathVariable int id){
        List<User> users = new ArrayList<>();
        userListRepo.findById(id);
        return users;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/users")
    public User addItem(@RequestBody User user){
        userListRepo.save(user);
        return user;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(path = "/users/{id}")
    public void deleteItem(@PathVariable int id){
            userListRepo.deleteById(id);
    }
}