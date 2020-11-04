import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { experience,skill,qualification,permanent,present,registration} from './details';
import { Router } from '@angular/router';
import { EmpService } from './emp.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  exp_arr:experience[]=[];
  skill_arr:skill[]=[];
  quali_arr:qualification[]=[];
  permanent_arr:permanent[]=[];
  present_arr:present[]=[];
  reg_arr:registration[]=[];
  constructor(private _data:EmpService ,private _router:Router) { }

  ngOnInit(): void {
    this._data.getAllexp().subscribe((data)=>{
      this.exp_arr=data
    });
    this._data.getAllskill().subscribe((data)=>{
      this.skill_arr=data
    });
    this._data.getAllquali().subscribe((data)=>{
       this.quali_arr=data
    });
    this._data.getAllpermanent().subscribe((data)=>{
      this.permanent_arr=data
    });
    this._data.getAllpresent().subscribe((data)=>{
      this.present_arr=data
    });
    this._data.getAllreg().subscribe((data)=>{
      this.reg_arr=data
    });

  }

}
