
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
import { UsergaurdService } from "./usergaurd.service";
import { useAnimation } from '@angular/animations';
import { UserresolverService } from './employee/userresolver.service';
import { EmpresolverService } from './employee/empresolver.service';

const arr:Routes=[
  {path : '',component:EmployeeComponent},
  {path : 'employee',component:EmployeeComponent,resolve:{data:UserresolverService},},
  {path : 'home',component:HomeComponent},
  {path : 'cart',canActivate:[UsergaurdService], component:CartComponent},
  {path : 'login',component:LoginComponent },
  {path : 'menu',component:MenuComponent},
  {path : 'items',component:ItemsComponent},
  {path : 'addemp',component:AddempComponent},
  {path : 'Task',
  canActivate:[UsergaurdService],
  canLoad:[UsergaurdService],
   loadChildren:()=>import ('./task7/task7.module').then(x=>x.Task7Module)},
  {path : 'editdetails/:id',component:EditdetailsComponent},
  {path : 'editaddress/:id',component:EditaddressComponent},
  {path : 'editexperience/:id',component:EditexperienceComponent},
  {path : 'editqualification/:id',component:EditqualificationComponent},
  {path : 'editskill/:id',component:EditskillComponent},
  {path :'error', component: ErrorComponent},
  {path : "**" , redirectTo:'/error'},

]
export const arrRouting = RouterModule.forRoot(arr);

