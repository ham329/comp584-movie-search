import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.css']
})
export class MovieDashboardComponent implements OnInit {
  url: string =
    'https://api.themoviedb.org/3/discover/movie?api_key=9cec5d000588db355cd5ddc00d5b51ed&language=en-US&region=US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=';
  actionList: any = [];
  adventureList: any = [];
  comedyList: any = [];
  horrorList: any = [];

  constructor(private http: HttpClient, private _router: Router) {}

  logout() {
    this._router.navigate(['']);
  }

  getGenre(genreID) {
    return this.http.get(`${this.url}${genreID}`);
  }

  slideConfig = { slidesToShow: 6, slidesToScroll: 6, dots: true };
  afterChange(e) {
    console.log('afterChange');
  }

  ngOnInit() {
    this.getGenre(28).subscribe((data: any) => {
      this.actionList = data.results.filter(x => x.poster_path != null);
      console.log(this.actionList);
    });
    this.getGenre(12).subscribe((data: any) => {
      this.adventureList = data.results.filter(x => x.poster_path != null);
    });
    this.getGenre(35).subscribe((data: any) => {
      this.comedyList = data.results.filter(x => x.poster_path != null);
    });
    this.getGenre(27).subscribe((data: any) => {
      this.horrorList = data.results.filter(x => x.poster_path != null);
    });
  }
}
// Movie genres and ids from themoviedb api
// Action- 28, Adventure - 12, Animation - 16, Comedy - 35, Crime - 80, Documentary - 99, Drama - 18, Family - 10751, Fantasy - 14, History - 36, Horror - 27, Music - 10402, Mystery - 9648, Romance - 10749, Science Fiction - 878, TV Movie 10770, Thriller - 53, War - 10752, Western - 37
