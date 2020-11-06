import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators,FormBuilder, Form } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editexperience',
  templateUrl: './editexperience.component.html',
  styleUrls: ['./editexperience.component.css']
})
export class EditexperienceComponent implements OnInit {
experience:FormGroup;
  constructor(private fb: FormBuilder,private _router:Router) { }

  ngOnInit(): void {
    this.experience=this.fb.group({
      experience_details:this.fb.array([this.experiencegroup()])

    });
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
  onSaveClick(){
    alert('Saved Successfully')
    console.log(this.experience.value)
    this._router.navigate(['/employee'])

  }

}
