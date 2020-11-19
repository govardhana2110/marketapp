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
  addDetails(item:registration){
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    console.log(body);
    return this._http.post(this.url2,body,{headers:head});
  }
  addDetails1(item:permanent){
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    console.log(body);
    return this._http.post(this.url,body,{headers:head});
  }
  // addtask2(item:present){
  //   let body=JSON.stringify(item);
  //   let head=new HttpHeaders().set('Content-Type','application/json');
  //   return this._http.post(this.url1,body,{headers:head});
  // }
  addtask3(item:qualification){
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url3,body,{headers:head});
  }
  addtask4(item:skill){
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url4,body,{headers:head});
  }
  addtask5(item:experience){
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url5,body,{headers:head});
  }
   getDetails(id){
    return this._http.get<permanent[]>(this.url+id);
  }
  getDetails1(id){
    return this._http.get<present[]>(this.url1+id);
  }
  getDetails2(id){
    return this._http.get<registration[]>(this.url2+id);
  }
  getDetails3(id){
    return this._http.get<qualification[]>(this.url3+id);
  }
  getDetails4(id){
    return this._http.get<skill[]>(this.url4+id);
  }
  getDetails5(id){
    return this._http.get<experience[]>(this.url5+id);
  }
  // edittask(item:permanent) {
  //   let head = new HttpHeaders().set('Content-Type', 'application/json');
  //   let body = JSON.stringify(item);
  //   return this._http.put(this.url + item.id, body, { headers: head });
  // }
  // edittask1(item:present) {
  //   let head = new HttpHeaders().set('Content-Type', 'application/json');
  //   let body = JSON.stringify(item);
  //   return this._http.put(this.url1 + item.id, body, { headers: head });
  // }
  // edittask2(item:registrationform) {
  //   let head = new HttpHeaders().set('Content-Type', 'application/json');
  //   let body = JSON.stringify(item);
  //   return this._http.put(this.url2 + item.id, body, { headers: head });
  // }
  // edittask3(item:qualification) {
  //   let head = new HttpHeaders().set('Content-Type', 'application/json');
  //   let body = JSON.stringify(item);
  //   return this._http.put(this.url3 + item.id, body, { headers: head });
  // }
  // edittask4(item:skill) {
  //   let head = new HttpHeaders().set('Content-Type', 'application/json');
  //   let body = JSON.stringify(item);
  //   return this._http.put(this.url4 + item.id, body, { headers: head });
  // }
  // edittask5(item:registrationform) {
  //   let head = new HttpHeaders().set('Content-Type', 'application/json');
  //   let body = JSON.stringify(item);
  //   return this._http.put(this.url5 + item.id, body, { headers: head });
  //}
}
