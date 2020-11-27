import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators,FormBuilder, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { experience, permanent, present, qualification, registration, skill } from '../details';
import { EmpService } from '../emp.service';
@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {
age;
flag:boolean=true;
flag1:boolean=false;
flag2:boolean=false;
flag3:boolean=false;
flag4:boolean=false;
sid:string;
   sdno_street:String;
   svillage:String;
   spost_office:String;
   smandal:String;
   sdistrict:String;
   spin_code:String;
   scountry:string;
   sstate:string;
   scity:string;
registrationform:FormGroup;
permanent:FormGroup;
present:FormGroup;
qualification:FormGroup;
experience:FormGroup;
skill:FormGroup;
registration_arr:registration[]=[];
permanent_arr:permanent[]=[];
present_arr:present[]=[];
quali_arr:qualification[]=[];
exp_arr:experience[]=[];
skill_arr:skill[]=[];
counting:number;
counting1:number;
counting2:number;
response;
response1;
response2;

  constructor(private fb: FormBuilder,
    private _router:Router,
    private _data:EmpService) { }

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
      age:new FormControl(),
      official_phone:new FormControl (null,[Validators.required,Validators.minLength(10)]),
      personal_phone:new FormControl (null,[Validators.required,Validators.minLength(10)]),
      extn_ofc_phn:new FormControl (null,[Validators.required,Validators.minLength(10)]),
      fax:new FormControl(null,[Validators.required]),
      ofc_mail:new FormControl(null,[Validators.email]),
      personal_email:new FormControl(null,[Validators.required,Validators.email]),
      photo:new FormControl(),
      birth_place:new FormControl(null,[Validators.required]),
      relegion:new FormControl("select"),
      cast:new FormControl('select',[Validators.required]),
      nationality:new FormControl('select',[Validators.required]),
      voter_id:new FormControl(null,[Validators.required]),
      PAN:new FormControl(null,[Validators.required]),
      aadhar:new FormControl(null,[Validators.required,Validators.minLength(12)]),
      marital_status:new FormControl("select"),
      bank_name:new FormControl(null,[Validators.required]),
      payment_type:new FormControl(null,[Validators.required]),
      account_type:new FormControl(null,[Validators.required]),
      acc_no:new FormControl(null,[Validators.required]),
      IFSC:new FormControl(null,[Validators.required]),

  });
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
    Permanent_address:new FormControl(null),
  }),
});
this.present=new FormGroup({
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

  this.qualification=this.fb.group({
    qualification_details:this.fb.array( [this.qualificationgroup()]),
  });
  this.experience=this.fb.group({
    experience_details:this.fb.array([this.experiencegroup()])

  });
  this.skill=this.fb.group({
    skill_details:this.fb.array([this.skillgroup()]),

  });
  this.permanent.get('address_group').get('Permanent_address').valueChanges.subscribe((x) => this.setAddress(x, this.permanent.get('address_group').value));
    this.permanent.get('address_group').get('Permanent_address').valueChanges.subscribe((t) => this.editAddress(t));
  this.registrationform.get('user_dob').valueChanges.subscribe((x)=> this.updateage(x));
}
editAddress(v:boolean){
  if(v==true){
      this.permanent.get('address_group').valueChanges.subscribe((y) => this.setAddress(this.permanent.get('address_group').get('Permanent_address').value, y));//this.editAddress(x, this.empInfo.get('Padd').value));
  }
}
setAddress(val:boolean, paddressGrp:FormGroup){
  if(val==true){
    this.sid=paddressGrp['id'];
    this.sdno_street=paddressGrp['dno_street'];
    this.svillage=paddressGrp['village'];
    this.spost_office=paddressGrp['post_office'];
    this.smandal=paddressGrp['mandal'];
    this.sdistrict=paddressGrp['district'];
    this.spin_code=paddressGrp['pin_code'];
    this.scountry=paddressGrp['country'];
    this.sstate=paddressGrp['state'];
    this.scity=paddressGrp['city'];
  }
  else{
    this.sid=null;
    this.sdno_street=null;
    this.svillage=null;
    this.spost_office=null;
    this.smandal=null;
    this.sdistrict=null;
    this.spin_code=null;
    this.scountry=null;
    this.sstate=null;
    this.scity=null;
  }
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
experiencegroup(){
  return this.fb.group({
    id:new FormControl(),
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
  } Duplicate(fromdate, todate): boolean {
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

  onSaveClick(){
    alert('Saved Successfully')
 console.log(this.registrationform.value)
  }
  onNextClick(){
    this.flag=false;
    this.flag1=true;
    this.flag2=false;
    this.flag3=false;
    this.flag4=false;

  }
  onBackClick(){
    this.flag=true;
    this.flag1=false;
    this.flag2=false;
    this.flag3=false;
    this.flag4=false;

  }
  onSave1Click(){
      this._data.addDetails1(this.permanent.get('address_group').value).subscribe(
        (x:any)=>{
          if (x.affectedRows==1) {
            this.permanent_arr.push(this.permanent.get('address_group').value);
            alert('Added Successfully');
          } else {
            if(x.code=='ER_DUP_ENTRY'){
              alert('Duplicate Email')
            }else{
              console.log(x);
            }
          }

        });



  }
  onNextClick1(){

    this._data.addDetails2(this.present.value).subscribe(
      (x:any)=>{
        if (x.affectedRows==1) {
          this.present_arr.push(this.present.value);
            let temp=this.present.get('id').value;
             console.log(temp);
          alert('Added Successfully');
        } else {
          if(x.code=='ER_DUP_ENTRY'){
            alert('Duplicate Email')
          }else{
            console.log(x);
          }
        }

      });
    this.flag=false;
    this.flag1=false;
    this.flag2=true;
    this.flag3=false;
    this.flag4=false;


  }
  onBack1Click(){
    this.flag=false;
    this.flag1=true;
    this.flag2=false;
    this.flag3=false;
    this.flag4=false;

  }
  onSave2Click():void{
    this.counting=0;
    this.response="";
    this.quali_arr.push(this.qualification.get('qualification_details').value);
   for (var a=0;a<=(this.qualification.get('qualification_details').value).length-1;a++)
   {
this._data.addDetails3(this.qualification.get('qualification_details').get([this.counting]).value).subscribe((x)=>{
  alert ('Added Successfully')
});
this.counting++
   }

  }
  onNextClick2(){
    this.flag=false;
    this.flag1=false;
    this.flag2=false;
    this.flag3=true;
    this.flag4=false;

  }
  onBack2Click(){
    this.flag=false;
    this.flag1=false;
    this.flag2=true;
    this.flag3=false;
    this.flag4=false;

  }
  onSave3Click():void{
    {
      this.counting1=0
      this.response1="";
      for(var i=0;i<=(this.experience.get('experience_details').value).length-1;i++)
        {
          {
            this._data.addDetails4(this.experience.get('experience_details').get([this.counting1]).value).subscribe((x)=>
            {

              this.exp_arr.push(this.experience.get('experience_details').value);
            }
            );}

          this.counting1++;
          alert("Data Added Successfully!...");

        }

      }


  }
  onNextClick3(){
    this.flag=false;
    this.flag1=false;
    this.flag2=false;
    this.flag3=false;
    this.flag4=true;

  }
  onBack3Click(){
    this.flag=false;
    this.flag1=false;
    this.flag2=false;
    this.flag3=true;
    this.flag4=false;

  }
  onaddclick(){
    this.counting2=0;
    this.response2="";
    this.skill_arr.push(this.skill.get('skill_details').value);
   for (var a=0;a<=(this.skill.get('skill_details').value).length-1;a++)
   {
this._data.addDetails5(this.skill.get('skill_details').get([this.counting2]).value).subscribe((x)=>{
  alert ('Added Successfully')
});
this.counting2++
   }
  }

  updateage(val:Date){
    var td=new Date();
    var yd=td.getFullYear();
    var bdy=new Date(val).getFullYear();
    var ans=yd-bdy;
    this.age=ans;
    this.registrationform.get('age').setValue(ans);
  }

}
