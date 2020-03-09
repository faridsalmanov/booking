import { Component, OnInit } from '@angular/core';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private matD:MatDialog) { }

  ngOnInit(): void {
  }
onAddProduct(){
this.matD.open(AddProductComponent);
}
}
