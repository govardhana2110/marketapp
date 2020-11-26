import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { LoadingService } from "../loading.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {



  constructor( private _regData:LoadingService) { }

  ngOnInit(): void {
  }
onLogInClick(){
this._regData.login("admin","1234");
console.log(localStorage.getItem('user_name'));
}
onLogOutClick(){
this._regData.logout();
}
get isLoggedIn():boolean{
  return this._regData.isLoggedIn;
    }
}
