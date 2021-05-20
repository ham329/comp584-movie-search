import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from './firebase.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private fireabaseService: FirebaseService, private _router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (this.fireabaseService.isLoggedIn() != null) return true;
    this._router.navigate(['']);
    return false;
  }
}
