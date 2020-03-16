import { Injectable } from '@angular/core';
import { OrderProduct } from '../model/model';
import { EventEmitter } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
productCountChanged:EventEmitter<number>=new EventEmitter();


orderProducts:OrderProduct[]=[];
  constructor() { }


productCountChangedMethod(){
  let productCount:number=0;
for (let index = 0; index < this.orderProducts.length;index++){
  const e = this.orderProducts[index];
  productCount+=e.count;
}
this.productCountChanged.emit(productCount);
}



}
