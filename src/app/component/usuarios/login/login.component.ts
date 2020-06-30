import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string = '';
  public password: string = '';

  constructor(public auth:AuthService,private router:Router,public afAuth: AngularFireAuth,) {
    console.log("Login component funcionando");
  }

  ngOnInit(): void {
  }
  onGoogleLogin(): void{
         this.auth.loginWithGoogle().then((data)=>{
          this.onLoginRedirect();
         console.log(data);
         }).catch(err=>console.log('err',err));
  }

  onLogin(): void {
    this.auth.loginEmailUser(this.email, this.password)
      .then((res) => {
        this.onLoginRedirect();
      }).catch(err => this.showswal());
  }

  showswal(){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Parece que tu contraseña es incorrecta!',
      footer: '<a href>Contactanos</a>'
    })
  }

  onLoginRedirect(): void {
    this.router.navigate(['perfil']);
  }
}
