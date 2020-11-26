import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators,FormBuilder, Form } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { qualification } from '../details';
import { EmpService } from "../emp.service";
@Component({
  selector: 'app-editqualification',
  templateUrl: './editqualification.component.html',
  styleUrls: ['./editqualification.component.css']
})
export class EditqualificationComponent implements OnInit {
qualification:FormGroup;
empid;
  constructor(private fb: FormBuilder,
    private _router:Router,
    private _actroutes:ActivatedRoute,
    private _data:EmpService) { }

  ngOnInit(): void {
    this.qualification=this.fb.group({
      qualification_details:this.fb.array( [this.qualificationgroup()]),
    });
    this.empid=this._actroutes.snapshot.params['id'];
    // console.log('hello from qualification edit'),
  this._data.getDetails3(this.empid).subscribe((data:qualification[])=>{
    this.qualification.patchValue({
    id:data[0].id,
    qualification:data[0].qualification,
    institute:data[0].institute,
    year:data[0].year,
    score:data[0].score,
  });
});
  }
  onSaveClick(){
    this._data.updateDetails3(this.qualification.value).subscribe((x)=>{
      this._router.navigate(['/employee'])
    })

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
  get qualiArray()
  {
    return<FormArray>this.qualification.get('qualification_details');

  }
  addqualification()
  {
    this.qualiArray.push(this.qualificationgroup());
  }

  deletequalification(index)
  {
  this.qualiArray.removeAt(index);
  }


  myReset()
  {
  this.qualiArray.reset();
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


}
