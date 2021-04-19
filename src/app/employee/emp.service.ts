import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { experience,skill,qualification,permanent,present,registration} from './details';
import { Country,State,city} from "./country"
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
  deleteDetails(Id){
      let head=new HttpHeaders().set('Content-Type','application/json');
      return this._http.delete(this.url2+Id,{headers:head});
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
     deleteDetails1(Id){
      let head=new HttpHeaders().set('Content-Type','application/json');
      return this._http.delete(this.url+Id,{headers:head});
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
  getDetails2(pid){
    return this._http.get<present[]>(this.url1+pid);
  }
  updateDetails2(item:present) {
    let head = new HttpHeaders().set('Content-Type', 'application/json');
    let body = JSON.stringify(item);
   return this._http.put(this.url1 + item.id, body, { headers: head });
   }
   deleteDetails2(Id){
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url1+Id,{headers:head});
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
   deleteDetails3(Id){
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url3+Id,{headers:head});
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
   deleteDetails4(Id){
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url5+Id,{headers:head});
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
   deleteDetails5(Id){
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url4+Id,{headers:head});
  }
  getCountries() {
    return [
     new Country(1, 'Andhrapradesh' ),
     new Country(2, 'Karnataka' ),

    ];
  }

  getStates() {
   return [
     new State(1, 1, 'Anantapur' ),
     new State(2, 1, 'Karnool' ),
     new State(3, 1, 'Chittor'),
     new State(4, 1, 'Kadapa'),
     new State(5, 2, 'ABC' ),
     new State(6, 2, 'DEF'),
     new State(7, 2, 'GHI' ),
     new State(8, 2, 'PQR' ),
     new State(9, 2, 'XYZ' ),


    ];
  }
  getcity(){


    return [
     new city(1,1,1,'anantapur'),
     new city(2,1,1,'anantapur'),
     new city(3,1,1,'anantapur'),
     new city(4,1,1,'anantapur'),
     new city(5,1,2,'anantapur'),
     new city(6,1,2,'anantapur'),
     new city(7,1,2,'anantapur'),
     new city(8,2,2,'anantapur'),
     new city(9,2,3,'anantapur'),
     new city(10,2,3,'anantapur'),
     new city(11,2,3,'anantapur'),
     new city(12,2,3,'anantapur'),
     new city(13,2,4,'anantapur'),
     new city(14,2,4,'anantapur'),
     new city(15,2,4,'anantapur'),
     new city(16,2,4,'anantapur'),

    ];

  }
}
