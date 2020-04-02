import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
import { OrderModel } from 'src/app/model/model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders:OrderModel[]=[];

  constructor(private oS:OrderService,private uS:UserService ) { }

  ngOnInit(){
this.oS.findByUsername(this.uS.username).subscribe(
resp=>{
this.orders=resp;
},error=>{
  alert('error');
}
);
  }

}
