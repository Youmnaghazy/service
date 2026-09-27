import { Component, inject, Input, OnInit } from '@angular/core';
import { ProductService } from '../services/product-service/product-service';
import { IProduct } from '../iproduct';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnInit {
  productList:IProduct[]=[];
private readonly productService=inject(ProductService)
ngOnInit(): void {
  this.productService.getProducts().subscribe({
    next:(res)=>{
      console.log(res);
      this.productList=res

    },
    error:(err)=>{
      console.log(err);

    }
  })
}
}
