import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { experience,skill,qualification,permanent,present,registration} from './details';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpService } from './emp.service';
import { Items } from '../items/items';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  flag:boolean=true;
  flag1:boolean=false;
  exp_arr:experience[]=[];
  skill_arr:skill[]=[];
  quali_arr:qualification[]=[];
  permanent_arr:permanent[]=[];
  present_arr:present[]=[];
  reg_arr:registration[]=[];
  constructor(private _data:EmpService ,
    private _router:Router,
    private _acRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._data.getAllDetails4().subscribe((data)=>{
      this.exp_arr=data
    });
    this._data.getAllDetails5().subscribe((data)=>{
      this.skill_arr=data
    });
    this._data.getAllDetails3().subscribe((data)=>{
       this.quali_arr=data
    });
    this._data.getAllDetails1().subscribe((data)=>{
      this.permanent_arr=data
    });
    this._data.getAllDetails2().subscribe((data)=>{
      this.present_arr=data
    });
    // this._data.getallDetails().subscribe((data)=>{
    //   this.reg_arr=data
    // });
    this.reg_arr=this._acRoute.snapshot.data['data']

  }
onshowclick(){
  this.flag=false;
  this.flag1=true;
}
onhideclick(){
  this.flag=true;
  this.flag1=false;
}
oneditbasicclick(item:registration){
  this._router.navigate(['/editdetails',item.id])

}
oneditpermanentclick(item:permanent){
  this._router.navigate(['/permanent',item.id])

}
oneditpresentclick(item:present){
  this._router.navigate(['/present',item.id])

}
oneditqualificationclick(item:qualification){
  this._router.navigate(['/editqualification',item.id])

}
oneditexperienceclick(item:experience){
  this._router.navigate(['/editexperience',item.id])

}
oneditskillclick(item:skill){
  this._router.navigate(['/editskill',item.id])

}
onaddclick(){
  this._router.navigate(['/addemp'])

}
ondeleteemp(item:registration){
  if (confirm('Are you sure you want to delete?')) {
  this._data.deleteDetails(item.id).subscribe((x:any)=>{
this.reg_arr.splice(this.reg_arr.indexOf(item),1);
  });
}

}
}
