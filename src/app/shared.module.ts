import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { PhoneDirective,OfficePhoneDirective,AadharDirective } from "./directives";

@NgModule(
  {
declarations:[
  PhoneDirective,
  OfficePhoneDirective,
  AadharDirective,
],
imports:[
  CommonModule,
],
exports:[
  PhoneDirective,
  OfficePhoneDirective,
  AadharDirective,
],

  }
)
export class SharedModule{ }
