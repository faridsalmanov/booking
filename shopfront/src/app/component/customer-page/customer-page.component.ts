import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/model';
import { API_URL } from 'src/app/constans';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit {
  
products:Product[]=[];
download: string;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.download=API_URL+'/filedownload/files/';
    this.productService.findAll().subscribe(
resp=>{
  this.products=resp;
}

    );
  }

}
