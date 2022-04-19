import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie_search';

  nameM: string = '';

  movie(event: string){
  this.nameM = event;
  console.log(this.nameM);
  }
}


