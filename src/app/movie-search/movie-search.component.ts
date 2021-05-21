import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent {
  fieldsToDelete = [
    'adult',
    'backdrop_path',
    'original_language',
    'original_title',
    'popularity',
    'video',
    'vote_average',
    'vote_count',
    'release_date',
    'genre_ids',
    'id'
  ];
  page: number;
  results: any = [];
  show = false;
  slideConfig = { slidesToShow: 5, slidesToScroll: 1, dots: false };
  title: string = '';
  constructor(private _httpClient: HttpClient, public dialog: MatDialog) {}

  openDialog(movie): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: { movie: movie }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  fetch(title) {
    return this._httpClient.get(
      `https://api.themoviedb.org/3/search/movie?api_key=9cec5d000588db355cd5ddc00d5b51ed&language=en-US&query=${title}&page=${
        this.page
      }&include_adult=false`
    );
    // OMDB api link used previously before switching to themovidb api
    //  this._httpClient.get("https://www.omdbapi.com/?apikey=fb5a864e&s=" + title)
    //   .subscribe((data: any) => {
    //     this.results = data.Search;
    //     console.log(this.results);

    //   })
  }

  filterList(list: any) {
    return list.filter(x => {
      if (x.poster_path != null) {
        this.fieldsToDelete.forEach(field => delete x[field]);
        return x;
      }
    });
  }

  getMovies(title) {
    this.page = 1;
    this.fetch(title).subscribe((data: any) => {
      this.results = this.filterList(data.results);
      // console.log(this.results);
    });
    this.title = title;
    this.page++;
  }

  loadMore() {
    console.log(this.page);
    this.fetch(this.title).subscribe((data: any) => {
      this.results = [...this.results, ...this.filterList(data.results)];
      // console.log(data.results);
    });
    this.page++;
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html'
})
export class DialogOverviewExampleDialog {
  switchIcon = false;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private firebaseService: FirebaseService
  ) {}

  addFavorite(data) {
    this.firebaseService.addFavorite(data);
    this.switchIcon = !this.switchIcon;
  }

  deleteFavorite(data) {
    this.firebaseService.deleteFavorite(data);
    this.switchIcon = !this.switchIcon;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
