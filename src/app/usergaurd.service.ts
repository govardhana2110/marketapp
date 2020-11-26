import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { LoadingService } from "./loading.service";
@Injectable({
  providedIn: 'root'
})
export class UsergaurdService implements CanActivate,CanLoad {

  constructor( private _router:Router,private _regData:LoadingService) { }

  canLoad(_route:Route,segments:UrlSegment[]):boolean{
    if (localStorage.getItem("user_name")!=null){
      return true;
    }
    else{
      // this._regData.redirectURL=_route.path;
      alert("login to access this page")
      return false;
    }

  }

   canActivate(
     route:ActivatedRouteSnapshot,
     state:RouterStateSnapshot
     ):boolean{
    if (localStorage.getItem("user_name")!=null){
      return true;
    }
    else{
      // this._regData.redirectURL=_route.path;
      // this._router.navigate(['/login']);
      alert("login to access this page")
      return false;
    }

  }
}
