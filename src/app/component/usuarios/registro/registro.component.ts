import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public email: string = '';
  public password: string = '';
  //uploadPercent: Observable<number>;
  //urlImage: Observable<string>;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }
  onUpload(e) {
    // console.log('subir', e.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/profile_${id}`;
    //const ref = this.storage.ref(filePath);
    //const task = this.storage.upload(filePath, file);
    //this.uploadPercent = task.percentageChanges();
    //task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();
  }
  onAddUser() {
    this.authService.registerUser(this.email, this.password)
      .then((res) => {
        this.authService.isAuth().subscribe(user => {
          if (user) {
            user.updateProfile({
              displayName: ''
            }).then(() => {
              this.router.navigate(['perfil']);
            }).catch((error) => console.log('error', error));
          }
        });
      }).catch(err => console.log('err', err.message));
  }
  onLoginRedirect(): void {
    this.router.navigate(['perfil']);
  }
}
