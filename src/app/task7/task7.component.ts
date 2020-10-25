import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormArray, FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { from } from 'rxjs';
import { Qualification ,Skill} from './qualification';
@Component({
  selector: 'app-task7',
  templateUrl: './task7.component.html',
  styleUrls: ['./task7.component.css']
})
export class Task7Component implements OnInit {
   registrationform:FormGroup;
   detailsform: FormGroup;
   qualificationform:FormGroup;
   flag1:boolean=true;
   flag2:boolean=false;
   flag3:boolean=false;
   age:number;
   duplicates: any[]=[];
   constructor(private fb: FormBuilder) { }
   sdno_street:String;
   svillage:String;
   spost_office:String;
   smandal:String;
   sdistrict:String;
   spin_code:String;
   spresent_address:FormGroup;
   fromdate;
   todate;
   organisation;
   //qualiarr:Qualification [] = [];
   skillarr:Skill [] = [];
   qualification;
   institute;
   year;
   score;
   skillcatogary;
   skill;
   skilllevel;
   iscurrent;
   experience;



  ngOnInit(): void {
    this.registrationform = new FormGroup({
      employee_number:new FormControl(null,[Validators.required]),
      name:new FormControl(null,[Validators.required]),
      job_title:new FormControl("Mr."),
      first_name:new FormControl(null,[Validators.required]),
      user_gender:new FormControl("male"),
      user_dob:new FormControl(null,[Validators.required]),
      personal_phone:new FormControl (null,[Validators.required,Validators.minLength(10)]),
      personal_email:new FormControl(null,[Validators.required,Validators.email]),
      office_email:new FormControl(null,[Validators.email]),
      personal_email2:new FormControl(null,[Validators.email]),
      personal_email3:new FormControl(null,[Validators.email]),



    });
    this.detailsform = new FormGroup({

      paddress_group:new FormGroup({
        dno_street:new FormControl(null,[Validators.required]),
        village:new FormControl(null,[Validators.required]),
        post_office:new FormControl(null,[Validators.required]),
        mandal:new FormControl(null,[Validators.required]),
        district:new FormControl(null,[Validators.required]),
        pin_code:new FormControl(null,[Validators.required]),
        Permanent_address:new FormControl(),

      }),



        presentdno_street:new FormControl(null,[Validators.required]),
        present_village:new FormControl(null,[Validators.required]),
        presentpost_office:new FormControl(null,[Validators.required]),
        present_mandal:new FormControl(null,[Validators.required]),
        present_district:new FormControl(null,[Validators.required]),
        presentpin_code:new FormControl(null,[Validators.required]),


      address_arr:new FormArray([]),
      personal_mail:new FormControl(null,[Validators.email]),
      birth_place:new FormControl(null,[Validators.required]),
      nationality:new FormControl(null,[Validators.required]),
      pan_no:new FormControl(null,[Validators.required]),
      aadhar_no:new FormControl(null,[Validators.required,Validators.minLength(12)]),
      bank_name:new FormControl(null,[Validators.required]),
      payment_type:new FormControl(null,[Validators.required]),
      account_number:new FormControl(null,[Validators.required]),
      ifsc_code:new FormControl(null,[Validators.required]),
      city:new FormControl("bengaluru",[Validators.required]),

    });

   this.qualificationform=this.fb.group({
    qualification_details:this.fb.array( [this.qualificationgroup()]),
    skill_details:this.fb.array([this.skillgroup()]),
    experience_details:this.fb.array([this.experiencegroup()])
   });

    this.qualificationform.controls[ 'qualification_details'].valueChanges.subscribe(value=>{});
    this.qualificationform.controls[ 'skill_details'].valueChanges.subscribe(value=>{});
    // this.qualificationform.controls[ 'experience_details'].valueChanges.subscribe(value=>{});

    this.detailsform.get('paddress_group').get('Permanent_address').valueChanges.subscribe((x) => this.setAddress(x, this.detailsform.get('paddress_group').value));
    this.detailsform.get('paddress_group').get('Permanent_address').valueChanges.subscribe((t) => this.editAddress(t));
    this.registrationform.get('user_dob').valueChanges.subscribe((x)=> this.updateage(x));

  }
  editAddress(v:boolean){
    if(v==true){
        this.detailsform.get('paddress_group').valueChanges.subscribe((y) => this.setAddress(this.detailsform.get('paddress_group').get('Permanent_address').value, y));//this.editAddress(x, this.empInfo.get('Padd').value));
    }
  }
  get qualiArray()
  {
    return<FormArray>this.qualificationform.get('qualification_details');

  }
  get skillarray(){
    return<FormArray>this.qualificationform.get('skill_details');
  }
  get experiencearray(){
    return<FormArray>this.qualificationform.get('experience_details');
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

  qualificationgroup(){
    return this.fb.group({
      qualification: new FormControl(null,[Validators.required]),
        institute:new FormControl (null,[Validators.required]),
        year: new FormControl (null,[Validators.required]),
        score: new FormControl (null,[Validators.required]),

    });
  }
  skillgroup(){
    return this.fb.group({
      skillcatagory: new FormControl(null,[Validators.required]),
        skill:new FormControl (null,[Validators.required]),
        skilllevel: new FormControl (null,[Validators.required]),
        iscurrent: new FormControl ('yes',[Validators.required]),
        experience: new FormControl (null,[Validators.required]),


    });
  }
  experiencegroup(){
    return this.fb.group({
      dategroup:new FormGroup({ fromdate: new FormControl(null,[Validators.required]),
        todate:new FormControl (null,[Validators.required])}, [this.fromToDate('fromdate', 'todate').bind(this)] ),

        organisation: new FormControl (null,[Validators.required]),
        experience: new FormControl (null,[Validators.required]),


    });
  }
  skillgetang(form):Array<any>{
    return form.controls.skill_details.controls;
  }
  skillduplicate(skill,a): boolean{
  let myskill=this.skillgetang(this.qualificationform);
  let textskill=myskill.filter(data=> data.controls.skill.value==skill && skill!=null)
  if (textskill.length>1 ){
    return true;

  }
  else{
    return false;

  }
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
  timeCalculation(val: Date){
    let myArray = this.getang(this.qualificationform);

    var fyear= new Date(val).getFullYear();

    var today=new Date();
    var tyear=new Date(today).getFullYear();
    var a=tyear-fyear;
    console.log(a);

  }
  Duplicate(fromdate, todate): boolean {
    let myArray = this.expgetang(this.qualificationform);
    let test = myArray.filter(data => data.controls.dategroup.get('todate').value >= fromdate && fromdate != null)
    if (test.length > 1) {
      return true;
    } else {
      return false
    }
  }
  expgetang(form): Array<any> {
    return form.controls.experience_details.controls;
  }

  Duplicate1(fromdate): boolean {
    let myArray = this.expgetang(this.qualificationform);
    let test = myArray.filter(data => data.controls.dategroup.get('fromdate').value == fromdate && fromdate != null)
    if (test.length > 1) {
      return true;
    } else {
      return false
    }
  }
  fromToDateValidation(fromdate, todate): boolean {
    let myArray = this.expgetang(this.qualificationform);
    let test = myArray.filter(data => data.controls.fromto.get('fromdate').value > todate && todate != null)
       // the fromDate and toDate are numbers. In not convert them first after null check
        if (test !== null ) {
            return true;
        }
        return false;
    };
  getang(form):Array<any>{
    return form.controls.qualification_details.controls;
  }
  duplicate(qualification,a): boolean{
  let myarr=this.getang(this.qualificationform);
  let text=myarr.filter(data=> data.controls.qualification.value==qualification && qualification!=null)
  if (text.length>1 ){
    return true;

  }
  else{
    return false;
  }
}
  updateage(val:Date){
 var td=new Date();
 var yd=td.getFullYear();
 var bdy=new Date(val).getFullYear();
 var ans=yd-bdy;
 console.log(ans);
 this.age=ans;
  }
  setAddress(val:boolean, paddressGrp:FormGroup){
    if(val==true){
      this.sdno_street=paddressGrp['dno_street'];
      this.svillage=paddressGrp['village'];
      this.spost_office=paddressGrp['post_office'];
      this.smandal=paddressGrp['mandal'];
      this.sdistrict=paddressGrp['district'];
      this.spin_code=paddressGrp['pin_code'];
    }
    else{
      this.sdno_street=null;
      this.svillage=null;
      this.spost_office=null;
      this.smandal=null;
      this.sdistrict=null;
      this.spin_code=null;
    }
  }

onNextClick(){
  this.flag1=false;
  this.flag2=true;
  this.flag3=false;
  console.log(this.registrationform.value);

}
getAddress(){
 return(<FormArray>this.detailsform.get('address_arr')).controls;
}
onClickCheckbox(){
const controle=new FormControl(null);
(this.detailsform.get('address_arr')as FormArray).push(controle);
}
onProceedClick(){
  this.flag1=false;
  this.flag2=false;
  this.flag3=true;
  console.log(this.detailsform.value);
}
onBackClick(){
  this.flag1=true;
  this.flag2=false;
  this.flag3=false;
}
onPreviousClick(){
  this.flag1=false;
  this.flag2=true;
  this.flag3=false;
}

onSubmitClick(){
  alert("Details submitted successfully")
  console.log(this.qualificationform.value)

  }
onEditQualificationClick(){

}
onSaveQualificationClick(){
alert("Saved Successfully");
}
onEditExperienceClick(){

}
onSaveExperienceClick(){
alert("Saved Successfully")
}

onEditSkillClick(){

}
onSaveSkillClick(){
alert("Saved Successfully")
}


}
