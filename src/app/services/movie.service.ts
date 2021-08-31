import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL, API_KEY } from '../Helpers/API';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovie(movieId: number = 0): Observable<any> {
    const endpoint: string = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    const res = this.http.get<any>(endpoint);
    // console.log(res);
    return res;
  }
  getCredits(movieId: number = 0): Observable<any> {
    const creditsEndpoint: string = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    const res = this.http.get<any>(creditsEndpoint);
    // console.log(res);
    return res;
  }
}
