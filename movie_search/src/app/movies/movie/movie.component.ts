import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { GetNameMovieService } from 'src/app/partials/searcher/get-name-movie.service';
import { SearcherService } from 'src/app/services/searcher.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  constructor(
    private serviceGetMovie: GetNameMovieService,
    private searcher: SearcherService,
    private route: Router
  ) {}

  movieName: string = '';
  movies: Movie[] = [];
  img: boolean = true;

  ngOnInit(): void {
    this.serviceGetMovie.movieNamne.subscribe(async (data) => {
      if (data.length <= 0) {
        Swal.fire(
          'Sin resultado',
          'Ingresa el nombre de una pelicula',
          'warning'
        );
      } else {
        try {
          const req: any = await this.searcher.getMovies(data, 'movie');

          if (req.Response == 'True') {
            this.img = false;
            this.movies = req.Search;
            this.route.navigate(['/', 'MovieComponent']);
      
          } else {
            Swal.fire('Sin resultado', req.Error, 'error');
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  }
}
