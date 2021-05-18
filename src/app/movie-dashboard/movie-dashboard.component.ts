import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.css']
})
export class MovieDashboardComponent implements OnInit {
  url: string =
    'https://api.themoviedb.org/3/discover/movie?api_key=9cec5d000588db355cd5ddc00d5b51ed&language=en-US&region=US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=';
  actionList: any = [];
  romanceList: any = [];
  comedyList: any = [];
  horrorList: any = [];
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
  slideConfig = { slidesToShow: 6, slidesToScroll: 6, dots: true };

  constructor(
    private http: HttpClient,
    private firebaseService: FirebaseService
  ) {}

  filterList(list: any) {
    return list.filter(x => {
      if (x.poster_path != null) {
        this.fieldsToDelete.forEach(field => delete x[field]);
        return x;
      }
    });
  }

  getGenre(genreID: number) {
    return this.http.get(`${this.url}${genreID}`);
  }

  afterChange(e) {
    console.log('afterChange');
  }

  logout() {
    this.firebaseService.logout();
  }

  getFavorites() {
    this.firebaseService.getFavorites();
  }

  ngOnInit() {
    this.getFavorites();
    console.log(this.firebaseService.favorites)
    this.getGenre(28).subscribe((data: any) => {
      this.actionList = this.filterList(data.results);
    });
    // this.getGenre(10749).subscribe((data: any) => {
    //   this.romanceList = this.filterList(data.results);
    // });
    // this.getGenre(35).subscribe((data: any) => {
    //   this.comedyList = this.filterList(data.results);
    // });
    // this.getGenre(27).subscribe((data: any) => {
    //   this.horrorList = this.filterList(data.results);
    // });
  }
}
// Movie genres and ids from themoviedb api
// Action- 28, Adventure - 12, Animation - 16, Comedy - 35, Crime - 80, Documentary - 99, Drama - 18, Family - 10751, Fantasy - 14, History - 36, Horror - 27, Music - 10402, Mystery - 9648, Romance - 10749, Science Fiction - 878, TV Movie 10770, Thriller - 53, War - 10752, Western - 37
