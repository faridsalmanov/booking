import { Injectable } from '@angular/core';
import { OrderProduct } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
orderProducts:OrderProduct[]=[];
  constructor() { }
}
