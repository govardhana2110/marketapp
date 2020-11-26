
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators,FormBuilder, Form } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { permanent } from '../details';
import { EmpService } from "../emp.service";
@Component({
  selector: 'app-editaddress',
  templateUrl: './editaddress.component.html',
  styleUrls: ['./editaddress.component.css']
})
export class EditaddressComponent implements OnInit {
  permanent:FormGroup;
   sid:string;
   sdno_street:String;
   svillage:String;
   spost_office:String;
   smandal:String;
   sdistrict:String;
   spin_code:String;
   scountry:string;
   sstate:string;
   scity:string;
   empid;
  constructor(private _router:Router,private _actroutes:ActivatedRoute,private _data:EmpService) { }

  ngOnInit(): void {
    this.permanent=new FormGroup({
      address_group:new FormGroup({
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
    }),

      pid:new FormControl(null,[Validators.required]),
      presentdno_street:new FormControl(null,[Validators.required]),
      present_village:new FormControl(null,[Validators.required]),
      presentpost_office:new FormControl(null,[Validators.required]),
      present_mandal:new FormControl(null,[Validators.required]),
      present_district:new FormControl(null,[Validators.required]),
      presentpin_code:new FormControl(null,[Validators.required]),
      pcountry:new FormControl(null,[Validators.required]),
      pstate:new FormControl(null,[Validators.required]),
      pcity:new FormControl(null,[Validators.required]),
    });
    this.permanent.get('address_group').get('Permanent_address').valueChanges.subscribe((x) => this.setAddress(x, this.permanent.get('address_group').value));
    this.permanent.get('address_group').get('Permanent_address').valueChanges.subscribe((t) => this.editAddress(t));
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
  editAddress(v:boolean){
    if(v==true){
        this.permanent.get('address_group').valueChanges.subscribe((y) => this.setAddress(this.permanent.get('address_group').get('Permanent_address').value, y));//this.editAddress(x, this.empInfo.get('Padd').value));


      }
  }
  onSaveClick(){
    this._data.updateDetails1(this.permanent.value).subscribe((x)=>{
      this._router.navigate(['/employee']);
    })
  }
  setAddress(val:boolean, paddressGrp:FormGroup){
    if(val==true){
      this.sid=paddressGrp['id'];
      this.sdno_street=paddressGrp['dno_street'];
      this.svillage=paddressGrp['village'];
      this.spost_office=paddressGrp['post_office'];
      this.smandal=paddressGrp['mandal'];
      this.sdistrict=paddressGrp['district'];
      this.spin_code=paddressGrp['pin_code'];
      this.scountry=paddressGrp['country'];
      this.sstate=paddressGrp['state'];
      this.scity=paddressGrp['city'];
    }
    else{
      this.sid=null;
      this.sdno_street=null;
      this.svillage=null;
      this.spost_office=null;
      this.smandal=null;
      this.sdistrict=null;
      this.spin_code=null;
      this.scountry=null;
      this.sstate=null;
      this.scity=null;
    }
  }

}
