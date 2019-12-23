import { Component, OnInit } from '@angular/core';
import { Task, Category } from '../../model/task';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
todo:Task=new Task();
categories:Category[]=[];
  constructor(private todoService:TodoService) { }

  ngOnInit() {
    let c1:Category=new Category();
    c1.id=1;
    c1.name="Learning";
    let c2:Category=new Category();
    c2.id=2;
    c2.name="Travel";
    this.categories.push(c1,c2);
    this.todo.category.id=1;
  }
onSaveTodo(){
  console.log(this.todo);
  let todo:Task= new Task();
  todo.task=this.todo.task;
  todo.day=this.todo.day;
  todo.id=(this.todoService.todos.length+1);
this.todoService.todos.push(todo);
}
}
