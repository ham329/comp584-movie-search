import { Component } from '@angular/core';
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
  constructor(private _httpClient: HttpClient) {}


  results: any = [];
  poster:any=[];
  show=false;
  getMovies(title) {
    this._httpClient.get("https://www.omdbapi.com/?apikey=fb5a864e&s=" + title)
      .subscribe((data: any) => {
        this.results = data.Search;
        this.show=true;
        console.log(this.results);

      })

  filterList(list: any) {
    return list.filter(x => {
      if (x.poster_path != null) {
        this.fieldsToDelete.forEach(field => delete x[field]);
        return x;
      }
    });

  }
 
 slideConfig = { slidesToShow: 5, slidesToScroll: 1, dots: false };
  afterChange(e) {
    console.log('afterChange');
  }

  fetch(title) {
    return this._httpClient.get(
      `https://api.themoviedb.org/3/search/movie?api_key=9cec5d000588db355cd5ddc00d5b51ed&language=en-US&query=${title}&page=${
        this.page
      }&include_adult=false`
    );
  }

  getMovies(title) {
    this.page = 1;
    this.fetch(title).subscribe((data: any) => {
      this.results = this.filterList(data.results);
      console.log(this.results);
    });
    this.title = title;
    this.page++;
  }

  loadMore() {
    console.log(this.page);
    this.fetch(this.title).subscribe((data: any) => {
      this.results = [...this.results, ...this.filterList(data.results)];
      console.log(data.results);
    });
    this.page++;
  }
}
