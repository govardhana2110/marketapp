import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators,FormBuilder, Form } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editdetails',
  templateUrl: './editdetails.component.html',
  styleUrls: ['./editdetails.component.css']
})
export class EditdetailsComponent implements OnInit {
  registrationform:FormGroup;
  age;
  constructor(private fb: FormBuilder,private _router:Router) { }


  ngOnInit(): void {
    this.registrationform = new FormGroup({
      employee_number:new FormControl(null,[Validators.required]),
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
  }
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
