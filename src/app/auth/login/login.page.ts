import { Component, OnInit } from '@angular/core';
import { IonicSlides, NavController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginUser = {
    email: 'test1@test.com',
    password: '123456'
  };
  constructor() { }

  ngOnInit() {
  }
login(){}
}
