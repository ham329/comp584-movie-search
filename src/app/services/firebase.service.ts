import { Component, Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class FirebaseService {
  uid: string = '';
  favorites: any = [];

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

  getFavorites() {
    // console.log(this.favorites);
    this.db
      .collection('Users')
      .doc('0fWs1HjjBDOnZcHY65771xPopNT2')
      .get()
      .subscribe(res => {this.favorites =  res.data()});
      // console.log(res.data());});
      // console.log(temp)
    // this.db
    //   .collection('Users')
    //   .doc('0fWs1HjjBDOnZcHY65771xPopNT2')
    //   .get()
    //   .subscribe(res => this.favorites = res.data());
    // console.log(this.favorites);
  }

  addFavorite(movie: { title: string; overview: string; poster_path: string }) {
    if (this.favorites.length == undefined) this.favorites = [movie];
    else {
      this.favorites.push(movie)
    }
      this.db
        .collection('Users')
        .doc('0fWs1HjjBDOnZcHY65771xPopNT2')
        .set({ favorites: this.favorites });
    console.log(this.favorites);
  }

  deleteFavorite(movie: {
    title: string;
    overview: string;
    poster_path: string;
  }) {
    let filteredFavorites = this.favorites.filter(x => x != movie);
    this.db
      .collection('Users')
      .doc('0fWs1HjjBDOnZcHY65771xPopNT2')
      .set({ favorites: filteredFavorites });
    console.log(this.favorites);
  }
}

@Component({
  selector: 'modal',
  templateUrl: './modal.html'
})
export class LoginDialog {}
