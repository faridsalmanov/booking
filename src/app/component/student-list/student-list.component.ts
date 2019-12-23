import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
name:string='';
students:string[]=[];
saveButtonText:string='Add';
saveMode:string='add';
  constructor() { }
counter:number=-1;
searchText:string='';

  ngOnInit() {
  }
onSaveStudent(){
  if(this.saveMode==='add'){
    this.students.push(this.name);
  }else{
    this.students[this.counter]=this.name;
  }
this.saveMode='add';
this.saveButtonText='Add';
this.studentsCopy=this.students.slice();

}

onStudentDelete(counter:number){
this.students.splice(counter,1);

}

onStudentUpdate(counter:number){
this.name=this.students[counter];
this.saveButtonText='update';
this.saveMode='update';
this.counter=counter;
}
studentsCopy:string[]=[];

onSearch(){

this.studentsCopy=[];

 for (let index = 0; index < this.students.length; index++) {
   const student = this.students[index];
   if(student.includes(this.searchText)) {
     this.studentsCopy.push(student);
   }

 }
}

}
