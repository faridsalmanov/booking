import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/service/basket.service';
import { API_URL } from 'src/app/constans';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  download: string = '';
  totalPrice: number = 0;
  constructor(public bS: BasketService) { }

  ngOnInit() {
    this.download = API_URL + '/filedownload/files/';
    this.findTotalPrice();
  }
  onDeleteProduct(counter: number) {
    this.bS.orderProducts.splice(counter, 1);
    this.bS.productCountChangedMethod();
    this.findTotalPrice();
  }
onProductCountChanged(){
this.bS.productCountChangedMethod();
this.findTotalPrice();
}
findTotalPrice(){
  this.totalPrice=0;
  for (let index = 0; index < this.bS.orderProducts.length; index++) {
    const e = this.bS.orderProducts[index];
    this.totalPrice+=e.count*e.product.price;
  }
}
onOrderConfirm(){
  
}
}
