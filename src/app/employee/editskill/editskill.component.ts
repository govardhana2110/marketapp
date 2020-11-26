import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators,FormBuilder, Form } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpService } from '../emp.service';
import { skill} from '../details'
@Component({
  selector: 'app-editskill',
  templateUrl: './editskill.component.html',
  styleUrls: ['./editskill.component.css']
})
export class EditskillComponent implements OnInit {
skill:FormGroup;
empid;
  constructor(private fb: FormBuilder,
    private _router:Router,
    private _actroutes:ActivatedRoute,
    private _data:EmpService) { }

  ngOnInit(): void {
    this.skill=this.fb.group({
      skill_details:this.fb.array([this.skillgroup()]),

    });
    this.empid=this._actroutes.snapshot.params['id'];
    // console.log('hello from qualification edit'),
  this._data.getDetails5(this.empid).subscribe((data:skill[])=>{
    this.skill.patchValue({
    id:data[0].id,
    skillcatagory:data[0].skillcatagory,
    skill:data[0].skill,
    skilllevel:data[0].skilllevel,
    iscurrent:data[0].iscurrent,
    experience:data[0].experience,
  });
});
  }
  onSaveClick(){
     this._data.updateDetails5(this.skill.value).subscribe((x)=>{
      this._router.navigate(['/employee'])
    })
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

  get skillarray(){
    return<FormArray>this.skill.get('skill_details');
  }
  addskill()
  {
    this.skillarray.push(this.skillgroup());
  }


  deleteskill(index)
  {
  this.skillarray.removeAt(index);
  }


  mySkillReset()
  {
  this.skillarray.reset();
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




}
