import { TestBed } from '@angular/core/testing';

import { GetNameMovieService } from './get-name-movie.service';

describe('GetNameMovieService', () => {
  let service: GetNameMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetNameMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
