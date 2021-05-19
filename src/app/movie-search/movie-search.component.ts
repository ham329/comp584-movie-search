import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent {
  results: any = [];
  page: number;
  title: string = '';
  constructor(private _httpClient: HttpClient) {}

  getMovies(title) {
    this.page = 1;
    this._httpClient
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=9cec5d000588db355cd5ddc00d5b51ed&language=en-US&query=${title}&page=${
          this.page
        }&include_adult=false`
      )
      .subscribe((data: any) => {
        this.results = data.results;
        console.log(data.results);
      });

    // this._httpClient
    //   .get(
    //     `https://www.omdbapi.com/?apikey=fb5a864e&s=${title}&page=${this.page}`
    //   )
    //   .subscribe((data: any) => {
    //     this.results = data.Search;
    //     // console.log(this.results);
    //   });
    this.title = title;
    this.page++;
  }

  loadMore() {
    console.log(this.page);
    this._httpClient
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=9cec5d000588db355cd5ddc00d5b51ed&language=en-US&query=${
          this.title
        }&page=${this.page}&include_adult=false`
      )
      .subscribe((data: any) => {
        this.results = [...this.results, ...data.results];
        console.log(data.results);
      });
    this.page++;
    // this._httpClient
    //   .get(
    //     `https://www.omdbapi.com/?apikey=fb5a864e&s=${this.title}&page=${
    //       this.page
    //     }`
    //   )
    //   .subscribe((data: any) => {
    //     // this.results = [...this.results, ...data.Search];
    //     console.log(data.Search);
    //   });
  }

  ngOnInit() {}
}
