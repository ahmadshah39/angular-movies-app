import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { POPULAR_BASE_URL, SEARCH_BASE_URL } from '../Helpers/API';
import { Movies } from '../Helpers/Types';
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies(searchTerm: string = '', page: number = 1): Observable<Movies> {
    const endpoint: string = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${POPULAR_BASE_URL}&page=${page}`;
    const res = this.http.get<any>(endpoint);
    return res;
  }
}
