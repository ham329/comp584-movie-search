import { Injectable } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialog } from '../auth/components/login/login.component';

@Injectable()
export class FirebaseService {
  uid: string = '';
  constructor(private firebaseAuth: AngularFireAuth, private _router: Router, public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(LoginDialog);
  }

  async register(email: string, password: string) {
    this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        this._router.navigate(['dashboard']);
        console.log(res);
        // this.uid = res.user.uid;
      })
      .catch(err => console.log(err));
  }

  async login(email: string, password: string) {
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        this._router.navigate(['dashboard']);
        this.uid = res.user.uid;
      })
      .catch(err => console.log(err));
  }

  logout() {
    this.firebaseAuth.signOut();
    this._router.navigate(['']);
    this.uid = '';
    console.log('Signed out');
  }
}
