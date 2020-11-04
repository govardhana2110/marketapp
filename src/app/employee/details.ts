export class qualification{
  constructor ( public id,
    public qualification:string,
     public institute:string,
     public year:number,
     public score:number){}

}
export class skill{
  constructor(public id,
     public skillcatagory:string,
     public skill:string,
     public skilllevel:string,
     public iscurrent:string,
     public experience:string){}
}
export class experience {
  constructor( public id,
    public fromdate:string,
    public todate:string,
    public organisation:string,
    public experience:string,){}
}
export class registration{
  constructor( public employee_number,
    public name:string,
    public title:string,
    public first_name:string,
    public last_name:string,
    public middle_name:string,
    public user_gender:string,
    public user_dob:string,
    public age:string,
    public official_phone:string,
    public personal_phone:string,
    public extn_ofc_phn:string,
    public fax:string,
    public ofc_mail:string,
    public personal_mail:string,
    public photo:string,
    public birth_place:string,
    public relegion:string,
    public cast:string,
    public nationality:string,
    public voter_id:string,
    public PAN:string,
    public aadhar:string,
    public marital_status:string,
    public bank_name:string,
    public account_type:string,
    public payment_type:string,
    public acc_no:string,
    public IFSC:string,
    ){}
}
export class permanent{
  constructor( public id:string,
    public dno_street:string,
    public village:string,
    public post_office:string,
    public mandal:string,
    public district:string,
    public pin_code:string,
    public country:string,
    public state:string,
    public city:string,
    ){}
}
export class present{
  constructor( public id:string,
    public presentdno_street:string,
    public present_village:string,
    public presentpost_office:string,
    public present_mandal:string,
    public present_district:string,
    public presentpin_code:string,
    public country:string,
    public state:string,
    public city:string,){}
}
