import { AfterViewInit, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RecommendedProduct } from '../recommended-product/recommended-product';
import { Alert } from '../alert/alert';
import { Mybtn } from '../mybtn/mybtn';
import { Product } from '../product/product';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
@Component({
  selector: 'app-home',
  imports: [RecommendedProduct, Alert, Mybtn, Product,MatFormFieldModule, MatInputModule, MatDatepickerModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  providers: [provideNativeDateAdapter()],

})
export class Home  {

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




