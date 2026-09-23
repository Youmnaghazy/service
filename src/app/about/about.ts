import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { Alert } from '../alert/alert';
import { Mybtn } from '../mybtn/mybtn';

@Component({
  selector: 'app-about',
  imports: [Alert, Mybtn],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  @ViewChild('Myel') myelement!:ElementRef;

  sayHi(){
    console.log(this.myelement.nativeElement);
    this.myelement.nativeElement.classList.add('bg-red-600')
    
  }
}

