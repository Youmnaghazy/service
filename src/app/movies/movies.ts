import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies/movies-service';
import { Imovies } from '../imovies';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies',
  imports: [],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class Movies implements OnInit {
  moviesList:Imovies[]=[]
  moviesId!:Subscription
  private readonly moviesService=inject(MoviesService)
ngOnInit(): void {
 let moviesId= this.moviesService.getMovies().subscribe({
    next:(res)=>{
      console.log(res.results)
      this.moviesList=res.results
    },
    error:(err)=>{
      console.log(err);

    }
  })
}

}
