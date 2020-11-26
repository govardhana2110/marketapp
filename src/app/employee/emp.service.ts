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

//////     Basic Details///////////////////


  getallDetails(){
    return this._http.get<registration[]>(this.url2);
  }
  getDetails(id){
    return this._http.get<registration[]>(this.url2+id);
  }
  addDetails(item:registration){
    let body=JSON.stringify(item);
    console.log(body);
    return this._http.post(this.url2,body);
  }
  updateDetails(item:registration) {
      let head = new HttpHeaders().set('Content-Type', 'application/json');
      let body = JSON.stringify(item);
     return this._http.put(this.url2 + item.id, body, { headers: head });
     }


     //////////////permanent Address Details//////////


     getAllDetails1(){
      return this._http.get<permanent[]>(this.url);

    }
    addDetails1(item:permanent){
      let body=JSON.stringify(item);
      let head=new HttpHeaders().set('Content-Type','application/json');
      console.log(body);
      return this._http.post(this.url,body,{headers:head});
    }
    getDetails1(id){
      return this._http.get<permanent[]>(this.url+id);
    }
    updateDetails1(item:permanent) {
      let head = new HttpHeaders().set('Content-Type', 'application/json');
      let body = JSON.stringify(item);
     return this._http.put(this.url + item.id, body, { headers: head });
     }
 /////////////PResent Address ////////

  getAllDetails2(){
    return this._http.get<present[]>(this.url1);
  }
  addDetails2(item:present){
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    console.log(body);
    return this._http.post(this.url1,body,{headers:head});
  }
  //////////Qualification Details///////////
  getAllDetails3(){
    return this._http.get<qualification[]>(this.url3);
  }
  addDetails3(item:qualification){
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    console.log(body);
    return this._http.post(this.url3,body,{headers:head});
  }
  getDetails3(id){
    return this._http.get<qualification[]>(this.url3+id);
  }
  updateDetails3(item:qualification) {
    let head = new HttpHeaders().set('Content-Type', 'application/json');
    let body = JSON.stringify(item);
   return this._http.put(this.url3 + item.id, body, { headers: head });
   }

   /////////Experience Details//////////

  getAllDetails4(){
    return this._http.get<experience[]>(this.url5);
  }
  addDetails4(item:experience){
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url5,body,{headers:head});
  }

  getDetails4(id){
    return this._http.get<experience[]>(this.url5+id);
  }
  updateDetails4(item:experience) {
    let head = new HttpHeaders().set('Content-Type', 'application/json');
    let body = JSON.stringify(item);
   return this._http.put(this.url5 + item.id, body, { headers: head });
   }

  ///////////Skill Details///////////
  getAllDetails5(){
    return this._http.get<skill[]>(this.url4);
  }
  addDetails5(item:skill){
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url4,body,{headers:head});
  }
  getDetails5(id){
    return this._http.get<skill[]>(this.url4+id);
  }
  updateDetails5(item:skill) {
    let head = new HttpHeaders().set('Content-Type', 'application/json');
    let body = JSON.stringify(item);
   return this._http.put(this.url4 + item.id, body, { headers: head });
   }
}
