import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-movie',
  templateUrl: './cart-movie.component.html',
  styleUrls: ['./cart-movie.component.css']
})
export class CartMovieComponent implements OnInit {

  @Input() miMovies: any[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
