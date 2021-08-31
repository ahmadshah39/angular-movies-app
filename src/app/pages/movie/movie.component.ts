import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IMAGE_BASE_URL, POSTER_SIZE } from 'src/app/Helpers/API';
import { Movie, Cast, Crew, Credits } from 'src/app/Helpers/Types';
import { MovieService } from 'src/app/services/movie.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  movieId: number | null = null;
  movie: Movie | null = null;
  actors: Cast[] | null = null;
  directors: Crew[] | null = null;
  actorImgUrl: string = `${IMAGE_BASE_URL}${POSTER_SIZE}`;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      this.movieId = id;
    });
  }

  ngOnInit(): void {
    this.movieService.getMovie(this.movieId!).subscribe((movie: Movie) => {
      this.movie = movie;
    });
    this.movieService
      .getCredits(this.movieId!)
      .subscribe((credits: Credits) => {
        this.actors = credits.cast;
        this.directors = credits.crew.filter(
          (member: any) => member.job === 'Director'
        );
      });
    // console.log(this.movieService.getMovie(this.movieId!));
  }
}
