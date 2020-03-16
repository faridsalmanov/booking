import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatDialogModule } from '@angular/material/dialog';
import { FormsModule} from '@angular/forms';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { SignupComponent } from './component/signup/signup.component';
import { ProductsComponent } from './component/products/products.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { CustomerPageComponent } from './component/customer-page/customer-page.component';
import { OrdersComponent } from './component/orders/orders.component';
import { BasketComponent } from './component/basket/basket.component';
import { OrderConfirmationComponent } from './component/order-confirmation/order-confirmation.component';
import { MenuComponent } from './component/menu/menu.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HttpInterceptorService } from './service/http-interceptor.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    SignupComponent,
    ProductsComponent,
    AddProductComponent,
    CustomerPageComponent,
    OrdersComponent,
    BasketComponent,
    OrderConfirmationComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
    MatDialogModule, 
   
    BrowserAnimationsModule,
    FormsModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType:'succes',cancelButtonType:'danger',
      confirmText:'Tesdiq',cancelText:'Legv'
    }),
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [
{
  provide:HTTP_INTERCEPTORS,useClass:HttpInterceptorService,multi:true
}

  ],
  bootstrap: [AppComponent],
  entryComponents:[ SignupComponent,AddProductComponent,BasketComponent]
})
export class AppModule { }
