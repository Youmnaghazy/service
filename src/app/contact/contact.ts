import { Component, inject, OnInit } from '@angular/core';
import { PostsServices } from '../services/posts/posts-services';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {
  private readonly postsServices =inject(PostsServices)
  
ngOnInit(): void {
  this.postsServices.getPosts().subscribe({
    next:(res)=>{
      console.log(res);


    },
    error:(err)=>{
  console.log(err);

    }

  })
}
}
