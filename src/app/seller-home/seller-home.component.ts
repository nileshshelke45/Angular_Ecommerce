import { Component } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { Product } from '../data-types';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent {

  constructor(private product: ProductService){}

  ngOnInit(){
    this.list();
  }

  productList:undefined | Product[]                // For Listing the Products

  productMessage: undefined | string;  // For 

  deleteProduct(id:number){                 // For Delete the Product
    console.log("Id is " + id);
    this.product.deleteProduct(id).subscribe((result)=>{
      if(result){
        this.productMessage ="Product is deleted";
        this.list();
      }
    });
    setTimeout(() => {
      this.productMessage=undefined
    }, 3000);
  }

  list(){                                           // Refresh automatically when we Delete any Product
    this.product.productList().subscribe((result)=>{
      console.log(result);
      if(result){
        this.productList=result;
      }
    })  
  }


}
