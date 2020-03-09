import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
product:Product=new Product();
  constructor() { }

  ngOnInit(): void {
  }
onSaveProduct(){
  console.log(this.product);
}
}
