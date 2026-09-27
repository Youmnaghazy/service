import { AfterViewInit, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RecommendedProduct } from '../recommended-product/recommended-product';
import { Alert } from '../alert/alert';
import { Mybtn } from '../mybtn/mybtn';
import { Product } from '../product/product';
import { log } from 'console';
import { DataService } from '../services/data-service/data-service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  imports: [RecommendedProduct, Alert, Mybtn, Product],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home  {

constructor(){
  let x = new Observable(()=>{
    console.log('yes obs');

  })
  x.subscribe()
}





  sayHi(element:HTMLHeadingElement){
   element.classList.add('bg-red-500')
  }
userName:string=""
userRole:string='admin'
styleOption:object={
  'background-color':'red',
  'padding':'20px'
}

}




