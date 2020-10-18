export class login {
  constructor(public email:string, public password:string){}
}
export class register {
  constructor(public firstname:string, public lastname:string, public password:string,public confirmpassword:string ){}
}
