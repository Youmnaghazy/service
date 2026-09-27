import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsServices {
  private readonly httpClient =inject (HttpClient)

  getPosts():Observable<any>{
   return this.httpClient.get('https://jsonplaceholder.typicode.com/posts')
  }
}
