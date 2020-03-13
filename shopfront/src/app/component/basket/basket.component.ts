import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/service/basket.service';
import { API_URL } from 'src/app/constans';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
download:string='';
  constructor(public bS:BasketService) { }

  ngOnInit() {
 this.download=API_URL+'/filedownload/files/';
  }

}
