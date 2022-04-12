import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { MovieComponent } from './movie/movie.component';


@NgModule({
  declarations: [
    ListMoviesComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
