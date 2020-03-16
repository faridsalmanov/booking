import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../constans';
import { OrderModel } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

saveOrder(order:OrderModel){
  return this.http.post(`${API_URL}/orders`,order);

}




}
