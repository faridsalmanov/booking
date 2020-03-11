import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/model';
import { UploadService } from 'src/app/service/upload.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
product:Product=new Product();
  constructor(private uploadService:UploadService,private productService:ProductService) { }

  ngOnInit(): void {
  }
onSaveProduct(){
 // console.log(this.product);
  this.uploadService.upload(this.image).subscribe(
resp=>{
  this.product.image=resp.image;
 this.productService.save(this.product).subscribe(
resp=>{
  alert('ugurlu qeydiyyat');
},error=>{
  console.log(error);
}

 );
},error=>{
  console.log(error);
}

  );
}
image:File=null;
onImageSelected(event){
  this.image=event.target.files[0];

}
}
