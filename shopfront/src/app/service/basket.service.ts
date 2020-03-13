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
}
