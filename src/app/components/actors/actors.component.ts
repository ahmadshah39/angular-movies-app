import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss'],
})
export class ActorsComponent implements OnInit {
  @Input() name: string = '';
  @Input() character: string = '';
  @Input() image: string = '';
  @Input() actorImgUrl: string = '';
  constructor() {}

  ngOnInit(): void {}
}
