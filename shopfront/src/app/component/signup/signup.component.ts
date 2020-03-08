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
      this.userService.checkUser(this.user).subscribe(
        resp=>{
     if(resp){
       alert('bu istifadeci adi artiq var');
     }else{
      this.userService.createAccount(this.user).subscribe(
        resp=>{
          alert('success operation');
        },error=>{
           alert('error operation');
  
        }
    );

     }
        },error=>{
           alert('user check error');
  
        }

        
      );
      this.userService.createAccount(this.user).subscribe(
      resp=>{
        alert('success operation');
      },error=>{
         alert('error operation');

      }
      
      );
    }
  }

