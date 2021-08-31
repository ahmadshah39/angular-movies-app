import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-info-bar',
  templateUrl: './movie-info-bar.component.html',
  styleUrls: ['./movie-info-bar.component.scss'],
})
export class MovieInfoBarComponent implements OnInit {
  @Input() time: number | null = null;
  @Input() budget: number | null = null;
  @Input() revenue: number | null = null;
  constructor() {}

  ngOnInit(): void {}
}
