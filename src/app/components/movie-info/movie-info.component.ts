import { Component, OnInit, Input } from '@angular/core';
import {
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
} from 'src/app/Helpers/API';
import { Movie, Crew } from 'src/app/Helpers/Types';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss'],
})
export class MovieInfoComponent implements OnInit {
  @Input() movie: Movie | null = null;
  @Input() directors: Crew[] | null = null;
  img_url: string = `${IMAGE_BASE_URL}${BACKDROP_SIZE}`;
  thumb_url: string = `${IMAGE_BASE_URL}${POSTER_SIZE}`;
  constructor() {}

  ngOnInit(): void {}
}
