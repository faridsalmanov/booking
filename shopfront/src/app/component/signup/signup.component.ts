import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
user:User=new User();
  constructor() { }

  ngOnInit(): void {
  }

}
