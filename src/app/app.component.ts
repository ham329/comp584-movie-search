import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  constructor(private firebaseService: FirebaseService, private _route: Router) {}
  
  ngOnInit() {
    let uid = this.firebaseService.isLoggedIn();
    if(uid != null) {
      this.firebaseService.uid = uid;
      this._route.navigate(['dashboard']);
      console.log(uid);
    }
  }
}

