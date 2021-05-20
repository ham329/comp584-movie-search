import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {
  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.firebaseService
      .getFavorites()
  }
}
