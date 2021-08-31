import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-thumb',
  templateUrl: './thumb.component.html',
  styleUrls: ['./thumb.component.scss'],
})
export class ThumbComponent implements OnInit {
  @Input() movieId: number | null;
  @Input() thumbUrl: string;
  @Input() movieImgUrl: string;
  constructor() {
    this.movieId = null;
    this.thumbUrl = '';
    this.movieImgUrl = '';
  }

  ngOnInit(): void {}
}
