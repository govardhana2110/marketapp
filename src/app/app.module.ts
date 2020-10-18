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
import { Task7Component } from './task7/task7.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CartComponent,
    ErrorComponent,
    ItemsComponent,
    MenuComponent,
    HomeComponent,
    Task7Component,
    PhoneDirective,
    OfficePhoneDirective,
    AadharDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    arrRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
