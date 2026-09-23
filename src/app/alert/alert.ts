import { Component, ContentChild, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  imports: [],
  templateUrl: './alert.html',
  styleUrl: './alert.css',
})
export class Alert {
@ContentChild ('subElment') myElement!:ElementRef
test(){
console.log(this.myElement.nativeElement);
}
}
