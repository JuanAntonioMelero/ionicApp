import { Injectable } from '@angular/core';
import { Componente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public menuOpts:Componente[]=  [{
    "icon": "american-football-outline",
    "name": "Action Sheet",
    "redirectTo": "/perfil"
  },
  {
    "icon": "alert-circle-outline",
    "name": "Alert",
    "redirectTo": "/alert"
  },
  {
    "icon": "beaker-outline",
    "name": "Avatar",
    "redirectTo": "/avatar"
  },
  {
    "icon": "radio-button-off-outline",
    "name": "Buttons",
    "redirectTo": "/button"
  },
  {
    "icon": "card-outline",
    "name": "Cards",
    "redirectTo": "/card"
  },
  {
    "icon": "checkmark-circle-outline",
    "name": "Checks",
    "redirectTo": "/check"
  },
  {
    "icon": "calendar-outline",
    "name": "DateTime",
    "redirectTo": "/date-time"
  }];
  constructor(  ) { }



}
