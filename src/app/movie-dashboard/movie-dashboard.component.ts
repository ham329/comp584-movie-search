import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.css']
})
export class MovieDashboardComponent implements OnInit {

  constructor(private _router: Router) { }

  logout() {
    this._router.navigate(['']);
  }

  ngOnInit() {
  }

}