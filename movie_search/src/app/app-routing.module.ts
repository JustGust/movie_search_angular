import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMoviesComponent } from "./movies/list-movies/list-movies.component";
import { MovieComponent } from "./movies/movie/movie.component";

const routes: Routes = [
  {path: '', component: ListMoviesComponent},
  {path: 'ListMoviesComponent', component: ListMoviesComponent},
  {path: 'MovieComponent', component: MovieComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
