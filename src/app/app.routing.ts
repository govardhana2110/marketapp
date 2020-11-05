
import {  CartComponent}from "./cart/cart.component";
import { RouterModule, Routes} from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ErrorComponent} from "./error/error.component";
import {  MenuComponent} from './menu/menu.component';
import { ItemsComponent } from "./items/items.component";
import { HomeComponent } from "./home/home.component";
import { AddempComponent } from './employee/addemp/addemp.component';
import { EditdetailsComponent } from './employee/editdetails/editdetails.component';
import { EditaddressComponent } from './employee/editaddress/editaddress.component';
import { EditexperienceComponent } from './employee/editexperience/editexperience.component';
import { EditqualificationComponent } from './employee/editqualification/editqualification.component';
import { EditskillComponent } from './employee/editskill/editskill.component';
import { EmployeeComponent } from './employee/employee.component';
import { from } from 'rxjs';

const arr:Routes=[
  {path : 'employee',component:EmployeeComponent},
  {path : 'home',component:HomeComponent},
  {path : 'cart',component:CartComponent},
  {path : 'login',component:LoginComponent },
  {path : 'menu',component:MenuComponent},
  {path : 'items',component:ItemsComponent},
  {path : 'addemp',component:AddempComponent},
  {path : 'editdetails',component:EditdetailsComponent},
  {path : 'editaddress',component:EditaddressComponent},
  {path : 'editexperience',component:EditexperienceComponent},
  {path : 'editqualification',component:EditqualificationComponent},
  {path : 'editskill',component:EditskillComponent},
  {path :'error', component: ErrorComponent},
  {path : "**" , redirectTo:'/error'},

]
export const arrRouting = RouterModule.forRoot(arr);

