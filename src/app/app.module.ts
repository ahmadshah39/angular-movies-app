import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroImageComponent } from './components/hero-image/hero-image.component';
import { HomeComponent } from './pages/home/home.component';
import { ThumbComponent } from './components/thumb/thumb.component';
import { SerachBarComponent } from './components/serach-bar/serach-bar.component';
import { ButtonComponent } from './components/button/button.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MovieComponent } from './pages/movie/movie.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { MovieInfoBarComponent } from './components/movie-info-bar/movie-info-bar.component';
import { ActorsComponent } from './components/actors/actors.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroImageComponent,
    HomeComponent,
    ThumbComponent,
    SerachBarComponent,
    ButtonComponent,
    SpinnerComponent,
    MovieComponent,
    BreadcrumbComponent,
    MovieInfoComponent,
    MovieInfoBarComponent,
    ActorsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
