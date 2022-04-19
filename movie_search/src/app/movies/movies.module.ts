import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MoviesRoutingModule } from './movies-routing.module';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { MovieComponent } from './movie/movie.component';
import { DetailsComponent } from './details/details.component';




@NgModule({
  declarations: [
    ListMoviesComponent,
    MovieComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MoviesRoutingModule
    
  ]
})
export class MoviesModule { }
