import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot,Router, RouterStateSnapshot, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate {

  constructor(private router: Router  ) {}



   canActivate(): Observable<boolean> | Promise<boolean> | boolean {

    console.log('paso por el guard');
    if(localStorage.getItem("token")){
         return true;
       }
    else{
        this.router.navigateByUrl('/login');
        return false;
        }
   }

}
