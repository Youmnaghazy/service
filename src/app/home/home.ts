import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Iproduct } from '../iproduct';
import { RecommendedProduct } from '../recommended-product/recommended-product';
import { Alert } from '../alert/alert';
import { Mybtn } from '../mybtn/mybtn';
import { Product } from '../product/product';
import { log } from 'console';
@Component({
  selector: 'app-home',
  imports: [RecommendedProduct, Alert, Mybtn, Product],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit , AfterViewInit ,OnDestroy {
 constructor(){
  console.log('constructor start');
  
 } 
 ngOnInit(): void {
     console.log('oninit start');
     
 }
 ngAfterViewInit(): void {
     console.log('view init start');
 }
 ngOnDestroy(): void {
     console.log('on destroy');
     
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
friends: string[]=['Ahmed','Ali','Amr','Rana','Nada','Mai']
productList:Iproduct[]=[
        {
            images: [
                "https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-1.jpeg",
                "https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-2.jpeg",
                "https://ecommerce.routemisr.com/Route-Academy-products/1680403397483-3.jpeg",
                "https://ecommerce.routemisr.com/Route-Academy-products/1680403397485-4.jpeg"
            ],
            title: "Woman Shawl",
            description: "Material\tPolyester Blend\nColour ",
            price: 191,
            imageCover: "https://ecommerce.routemisr.com/Route-Academy-products/1680403397402-cover.jpeg",
       id: "6428ebc6dc1175abc65ca0b9" ,
            onSale : true
        },
        {
            images: [
                "https://ecommerce.routemisr.com/Route-Academy-products/1680403266805-1.jpeg",
                "https://ecommerce.routemisr.com/Route-Academy-products/1680403266806-3.jpeg",
                "https://ecommerce.routemisr.com/Route-Academy-products/1680403266806-2.jpeg",
                "https://ecommerce.routemisr.com/Route-Academy-products/1680403266807-4.jpeg"
            ],
            title: "Woman Shawl",
            description: "Material\tPolyester Blend\nColour ",
            price:200,
            imageCover: "https://ecommerce.routemisr.com/Route-Academy-products/1680403266739-cover.jpeg",
            id: "6428eb43dc1175abc65ca0b3",
            onSale : false
        },
        {
            images: [
                "https://ecommerce.routemisr.com/Route-Academy-products/1680403156555-3.jpeg",
                "https://ecommerce.routemisr.com/Route-Academy-products/1680403156555-2.jpeg",
                "https://ecommerce.routemisr.com/Route-Academy-products/1680403156554-1.jpeg",
                "https://ecommerce.routemisr.com/Route-Academy-products/1680403156556-4.jpeg"
            ],

            title: "Woman Shawl",
            description: "Material\tPolyester Blend\nColour ",
            price: 149,
            imageCover: "https://ecommerce.routemisr.com/Route-Academy-products/1680403156501-cover.jpeg",
            id: "6428ead5dc1175abc65ca0ad",
            onSale : false
        },
        {

            images: [
                "https://ecommerce.routemisr.com/Route-Academy-products/1680402838330-1.jpeg",
                "https://ecommerce.routemisr.com/Route-Academy-products/1680402838331-3.jpeg",
                "https://ecommerce.routemisr.com/Route-Academy-products/1680402838332-4.jpeg",
                "https://ecommerce.routemisr.com/Route-Academy-products/1680402838331-2.jpeg",
            ],

            title: "Woman Shawl",
            description: "Material\tPolyester Blend\nColour ",
            price: 149,
            imageCover: "https://ecommerce.routemisr.com/Route-Academy-products/1680402838276-cover.jpeg",
            id: "6428e997dc1175abc65ca0a1",
            onSale : true
        },
        {
            images: [
                "https://ecommerce.routemisr.com/Route-Academy-products/1680402563676-2.jpeg",
                "https://ecommerce.routemisr.com/Route-Academy-products/1680402563676-3.jpeg",
                "https://ecommerce.routemisr.com/Route-Academy-products/1680402563677-4.jpeg",
                "https://ecommerce.routemisr.com/Route-Academy-products/1680402563675-1.jpeg",
            ],

            title: "Woman Shawl",
            description: "Material\tPolyester Blend\nColour ",
            price: 349,
            imageCover: "https://ecommerce.routemisr.com/Route-Academy-products/1680402563605-cover.jpeg",
            id: "6428e884dc1175abc65ca096",
            onSale : true
        },
        {
            images: [
                "https://ecommerce.routemisr.com/Route-Academy-products/1680402411883-2.jpeg",
                "https://ecommerce.routemisr.com/Route-Academy-products/1680402411883-3.jpeg",
                "https://ecommerce.routemisr.com/Route-Academy-products/1680402411883-1.jpeg"
            ],

            title: "Woman Bordeaux Long",
            description: "ShellFabric1 Cotton 65% Polyester 35%",
            price: 499,
            imageCover: "https://ecommerce.routemisr.com/Route-Academy-products/1680402411833-cover.jpeg",
            id: "6428e7ecdc1175abc65ca090",
            onSale : true
        },
        {
            images: [
                "https://ecommerce.routemisr.com/Route-Academy-products/1680402296306-3.jpeg",
                "https://ecommerce.routemisr.com/Route-Academy-products/1680402296305-1.jpeg",
                "https://ecommerce.routemisr.com/Route-Academy-products/1680402296305-2.jpeg"
            ],

            title: "Woman Brown Long ",
            description: "ShellFabric1 Cotton 65% Polyester 35%",
            price: 499,
            imageCover: "https://ecommerce.routemisr.com/Route-Academy-products/1680402295928-cover.jpeg",
            id: "6428e778dc1175abc65ca08a",
            onSale : true
        },
        {
            images: [
                "https://ecommerce.routemisr.com/Route-Academy-products/1680401893496-2.jpeg",
                "https://ecommerce.routemisr.com/Route-Academy-products/1680401893496-1.jpeg",
                "https://ecommerce.routemisr.com/Route-Academy-products/1680401893497-4.jpeg",
                "https://ecommerce.routemisr.com/Route-Academy-products/1680401893496-3.jpeg"
            ],

            title: "Woman Standart Fit",
            description: "Material\tPolyester Blend\nColour ",
            price: 499,
            imageCover: "https://ecommerce.routemisr.com/Route-Academy-products/1680401893316-cover.jpeg",
            id: "6428e5e6dc1175abc65ca084",
            onSale : true
        },
        {
            images: [
                "https://ecommerce.routemisr.com/Route-Academy-products/1680401672624-2.jpeg",
                "https://ecommerce.routemisr.com/Route-Academy-products/1680401672623-1.jpeg",
                "https://ecommerce.routemisr.com/Route-Academy-products/1680401672624-3.jpeg"
            ],

            title: "Relaxed Fit Knit",
            description: "Colour Name\tPink\nDepartment\tW",
            price: 499,
            imageCover: "https://ecommerce.routemisr.com/Route-Academy-products/1680401672268-cover.jpeg",
            id: "6428e509dc1175abc65ca07e",
            onSale : false
        },
        {
            images: [
                "https://ecommerce.routemisr.com/Route-Academy-products/1680401528923-1.jpeg",
                "https://ecommerce.routemisr.com/Route-Academy-products/1680401528924-2.jpeg"
            ],

            title: "Woman Socks",
            description: "Colour Name\tPink\nDepartment\tWomen\nMaterial",
            price: 199,
            imageCover: "https://ecommerce.routemisr.com/Route-Academy-products/1680401528864-cover.jpeg",
            id: "6428e479dc1175abc65ca078",
            onSale : false
        },
  ]
}




