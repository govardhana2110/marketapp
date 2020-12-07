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
i:number;
  constructor(private fb: FormBuilder,
    private _router:Router,
    private _actroutes:ActivatedRoute,
    private _data:EmpService) { }

  ngOnInit(): void {
    this.qualification=this.fb.group({
      qualification_details:this.fb.array( [this.qualificationgroup()]),
    });


this.empid=this._actroutes.snapshot.params['id'];
  this._data.getDetails3(this.empid).subscribe((data:qualification[]) =>
      {
          for(let i=0; i<=data.length-1;i++)
          {
           const control = <FormArray>this.qualification.get('qualification_details');
           control.push(this.qualificationgroup());
            let item =control.at(i);
            item.patchValue({
          id:data[i].id,
          qualification:data[i].qualification,
          institute:data[i].institute,
          year:data[i].year,
          score:data[i].score,
  });
}
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
