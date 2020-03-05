import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
isUserLoggedIn(){

return this.userService.username!='';

}
}
