import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product, SearchModel } from 'src/app/model/model';
import { API_URL } from 'src/app/constans';
import { serialize } from 'v8';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit {
  
products:Product[]=[];
download: string;
begin:number=0;
length:number=10;
search:string='';
  constructor(private productService:ProductService) { }

  ngOnInit(){
    this.download=API_URL+'/filedownload/files/';
    let sM:SearchModel=new SearchModel();
    sM.begin=this.begin;
    sM.length=this.length;
     sM.search=this.search;
    this.productService.findPartial(sM).subscribe(
resp=>{
  this.products=resp;
}

    );
  }
onScroll(){

  this.begin+=5;
  let sM:SearchModel=new SearchModel();
  sM.begin=this.begin;
  sM.length=this.length;
   sM.search=this.search;
  this.productService.findPartial(sM).subscribe(
    resp=>{
      this.products.push(...resp);
    }
    
        );
}
}
