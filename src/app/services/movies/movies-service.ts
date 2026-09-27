import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {

  private readonly httpClient=inject(HttpClient)
  getMovies() :Observable<any>{
   return this.httpClient.get('https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=5048ca8a1f314765ef7583f79f927eca')
  }
}
