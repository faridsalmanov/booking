import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/model';
import { API_URL } from '../constans';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  save(p:Product){
    return this.http.post(`${API_URL}/products`,p)
  }
  findByUsername(username:string){
    return this.http.get<Product[]>(`${API_URL}/products/find-all/${username}`);
  }

  findAll(){
    return this.http.get<Product[]>(`${API_URL}/products/find-all/${""}`);
  }



}
