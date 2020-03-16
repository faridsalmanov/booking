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
import { RouteGuardService } from './service/route-guard.service';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent,canActivate:[RouteGuardService]},
  {path:'logout',component:LogoutComponent,canActivate:[RouteGuardService]},
  {path:'products',component:ProductsComponent,canActivate:[RouteGuardService]},
  {path:'add-products',component:AddProductComponent,canActivate:[RouteGuardService]},
  {path:'customer-page',component:CustomerPageComponent},
  {path:'orders',component:OrdersComponent,canActivate:[RouteGuardService]},
  {path:'order-confirm',component:OrderConfirmationComponent,},
  {path:'**',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
