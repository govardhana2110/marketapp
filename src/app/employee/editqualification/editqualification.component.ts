import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators,FormBuilder, Form } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editqualification',
  templateUrl: './editqualification.component.html',
  styleUrls: ['./editqualification.component.css']
})
export class EditqualificationComponent implements OnInit {
qualification:FormGroup;
  constructor(private fb: FormBuilder,private _router:Router) { }

  ngOnInit(): void {
    this.qualification=this.fb.group({
      qualification_details:this.fb.array( [this.qualificationgroup()]),
    });
  }
  qualificationgroup(){
    return this.fb.group({
        id: new FormControl(null,[Validators.required]),
        qualification: new FormControl(null,[Validators.required]),
        institute:new FormControl (null,[Validators.required]),
        year: new FormControl (null,[Validators.required]),
        score: new FormControl (null,[Validators.required]),

    });
  }
  getang(form):Array<any>{
    return form.controls.qualification_details.controls;
  }
  duplicate(qualification,a): boolean{
  let myarr=this.getang(this.qualification);
  let text=myarr.filter(data=> data.controls.qualification.value==qualification && qualification!=null)
  if (text.length>1 ){
    return true;

  }
  else{
    return false;
  }
}
onSaveClick(){
  alert('Saved Successfully')
  console.log(this.qualification.value)
  this._router.navigate(['/employee'])

}

}
