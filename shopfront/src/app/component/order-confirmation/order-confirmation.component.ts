import { Component, OnInit } from '@angular/core';
import { OrderModel } from 'src/app/model/model';
import { BasketService } from 'src/app/service/basket.service';
import { OrderService } from 'src/app/service/order.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {
order:OrderModel=new OrderModel();
  constructor(private bS:BasketService,private orderS:OrderService,private uS:UserService) { }

  ngOnInit(): void {
  }
onConfirmOrder(){
  this.order.orderProducts=this.bS.orderProducts;
  this.order.username=this.bS.orderProducts[0].product.username;

  let totalPrice=0;
  for (let index = 0; index < this.bS.orderProducts.length; index++) {
    const e = this.bS.orderProducts[index];
    totalPrice+=e.count*e.product.price;
  }
this.order.price=totalPrice;


this.orderS.saveOrder(this.order).subscribe(
resp=>{
  alert('Uğurlu Sifariş');
this.bS.orderProducts=[];
}

);
}
}
