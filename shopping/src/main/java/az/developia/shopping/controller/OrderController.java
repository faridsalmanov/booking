package az.developia.shopping.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import az.developia.shopping.dao.OrderDAO;
import az.developia.shopping.model.OrderModel;
import az.developia.shopping.model.Product;

@RestController
@RequestMapping(path="/orders")
@CrossOrigin(origins="*")
public class OrderController {

	@Autowired
	private OrderDAO orderDAO;
	
	@PostMapping
	public OrderModel add(@RequestBody OrderModel order){
		System.out.print(order);
	 return orderDAO.save(order);
	}
	
	@GetMapping(path="/find-all/{username}")
	public List<OrderModel> findAllByUsername(@PathVariable String username){
	return orderDAO.findAllByUsername(username);
	}
}
