import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators,FormBuilder, Form } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editskill',
  templateUrl: './editskill.component.html',
  styleUrls: ['./editskill.component.css']
})
export class EditskillComponent implements OnInit {
skill:FormGroup;
  constructor(private fb: FormBuilder,private _router:Router) { }

  ngOnInit(): void {
    this.skill=this.fb.group({
      skill_details:this.fb.array([this.skillgroup()]),

    });
  }
  skillgroup(){
    return this.fb.group({
        id: new FormControl(null,[Validators.required]),
        skillcatagory: new FormControl(null,[Validators.required]),
        skill:new FormControl (null,[Validators.required]),
        skilllevel: new FormControl (null,[Validators.required]),
        iscurrent: new FormControl ('yes',[Validators.required]),
        experience: new FormControl (null,[Validators.required]),


    });
  }
  skillgetang(form):Array<any>{
    return form.controls.skill_details.controls;
  }
  skillduplicate(skill,a): boolean{
  let myskill=this.skillgetang(this.skill);
  let textskill=myskill.filter(data=> data.controls.skill.value==skill && skill!=null)
  if (textskill.length>1 ){
    return true;

  }
  else{
    return false;

  }
  }

  onSaveClick(){
    alert('Saved Successfully')
 console.log(this.skill.value)
 this._router.navigate(['/employee'])
  }


}
