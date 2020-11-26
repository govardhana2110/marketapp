import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { registration } from './details';
import { EmpService } from './emp.service';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class UserresolverService implements Resolve<registration[]> {

  constructor(private  _userData:EmpService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<registration[]> {
  return this._userData.getallDetails().pipe(
    map((x :registration[])=>{
      return x;

    })
  );
  }
}
