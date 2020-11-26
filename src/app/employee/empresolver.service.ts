import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EditdetailsComponent } from './editdetails/editdetails.component';

@Injectable({
  providedIn: 'root'
})
export class EmpresolverService implements CanDeactivate<EditdetailsComponent> {

  constructor() { }
  canDeactivate(component: EditdetailsComponent,
     currentRoute: ActivatedRouteSnapshot,
     currentState: RouterStateSnapshot,
      nextState?: RouterStateSnapshot): boolean  {
    return confirm ('Your changes are not saved,sure do you want to leave this page?')
  }
}
