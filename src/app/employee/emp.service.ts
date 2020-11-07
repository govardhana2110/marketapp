import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { experience,skill,qualification,permanent,present,registration} from './details';
@Injectable({
  providedIn: 'root'
})
export class EmpService {
  url:string = 'http://localhost:3000/permanent/';
  url1:string = 'http://localhost:3000/present/';
  url2:string = 'http://localhost:3000/registration/';
  url3:string = 'http://localhost:3000/qualification/';
  url4:string = 'http://localhost:3000/skill/';
  url5:string = 'http://localhost:3000/experience/';

  constructor(private _http:HttpClient) { }
  getAllexp(){
    return this._http.get<experience[]>(this.url5);
  }
  getAllreg(){
    return this._http.get<registration[]>(this.url2);
  }
  getAllskill(){
    return this._http.get<skill[]>(this.url4);
  }
  getAllpermanent(){
    return this._http.get<permanent[]>(this.url);
  }
  getAllpresent(){
    return this._http.get<present[]>(this.url1);
  }
  getAllquali(){
    return this._http.get<qualification[]>(this.url3);
  }
  addtask(item:registration){
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url2,body,{headers:head});
      }
}
