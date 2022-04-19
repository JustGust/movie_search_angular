import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetNameMovieService {

  @Output() movieNamne = new EventEmitter<string>();

  constructor() { }
}
