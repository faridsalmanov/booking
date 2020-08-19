package com.ferid.shopping.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ferid.shopping.model.OrderModel;
import com.ferid.shopping.model.Product;




public interface OrderDAO extends JpaRepository<OrderModel, Integer>{
	public List<OrderModel> findAllByUsername(String username);
}
