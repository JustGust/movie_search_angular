import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GetNameMovieService } from './get-name-movie.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  constructor(private serviceGetMovie: GetNameMovieService) { }

  @Output() movieSelected = new EventEmitter<string>();
  @Input() placeholder: string | undefined;
  name:string = '';

  ngOnInit(): void {
  }


  selectMovie(){
    this.serviceGetMovie.movieNamne.emit(this.name);
  }


}
