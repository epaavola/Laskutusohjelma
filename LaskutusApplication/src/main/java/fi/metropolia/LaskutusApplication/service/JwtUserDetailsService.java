package fi.metropolia.LaskutusApplication.service;
import java.util.ArrayList;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import fi.metropolia.LaskutusApplication.dao.UserDao;
import fi.metropolia.LaskutusApplication.dto.UserDTO;
import fi.metropolia.LaskutusApplication.model.DAOUser;

@Service
public class JwtUserDetailsService implements UserDetailsService {		//Gets user details from authenticated user
	
	@Autowired
	private UserDao userDao;

	@Autowired(required = false)
	private PasswordEncoder bcryptEncoder;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		DAOUser user = userDao.findByUsername(username);
		if (user == null) {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
		return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
				new ArrayList<>());
	}
	
	public DAOUser save(UserDTO user) {
		DAOUser newUser = new DAOUser();
		newUser.setUsername(user.getUsername());
		newUser.setName(user.getName());
		newUser.setEmail(user.getEmail());
		newUser.setCity(user.getCity());
		newUser.setAddress(user.getAddress());
		newUser.setVatID(user.getVatID());
		newUser.setBankAccount(user.getBankAccount());
		newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
		return userDao.save(newUser);
	}
}