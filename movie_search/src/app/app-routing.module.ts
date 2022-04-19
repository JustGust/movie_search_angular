import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMoviesComponent } from "./movies/list-movies/list-movies.component";
import { MovieComponent } from "./movies/movie/movie.component";
import { DetailsComponent } from "./movies/details/details.component";

const routes: Routes = [
  {path: '', component: MovieComponent},
  {path: 'ListMoviesComponent', component: ListMoviesComponent},
  {path: 'MovieComponent', component: MovieComponent},
  {path: 'MovieComponent/DetailsComponent/:id', component: DetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
