import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearcherService } from 'src/app/services/searcher.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private searcher: SearcherService
  ) {}

  movie: Movie = new Movie();

  async ngOnInit() {    
    try {
      const req: any = await this.searcher.getMovie(
        this.activatedRoute.snapshot.params['id']
      );

      if (req.Response == 'True') {
        this.movie = req;        
      }
    } catch (error) {
      console.log(error);
    }
  }

  getActorsList(actors: any) {
    return actors.split(',');
  }

  getGenresList(genres: any) {
    return genres.split(',');
  }
}
