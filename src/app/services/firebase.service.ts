import { Component, Injectable } from '@angular/core';
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

  isLoggedIn() {
    return JSON.parse(localStorage.getItem('user'));
  }

  async register(email: string, password: string) {
    this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        this._router.navigate(['dashboard']);
        console.log(res);
        this.uid = res.user.uid;
        localStorage.setItem('user', JSON.stringify(res.user.uid));
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
        localStorage.setItem('user', JSON.stringify(res.user.uid));
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
    localStorage.removeItem('user');
    console.log('Signed out');
  }

  getFavorites() {
    this.db
      .collection('Users')
      .doc(this.uid)
      .get()
      .subscribe(res => {
        this.favorites = res.data().favorites;
        console.log(this.favorites);
      });
  }

  addFavorite(movie: { title: string; overview: string; poster_path: string }) {
    if (this.favorites.length == undefined) this.favorites = [movie];
    else if (!this.favorites.includes(movie)) {
      this.favorites.push(movie);
    }
    this.db
      .collection('Users')
      .doc(this.uid)
      .set({ favorites: this.favorites });
    console.log(this.favorites);
  }

  deleteFavorite(movie: {
    title: string;
    overview: string;
    poster_path: string;
  }) {
    var index = this.favorites.findIndex(item => {
      return item.title == movie.title;
    });
    this.favorites.splice(index, 1);
    let filteredFavorites = this.favorites.filter(x => x != movie);
    this.db
      .collection('Users')
      .doc(this.uid)
      .set({ favorites: filteredFavorites });
    console.log(this.favorites);
  }
}

@Component({
  selector: 'modal',
  templateUrl: './modal.html'
})
export class LoginDialog {}
