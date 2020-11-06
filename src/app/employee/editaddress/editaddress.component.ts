import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators,FormBuilder, Form } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editaddress',
  templateUrl: './editaddress.component.html',
  styleUrls: ['./editaddress.component.css']
})
export class EditaddressComponent implements OnInit {
  permanent:FormGroup;
  constructor(private _router:Router) { }

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
    }),
      id:new FormControl(null,[Validators.required]),
      presentdno_street:new FormControl(null,[Validators.required]),
      present_village:new FormControl(null,[Validators.required]),
      presentpost_office:new FormControl(null,[Validators.required]),
      present_mandal:new FormControl(null,[Validators.required]),
      present_district:new FormControl(null,[Validators.required]),
      presentpin_code:new FormControl(null,[Validators.required]),
      country:new FormControl(null,[Validators.required]),
      state:new FormControl(null,[Validators.required]),
      city:new FormControl(null,[Validators.required]),
    });

  }
  onSaveClick(){
    alert('Saved Successfully')
    console.log(this.permanent.value)
    this._router.navigate(['/employee'])

  }

}
