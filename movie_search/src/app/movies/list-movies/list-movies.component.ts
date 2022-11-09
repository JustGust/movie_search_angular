import { Component, Input, OnInit } from '@angular/core';
import { SearcherService } from 'src/app/services/searcher.service';
import { Movie } from 'src/app/models/movie';
import { GetNameMovieService } from 'src/app/partials/searcher/get-name-movie.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {

  moviesData: any[];
  movies: Movie[] = [];

  constructor(
    private _searcher: SearcherService,
    private _route: Router) {
    this.moviesData = [];
  }

  ngOnInit(): void {
    this._searcher.getMoviesYST().subscribe({
      next: (v: any) => {
        console.log(v.data);
        let data: any[] = v.data.movies;

        data.forEach(element => {
          this.moviesData.push({
            'Poster': element['large_cover_image'],
            'Title': element['title'],
            'Type': 'movie',
            'Year': element['year'],
            'imdbID': element['imdb_code'],
          });
        });
        this.movies = this.moviesData;
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => console.info('complete'),
    });
  }
}
