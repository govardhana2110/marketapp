import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import{ RouterModule} from "@angular/router";
import { arrRouting} from "./app.routing";
import { AppComponent } from './app.component';
import { PhoneDirective,OfficePhoneDirective,AadharDirective} from './directives';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ErrorComponent } from './error/error.component';
import { ItemsComponent } from './items/items.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule, HTTP_INTERCEPTORS  } from "@angular/common/http";
import { EmployeeComponent } from './employee/employee.component';
import { EditdetailsComponent } from './employee/editdetails/editdetails.component';
import { EditaddressComponent } from './employee/editaddress/editaddress.component';
import { EditqualificationComponent } from './employee/editqualification/editqualification.component';
import { EditexperienceComponent } from './employee/editexperience/editexperience.component';
import { EditskillComponent } from './employee/editskill/editskill.component';
import { AddempComponent } from './employee/addemp/addemp.component';
import { SharedModule } from "./shared.module";
import { HttpinterceptorstokenService } from './httpinterceptorstoken.service';
import { PermanenteditComponent  } from "./employee/permanentedit/permanentedit.component";
import { PresenteditComponent } from "./employee/presentedit/presentedit.component";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CartComponent,
    ErrorComponent,
    ItemsComponent,
    MenuComponent,
    HomeComponent,
    EmployeeComponent,
    EditdetailsComponent,
    EditaddressComponent,
    PresenteditComponent,
    PermanenteditComponent,
    EditqualificationComponent,
    EditexperienceComponent,
    EditskillComponent,
    AddempComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    arrRouting,
    SharedModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:HttpinterceptorstokenService,
    multi:true,
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
