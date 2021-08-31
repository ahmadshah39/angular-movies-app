import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-serach-bar',
  templateUrl: './serach-bar.component.html',
  styleUrls: ['./serach-bar.component.scss'],
})
export class SerachBarComponent implements OnInit {
  @Output() onSearch: EventEmitter<any> = new EventEmitter();
  searchTerm: string = '';
  constructor() {}

  ngOnInit(): void {}
  onChange() {
    this.onSearch.emit(this.searchTerm);
  }
}
