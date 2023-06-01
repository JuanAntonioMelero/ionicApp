import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicSlides, NavController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';
<<<<<<< HEAD
import Swal from 'sweetalert2';
=======
>>>>>>> 34962eb02cdb0b3b3697078dce0e43bb023f55fd
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public formSubmitted = false;
  form: any={
    email:'',
    password:''
  };
  type: boolean = true;
  loginUser = {
    email: 'test1@test.com',
    password: '123456'
  };
  constructor(
    private router: Router,
    private usuarioService:UsuarioService) { }

  ngOnInit() {
    this.form = new FormGroup({
    email: new FormControl(null, {
      validators: [Validators.required, Validators.email, ]
    }),
    password: new FormControl(null, {
      validators: [Validators.required, Validators.minLength(6)]
    }),
  });
  }
login(){}
changeType() {
  this.type = !this.type;
}

signIn() {

  console.log(this.form.value);
  this.formSubmitted = true;
  if ( this.form.invalid && this.formSubmitted) {
    return console.log('error');
  }
  this.usuarioService.login(this.form.value)
    .subscribe(resp => {
        this.router.navigateByUrl('/dashboard');
        console.log(resp);
    }, (err)=> {
      console.log(err);

<<<<<<< HEAD
      Swal.fire({
        title: "Error!",
        showClass: {
          popup: 'animate__shakeX'
        },
        text:  err.error.msg,
        icon: 'error',
        confirmButtonText: 'Aceptar',
        heightAuto:false
      });
=======
>>>>>>> 34962eb02cdb0b3b3697078dce0e43bb023f55fd
    });
}

forgotPassword() {
  console.log('forgot');

}

}
