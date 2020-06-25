import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private router:Router,public auth:AuthService) {
    console.log("perfil component funcionando");
   }
ruta(){
  this.router.navigate(['productos']);
}
logout(){
  this.auth.logoutUser().then((data)=>{
    this.router.navigate(['home']);

    });

}
  ngOnInit(): void {
  }

}
