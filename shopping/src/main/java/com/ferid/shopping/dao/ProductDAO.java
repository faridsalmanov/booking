package com.ferid.shopping.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ferid.shopping.model.Product;

public interface ProductDAO extends JpaRepository<Product, Integer> {
public List<Product> findAllByUsername(String username);
}
