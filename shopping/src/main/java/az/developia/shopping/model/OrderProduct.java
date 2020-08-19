package az.developia.shopping.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="order_product")
 
public class OrderProduct {

	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id; 
	
	@OneToOne
	private Product product;
	private Integer count;
	@Override
	public String toString() {
		return "OrderProduct [id=" + id + ", product=" + product + ", count=" + count + "]";
	}
		
	}
	

