
import {  CartComponent}from "./cart/cart.component";
import { RouterModule, Routes} from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ErrorComponent} from "./error/error.component";
import {  MenuComponent} from './menu/menu.component';
import { ItemsComponent } from "./items/items.component";
import { HomeComponent } from "./home/home.component"
import { from } from 'rxjs';

const arr:Routes=[
  {path : 'home',component:HomeComponent},
  {path : 'cart',component:CartComponent},
  {path : 'login',component:LoginComponent },
  {path : 'menu',component:MenuComponent},
  {path : 'items',component:ItemsComponent},
  {path :'error', component: ErrorComponent},
  {path : "**" , redirectTo:'/error'},

]
export const arrRouting = RouterModule.forRoot(arr);

