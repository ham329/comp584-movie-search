import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

/**
 * @title Dynamic grid-list
 */
@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
   styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit{
  // tiles: Tile[] = [
  //   {text: 'One', cols: 1, rows: 5, color: 'lightblue'},
  //   {text: 'Two', cols: 1, rows: 5, color: 'lightgreen'},
  //   {text: 'Three', cols: 1, rows: 5, color: 'lightpink'},
  //   {text: 'Four', cols: 1, rows: 5, color: '#DDBDF1'},
  //   {text: 'Five', cols: 1, rows: 5, color: '#DDBDF1'},
  //   {text: 'Six', cols: 1, rows: 5, color: 'lightpink'},
  //   {text: 'Seven', cols: 1, rows: 5, color: 'lightgreen'},
  //   {text: 'Eight', cols: 1, rows: 5, color: 'lightblue'},
  //   {text: 'Nine', cols: 1, rows: 5, color: 'lightblue'},
  //   {text: 'Ten', cols: 1, rows: 5, color: 'lightgreen'},
  //   {text: 'Eleven', cols: 1, rows: 5, color: 'lightpink'},
  //   {text: 'Twelve', cols: 1, rows: 5, color: '#DDBDF1'},
  constructor(private firebaseService: FirebaseService) {}


   items = [
    {
      name: 'Movie 1',
      color: 'lightpink',
      cols: 1, rows: 5
      
    }, {
  
      name: 'Movie 2',
      color: 'lightgreen',
      cols: 1, rows: 5
    }, {
      name: 'Movie 3',
      color: 'lightblue',
      cols: 1, rows: 5
    }, {
      name: 'Movie 4',
      color: 'lightpink',
      cols: 1, rows: 5
    },{
      name: 'Movie 5',
      color: 'lightgreen',
      cols: 1, rows: 5
    },{
      name: 'Movie 6',
      color: 'lightblue',
      cols: 1, rows: 5

    },{
      name: 'Movie 7',
      color: 'lightpink',
      cols: 1, rows: 5
    },{
      name: 'Movie 8',
      color: 'lightblue',
      cols: 1, rows: 5
    },{
      name: 'Movie 9',
      color: 'lightgreen',
      cols: 1, rows: 5
    },{
      name: 'Movie 10',
      color: 'lightpink',
      cols: 1, rows: 5
    },{
      name: 'Movie 11',
      color: 'lightblue',
      cols: 1, rows: 5
    },{
      name: 'Movie 12',
      color: 'lightgreen',
      cols: 1, rows: 5
    }



  ];

delete(item) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

ngOnInit() {
    this.breakpoint = (window.innerWidth <= 300) ? 1 : 6;
  }
    onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 300) ? 1 : 6;
  }
  this.firebaseService
      .getFavorites()
  // delete(tile) {
  //   const index = this.tiles.indexOf(tile);
  //   this.tiles.splice(index, 1);
  // }
}
