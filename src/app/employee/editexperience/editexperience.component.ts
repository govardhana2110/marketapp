import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators,FormBuilder, Form } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { experience } from '../details';
import { EmpService } from '../emp.service';
@Component({
  selector: 'app-editexperience',
  templateUrl: './editexperience.component.html',
  styleUrls: ['./editexperience.component.css']
})
export class EditexperienceComponent implements OnInit {
experience:FormGroup;
empid;
  constructor(private fb: FormBuilder,
    private _router:Router,
    private _actroutes:ActivatedRoute,
    private _data:EmpService
    ) { }

  ngOnInit(): void {
    this.experience=this.fb.group({
      experience_details:this.fb.array([this.experiencegroup()])

    });
    this.empid=this._actroutes.snapshot.params['id'];
    // console.log('hello from qualification edit'),
  this._data.getDetails4(this.empid).subscribe((data:experience[])=>{
    this.experience.patchValue({
    id:data[0].id,
    fromdate:data[0].fromdate,
    todate:data[0].todate,
    organisation:data[0].organisation,
    experience:data[0].experience,
  });
});

  }
  onSaveClick(){
    this._data.updateDetails4(this.experience.value).subscribe((x)=>{
      this._router.navigate(['/employee'])
    })

  }
  experiencegroup(){
    return this.fb.group({
      id: new FormControl(null,[Validators.required]),
      dategroup:new FormGroup({ fromdate: new FormControl(null,[Validators.required]),
        todate:new FormControl (null,[Validators.required])}, [this.fromToDate('fromdate', 'todate').bind(this)] ),
        organisation: new FormControl (null,[Validators.required]),
        experience: new FormControl (null,[Validators.required]),
    });
  }
  get experiencearray(){
    return<FormArray>this.experience.get('experience_details');
  }
  addexperience()
  {
    this.experiencearray.push(this.experiencegroup());
  }


  deleteexperience(index)
  {
  this.experiencearray.removeAt(index);
  }


  experienceReset()
  {
  this.experiencearray.reset();
  }

  Duplicate(fromdate, todate): boolean {
    let myArray = this.expgetang(this.experience);
    let test = myArray.filter(data => data.controls.dategroup.get('todate').value >= fromdate && fromdate != null)
    if (test.length > 1) {
      return true;
    } else {
      return false
    }
  }
  Duplicate1(fromdate): boolean {
    let myArray = this.expgetang(this.experience);
    let test = myArray.filter(data => data.controls.dategroup.get('fromdate').value == fromdate && fromdate != null)
    if (test.length > 1) {
      return true;
    } else {
      return false
    }
  }
  expgetang(form): Array<any> {
    return form.controls.experience_details.controls;
  }

  fromToDate(fromdate: string, todate: string)
  {
    return (group: FormGroup): {[key: string]: any} => {
      let f = group.controls[fromdate];
      let t = group.controls[todate];
      if (f.value > t.value) {
        return {
          dates: "Date from should be less than Date to"
        };
      }
      return {};
    }

  }


}
