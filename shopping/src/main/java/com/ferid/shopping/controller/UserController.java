package com.ferid.shopping.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ferid.shopping.dao.UserDAO;
import com.ferid.shopping.model.User;

@RestController
@RequestMapping(path="/users")
@CrossOrigin(origins="*")
public class UserController {
  
	@Autowired
	private UserDAO userDAO;
	
	@PostMapping(path="/validate")
	public Boolean validate(@RequestBody User user) {
		 
		return userDAO.validate(user);
	}
@PostMapping
	public void create(@RequestBody User user){
	
	userDAO.create(user);
	
  }

@PostMapping(path="/check")
public Boolean check(@RequestBody User user) {

return userDAO.check(user);

}




}
