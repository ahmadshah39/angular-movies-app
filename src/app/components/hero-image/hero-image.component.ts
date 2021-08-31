import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/Helpers/Types';
@Component({
  selector: 'app-hero-image',
  templateUrl: './hero-image.component.html',
  styleUrls: ['./hero-image.component.scss'],
})
export class HeroImageComponent implements OnInit {
  @Input() heroMovie: Movie | null;
  @Input() imgUrl: string;
  constructor() {
    this.heroMovie = null;
    this.imgUrl = '';
  }

  ngOnInit(): void {}
}
