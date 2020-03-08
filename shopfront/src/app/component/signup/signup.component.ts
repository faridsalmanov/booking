import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
user:User=new User();
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
    onSignup(){
      this.userService.createAccount(this.user).subscribe(

      
      resp=>{
        alert('success operation');
      },error=>{
         alert('error operation');

      }
      
      );
    }
  }
  
