import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageBean } from '../model/model';
import { API_URL } from '../constans';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http:HttpClient) { }
  upload(file:File){
  let fd:FormData= new FormData();
  fd.append('file',file)
    return this.http.post<ImageBean>(`${API_URL}/fileupload`,fd);
  }
}
