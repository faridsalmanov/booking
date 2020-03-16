import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product, SearchModel, OrderProduct } from 'src/app/model/model';
import { API_URL } from 'src/app/constans';
import { serialize } from 'v8';
import { BasketService } from 'src/app/service/basket.service';
import { BasketComponent } from '../basket/basket.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit {

  products: Product[] = [];
  download: string;
  begin: number = 0;
  length: number = 10;
  search: string = '';
  productCount: number = 0;
  constructor(private productService: ProductService, private bS: BasketService, private mD: MatDialog) { }

  ngOnInit() {
    this.download = API_URL + '/filedownload/files/';
    let sM: SearchModel = new SearchModel();
    sM.begin = this.begin;
    sM.length = this.length;
    sM.search = this.search;
    this.productService.findPartial(sM).subscribe(
      resp => {
        this.products = resp;
      }

    );
    this.bS.productCountChanged.subscribe(
      resp => {
        this.productCount = resp;
      }

    );
  }
  onScroll() {

    this.begin += 5;
    let sM: SearchModel = new SearchModel();
    sM.begin = this.begin;
    sM.length = this.length;
    sM.search = this.search;
    this.productService.findPartial(sM).subscribe(
      resp => {
        this.products.push(...resp);
      }

    );
  }

  onToBasket(p: Product) {
    let oP: OrderProduct = new OrderProduct();
    oP.product = p;
    oP.count = 1;
    this.bS.orderProducts.push(oP);
    let productCount: number = 0;
    for (let index = 0; index < this.bS.orderProducts.length; index++) {
      const e = this.bS.orderProducts[index];
      productCount += e.count;
    }
    this.bS.productCountChanged.emit(productCount);
  }

  onOpenBasket() {
    this.mD.open(BasketComponent);
  }


}
