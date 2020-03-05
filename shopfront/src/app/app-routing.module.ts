import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { ProductsComponent } from './component/products/products.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { CustomerPageComponent } from './component/customer-page/customer-page.component';
import { OrdersComponent } from './component/orders/orders.component';
import { OrderConfirmationComponent } from './component/order-confirmation/order-confirmation.component';
import { SignupComponent } from './component/signup/signup.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'logout',component:LogoutComponent},
  {path:'products',component:ProductsComponent},
  {path:'add-products',component:AddProductComponent},
  {path:'customer-page',component:CustomerPageComponent},
  {path:'orders',component:OrdersComponent},
  {path:'order-confirm',component:OrderConfirmationComponent},
  {path:'**',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
