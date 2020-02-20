package com.ferid.shopping.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ferid.shopping.model.Product;

public interface ProductDAO extends JpaRepository<Product, Integer> {
public List<Product> findAllByUsername(String username);

@Query(value="select * from product where name like %?3% limit ?1,?2",nativeQuery=true)
public List<Product> findPartial(Integer begin,Integer length,String search);


}
