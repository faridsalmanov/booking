package com.ferid.shopping.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ferid.shopping.dao.OrderDAO;
import com.ferid.shopping.model.OrderModel;

@RestController
@RequestMapping(path="/orders")
public class OrderController {

	@Autowired
	private OrderDAO orderDAO;
	
	@PostMapping
	public OrderModel add(@RequestBody OrderModel order){
		System.out.print(order);
	 return orderDAO.save(order);
	}
	
}
