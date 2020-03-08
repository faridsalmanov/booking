import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/model';
import { API_URL } from '../constans';

@Injectable({
  providedIn: 'root'
})
export class UserService {
username:string='';
  constructor(private httpClient:HttpClient) { }

createAccount(user:User){
  return this.httpClient.post(`${API_URL}/users`,user);
}
checkUser(user:User){
  return this.httpClient.post<boolean>(`${API_URL}/users/check`,user);
}

}
