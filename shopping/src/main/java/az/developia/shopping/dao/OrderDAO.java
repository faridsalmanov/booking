package az.developia.shopping.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import az.developia.shopping.model.OrderModel;
import az.developia.shopping.model.Product;




public interface OrderDAO extends JpaRepository<OrderModel, Integer>{
	public List<OrderModel> findAllByUsername(String username);
}
