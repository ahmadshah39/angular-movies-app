import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movies, Movie } from 'src/app/Helpers/Types';
import {
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
} from 'src/app/Helpers/API';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movies: Movies = {
    page: 1,
    results: [] as Movie[],
    total_pages: 0,
    total_results: 0,
  };
  searchTerm: string = '';
  img_url: string = `${IMAGE_BASE_URL}${BACKDROP_SIZE}`;
  thumb_url: string = `${IMAGE_BASE_URL}${POSTER_SIZE}`;
  buttonText: string = 'Load More';
  loading: boolean = false;
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.loading = !this.loading;
    this.moviesService.getMovies().subscribe((movies) => {
      this.movies = { ...movies };
      this.loading = !this.loading;
    });
  }
  onSearch(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.loading = !this.loading;
    this.moviesService.getMovies(searchTerm).subscribe((movies) => {
      this.movies = { ...movies };
      this.loading = !this.loading;
    });
  }
  onBtnClick(): void {
    this.movies.page = this.movies.page + 1;
    this.loading = !this.loading;
    this.moviesService
      .getMovies(this.searchTerm, this.movies.page)
      .subscribe((movies) => {
        this.movies = {
          ...movies,
          results:
            movies.page > 1
              ? [...this.movies.results, ...movies.results]
              : (this.movies.results = movies.results),
        };
        this.loading = !this.loading;
      });
  }
}
