import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mybtn',
  imports: [],
  templateUrl: './mybtn.html',
  styleUrl: './mybtn.css',
})
export class Mybtn {
  @Input() receivedUserName:string=''
}
