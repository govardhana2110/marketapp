import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { Task7Component } from './task7.component';
import { CommonModule } from '@angular/common';
import { taskRouting} from './task7.routing';
import { SharedModule } from "../shared.module";
@NgModule({
  declarations: [
    Task7Component
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    taskRouting,
    SharedModule,
  ]
})
export class Task7Module{ }
