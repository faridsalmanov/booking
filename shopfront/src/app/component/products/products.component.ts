import { Component, OnInit } from '@angular/core';
import { AddProductComponent } from '../add-product/add-product.component';
import { API_URL } from 'src/app/constans';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
download:string='';
products:Product[]=[];
  constructor(private matD:MatDialog,private productService:ProductService,private userService:UserService) { }

  ngOnInit(): void {
    this.download=API_URL+'/filedownload/files/';
    this.productService.findByUsername(this.userService.username).subscribe(
resp=>{
  this.products=resp;
}
 

    );
  }
onAddProduct(){
this.matD.open(AddProductComponent);
}
}
