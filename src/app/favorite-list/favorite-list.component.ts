import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent {
  constructor(
    private firebaseService: FirebaseService,
    public dialog: MatDialog
  ) {}

  openDialog(movie): void {
    let dialogRef = this.dialog.open(FavoriteListComponent, {
      data: { movie: movie }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'favorites-dialog',
  templateUrl: 'favorites-dialog.html'
})
export class FavoritesDialog {

  constructor(
    public dialogRef: MatDialogRef<FavoritesDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private firebaseService: FirebaseService
  ) {}
  
  deleteFavorite(data) {
    this.firebaseService.deleteFavorite(data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

