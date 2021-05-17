import {Component} from '@angular/core';

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
export class FavoriteListComponent {
  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 5, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 5, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 5, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 5, color: '#DDBDF1'},
    {text: 'Five', cols: 1, rows: 5, color: '#DDBDF1'},
    {text: 'Six', cols: 1, rows: 5, color: 'lightpink'},
    {text: 'Seven', cols: 1, rows: 5, color: 'lightgreen'},
    {text: 'Eight', cols: 1, rows: 5, color: 'lightblue'},
    {text: 'Nine', cols: 1, rows: 5, color: 'lightblue'},
    {text: 'Ten', cols: 1, rows: 5, color: 'lightgreen'},
    {text: 'Eleven', cols: 1, rows: 5, color: 'lightpink'},
    {text: 'Twelve', cols: 1, rows: 5, color: '#DDBDF1'},




  ];

}
