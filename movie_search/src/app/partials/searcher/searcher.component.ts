import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  constructor() { }

  @Output() movieSelected = new EventEmitter<string>();
  @Input() placeholder: string | undefined;
  name:string = '';

  ngOnInit(): void {
  }


  selectMovie(){
    this.movieSelected.emit(this.name);
  }


}
