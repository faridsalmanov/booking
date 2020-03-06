import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/model';
import {MatDialog} from 'angular/material';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user:User=new User();
  constructor(private matDialog:MatDialog) { }

  ngOnInit(): void {
  }
onCreateAccount(){
this.matDialog.open(SignupComponent);
}
}
