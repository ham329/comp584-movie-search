import { Component, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class FirebaseService {
  uid: string = '';
  favorites = [];
  constructor(
    private firebaseAuth: AngularFireAuth,
    private db: AngularFirestore,
    private _router: Router,
    public dialog: MatDialog
  ) {}

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
      .catch(err => {
        this.openDialog();
        console.log(err);
      });
  }

  async login(email: string, password: string) {
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        this._router.navigate(['dashboard']);
        this.uid = res.user.uid;
      })
      .catch(err => {
        this.openDialog();
        console.log(err);
      });
  }

  logout() {
    this.firebaseAuth.signOut();
    this._router.navigate(['']);
    this.uid = '';
    console.log('Signed out');
  }

  addFavorite(movie) {
    this.favorites.push(movie);
    this.db
      .collection('Users')
      .doc('0fWs1HjjBDOnZcHY65771xPopNT2')
      .set({ favorites: this.favorites });
  }

  deleteFavorite() {
    let temp = this.db
      .collection('Users')
      .doc('0fWs1HjjBDOnZcHY65771xPopNT2')
      .get()
      .subscribe(x => console.log(x.data()));
  }
}

@Component({
  selector: 'modal',
  templateUrl: './modal.html'
})
export class LoginDialog {}
