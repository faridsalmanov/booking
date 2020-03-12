import { CustomerPageComponent } from '../component/customer-page/customer-page.component';


export class Customer{
    public id:number;
    public name:string;
    public adress:string;
    public phone:string;
    public orders:OrderModel[];
}

export class User{
    public username:string;
    public password:string;
}


export class Product{
    public id:number;
    public name:string;
    public price:number;
    public image:string;
    public username:string;
}

export class OrderModel{
    public id:number;
    public totalprice:number;
    public note:string;
    public orderProducts:OrderProduct[];
     public customer:Customer;

}

export class OrderProduct {
    public id:number;
    public product:Product;
    public count:number;
}
 export class ImageBean{
     public id:number;
     public image:string;
 }