import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isScrolling:boolean=false
  @HostListener('window:scroll') sayHello(){
    if(scrollY>300){
      this.isScrolling=true
    }
else{
  this.isScrolling=false
}
  }
}


