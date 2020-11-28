import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormControl } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { present } from '../details';
import { EmpService } from "../emp.service";
@Component({
  selector: 'app-presentedit',
  templateUrl: './presentedit.component.html',
  styleUrls: ['./presentedit.component.css']
})
export class PresenteditComponent implements OnInit {
present:FormGroup;
empid;
  constructor(private _router:Router,private _actroutes:ActivatedRoute,private _data:EmpService) { }

  ngOnInit(): void {
this.present=new FormGroup({
  pid:new FormControl(null,[Validators.required]),
  presentdno_street:new FormControl(null,[Validators.required]),
  present_village:new FormControl(null,[Validators.required]),
  presentpost_office:new FormControl(null,[Validators.required]),
  present_mandal:new FormControl(null,[Validators.required]),
  present_district:new FormControl(null,[Validators.required]),
  presentpin_code:new FormControl(null,[Validators.required]),
  pcountry:new FormControl(null,[Validators.required]),
  pstate:new FormControl(null,[Validators.required]),
  pcity:new FormControl(null,[Validators.required]),
});

this.empid=this._actroutes.snapshot.params['id'];
    this._data.getDetails2(this.empid).subscribe((data:present[])=>{
      this.present.patchValue({
      id:data[0].id,
      presengtdno_street:data[0].presentdno_street,
      present_village:data[0].present_village,
      presentpost_office:data[0].presentpost_office,
      prsent_mandal:data[0].present_mandal,
      presenrt_district:data[0].present_district,
      presentpin_code:data[0].presentpin_code,
      pcountry:data[0].country,
      pstate:data[0].state,
      pcity:data[0].city,
  });
})
  }
  onSaveClick(){
    this._data.updateDetails2(this.present.value).subscribe((x)=>{
      this._router.navigate(['/employee']);
    })
  }

}
