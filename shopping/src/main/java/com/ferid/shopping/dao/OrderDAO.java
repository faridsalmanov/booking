package com.ferid.shopping.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ferid.shopping.model.OrderModel;

public interface OrderDAO extends JpaRepository<OrderModel, Integer>{

}
