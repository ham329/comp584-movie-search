import { Injectable } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class FirebaseService {
  constructor(private firebaseAuth: AngularFireAuth) {}

  async register(email: string, password: string) {
    this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  async login(email: string, password: string) {
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  logout() {
    this.firebaseAuth.signOut();
    console.log('Signed out')
  }
}
