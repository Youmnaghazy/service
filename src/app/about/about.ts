import { Component, ElementRef, inject, OnInit, ViewChild, viewChild } from '@angular/core';
import { Alert } from '../alert/alert';
import { Mybtn } from '../mybtn/mybtn';
import { DataService } from '../services/data-service/data-service';

@Component({
  selector: 'app-about',
  imports: [Alert, Mybtn],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit {
friends:string[]=[]
userName:string='Yomna'
count:number=0
private readonly data=inject(DataService)

constructor(){
  this.friends=this.data.friendsList
}


ngOnInit(): void {
  this.data.friendsList.pop()
}

changeName(){
  this.userName='Nada'
}
changeCount(){
  this.count+=1
}
}


