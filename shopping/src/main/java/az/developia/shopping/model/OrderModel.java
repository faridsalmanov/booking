 package az.developia.shopping.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="orders")
@Getter
@Setter
public class OrderModel {

	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	private String note;
	private Double price;
	private String userId;private String username;
	
	@ManyToOne(cascade={CascadeType.PERSIST})
@JsonIgnoreProperties("orders")	
	
	private Customer customer;
	
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="order_id")
	private List<OrderProduct> orderProducts;
 
	
}
