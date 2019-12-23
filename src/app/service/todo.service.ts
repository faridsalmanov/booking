import { Injectable } from '@angular/core';
import { Task } from '../model/task';
import { HttpClient } '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }
   todos:Task[]=[];

   public addTodo(todo:Task){
     this.todos.push(todo);
   }
   public getAllTodos():Task[]{
  //   return this.todos.slice();
  return this.http.get('http://localhost:8080/tasks',todo');
   }

   addTodoToBackend(todo:Task){
 this.http.post('http://localhost:8080/tasks',todo).subscribe();
 
   }
}

