export class Task{
public id:number;
public task:string;
public day:number;
public register:Date;
public category:Category;

constructor(){
    this.category=new Category();
}
}


export class Category{
public id:number;
public name:string;

}