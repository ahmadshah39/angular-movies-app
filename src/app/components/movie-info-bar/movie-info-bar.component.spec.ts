import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieInfoBarComponent } from './movie-info-bar.component';

describe('MovieInfoBarComponent', () => {
  let component: MovieInfoBarComponent;
  let fixture: ComponentFixture<MovieInfoBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieInfoBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieInfoBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
