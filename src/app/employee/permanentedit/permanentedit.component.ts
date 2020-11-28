import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { permanent } from '../details';
import { EmpService } from "../emp.service";
@Component({
  selector: 'app-permanentedit',
  templateUrl: './permanentedit.component.html',
  styleUrls: ['./permanentedit.component.css']
})
export class PermanenteditComponent implements OnInit {
permanent:FormGroup;
empid;
  constructor(private _router:Router,private _actroutes:ActivatedRoute,private _data:EmpService) { }

  ngOnInit(): void {
    this.permanent=new FormGroup({
      id:new FormControl(null,[Validators.required]),
      dno_street:new FormControl(null,[Validators.required]),
      village:new FormControl(null,[Validators.required]),
      post_office:new FormControl(null,[Validators.required]),
      mandal:new FormControl(null,[Validators.required]),
      district:new FormControl(null,[Validators.required]),
      pin_code:new FormControl(null,[Validators.required]),
      country:new FormControl(null,[Validators.required]),
      state:new FormControl(null,[Validators.required]),
      city:new FormControl(null,[Validators.required]),
      Permanent_address:new FormControl(null),

    });
    this.empid=this._actroutes.snapshot.params['id'];
    this._data.getDetails1(this.empid).subscribe((data:permanent[])=>{
      this.permanent.patchValue({
      id:data[0].id,
      dno_street:data[0].dno_street,
      village:data[0].village,
      post_office:data[0].post_office,
      manda:data[0].mandal,
      district:data[0].district,
      pin_code:data[0].pin_code,
      country:data[0].country,
      state:data[0].state,
      city:data[0].city,
  });
})
  }
  onSaveClick(){
    this._data.updateDetails1(this.permanent.value).subscribe((x)=>{
      this._router.navigate(['/employee']);
    })
  }

}
