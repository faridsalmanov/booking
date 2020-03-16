import { Component, OnInit } from '@angular/core';
import { OrderModel } from 'src/app/model/model';
import { BasketService } from 'src/app/service/basket.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {
order:OrderModel=new OrderModel();
  constructor(private bS:BasketService,private orderS:OrderService) { }

  ngOnInit(): void {
  }
onConfirmOrder(){
  this.order.orderProducts=this.bS.orderProducts;
this.orderS.saveOrder(this.order).subscribe(
resp=>{
  alert('Uğurlu Sifariş');

}

);
}
}
