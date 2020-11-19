import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators,FormBuilder, Form } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { registration } from '../details';
import { EmpService } from '../emp.service';
@Component({
  selector: 'app-editdetails',
  templateUrl: './editdetails.component.html',
  styleUrls: ['./editdetails.component.css']
})
export class EditdetailsComponent implements OnInit {
  registrationform:FormGroup;
  age;
  id;
  constructor(private fb: FormBuilder,private _router:Router,private _actroutes:ActivatedRoute,private _data:EmpService) { }


  ngOnInit(): void {
    this.registrationform = new FormGroup({
      id:new FormControl(null,[Validators.required]),
      name:new FormControl(null,[Validators.required]),
      title:new FormControl("Mr."),
      first_name:new FormControl(null,[Validators.required]),
      middle_name:new FormControl(null,[Validators.required]),
      last_name:new FormControl(null,[Validators.required]),
      user_gender:new FormControl("male"),
      user_dob:new FormControl(null,[Validators.required]),
      age:new FormControl(null),
      official_phone:new FormControl (null,[Validators.required,Validators.minLength(10)]),
      personal_phone:new FormControl (null,[Validators.required,Validators.minLength(10)]),
      ofc_extn_phn:new FormControl (null,[Validators.required,Validators.minLength(10)]),
      fax:new FormControl(null,[Validators.required]),
      ofc_email:new FormControl(null,[Validators.email]),
      personal_mail:new FormControl(null,[Validators.required,Validators.email]),
      photo:new FormControl(null,[Validators.required]),
      birth_place:new FormControl(null,[Validators.required]),
      relegion:new FormControl(null,[Validators.required]),
      cast:new FormControl(null,[Validators.required]),
      nationality:new FormControl(null,[Validators.required]),
      voter_id:new FormControl(null,[Validators.required]),
      PAN:new FormControl(null,[Validators.required]),
      aadhar:new FormControl(null,[Validators.required,Validators.minLength(12)]),
      marital_status:new FormControl(null,[Validators.required]),
      bank_name:new FormControl(null,[Validators.required]),
      payment_type:new FormControl(null,[Validators.required]),
      accounnt_type:new FormControl(null,[Validators.required]),
      acc_no:new FormControl(null,[Validators.required]),
      IFSC:new FormControl(null,[Validators.required]),

  });
  this.registrationform.get('user_dob').valueChanges.subscribe((x)=> this.updateage(x));
  this.id=this._actroutes.snapshot.params['id'];
this._data.getDetails2(this.id).subscribe((data:registration[])=>{
  this.registrationform.patchValue({
    id:data[0].id,
    name:data[0].name,
    title:data[0]. title ,
    first_name:data[0].first_name,
    middle_name:data[0].middle_name,
    last_name:data[0].last_name,
    user_gender:data[0].user_gender,
    user_dob:data[0]. user_dob ,
    age:data[0].age,
    official_phone:data[0].official_phone,
    personal_phone:data[0].personal_phone,
    ofc_extn_phn:data[0].extn_ofc_phn,
    fax:data[0].fax ,
    ofc_email:data[0].ofc_mail,
    personal_mail:data[0].personal_mail,
    photo:data[0].photo,
    birth_place:data[0].birth_place,
    relegion:data[0]. relegion ,
    cast:data[0].cast,
    nationality:data[0].nationality,
    voter_id:data[0].voter_id,
    PAN:data[0].PAN,
    aadhar:data[0].aadhar ,
    marital_status:data[0].marital_status,
    bank_name:data[0].bank_name,
    payment_type:data[0].payment_type,
    accounnt_type:data[0].account_type,
    acc_no:data[0].acc_no,
    IFSC:data[0].IFSC,
  });
});

  }
  // empedit(){
  //   this._data.edittask(this.id.value).subscribe((x)=>{
  //     this._router.navigate(['/employee']);
  //   })
  //   }
  updateage(val:Date){
    var td=new Date();
    var yd=td.getFullYear();
    var bdy=new Date(val).getFullYear();
    var ans=yd-bdy;
    console.log(ans);
    this.age=ans;
     }
     onSaveClick(){
      alert('Saved Successfully')
      console.log(this.registrationform.value)
      this._router.navigate(['/employee'])

    }

}
