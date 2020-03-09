import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/model';
import { MatDialog } from 'angular/material';
import { SignupComponent } from '../signup/signup.component';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user:User=new User();
  constructor(private matDialog:MatDialog,private userS:UserService,private router:Router) { }

  ngOnInit(): void {
  }
onCreateAccount(){
this.matDialog.open(SignupComponent);
}
onLogin(){
  this.userS.validate(this.user).subscribe(
reps=>{
this.userS.token='Basic'+window.btoa(this.user.username+':'+this.user.password);
this.router.navigate(['products']);
},error=>{
  this.userS.token='';
  alert('login error, invalid credentials');
}


  );
}
}
