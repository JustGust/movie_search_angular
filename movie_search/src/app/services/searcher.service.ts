import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SearcherService {

  constructor(private http: HttpClient) { }

  private urlYST: string = 'https://yts.mx/api/v2/list_movies.json/?page=1';
  private url: string = 'http://www.omdbapi.com/';
  private apiKey: string = '7e8ffdcf';

  getMovies(name: string, type: string){
  const movies = this.http.get(`${this.url}?apiKey=${this.apiKey}&s=${name}&type=${type}`).toPromise();
  return movies;
  }

  getMovie(id: string){
   const movie = this.http.get(`${this.url}?apiKey=${this.apiKey}&i=${id}`).toPromise();
   return movie;
  }

  getMoviesYST(){
    return this.http.get(this.urlYST);
  }
}

