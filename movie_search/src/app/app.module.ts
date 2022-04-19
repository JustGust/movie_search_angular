import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideComponent } from './components/aside/aside.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftAsideComponent } from './components/left-aside/left-aside.component';
import { SearcherComponent } from './partials/searcher/searcher.component';
import { MovieComponent } from "./movies/movie/movie.component";
import { ListMoviesComponent } from "./movies/list-movies/list-movies.component";
import { CartMovieComponent } from './partials/cart-movie/cart-movie.component';
import { DetailsComponent } from "./movies/details/details.component";

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    NavbarComponent,
    FooterComponent,
    LeftAsideComponent,
    SearcherComponent,
    MovieComponent,
    ListMoviesComponent,
    CartMovieComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
