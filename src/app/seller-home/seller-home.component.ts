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

  productList:undefined | Product[]                // For Listing the Products

  productMessage: undefined | string;  // For Product Deleted Message

  ngOnInit(){
    this.list();
  }

  list(){                                           // Call productList API
    this.product.productList().subscribe((result)=>{
      console.log(result);
      if(result){
        this.productList=result;
      }
    })  
  }
 
  deleteProduct(id:number){                 // For Delete the Product(on Click)
    console.log("Id is " + id);
    this.product.deleteProduct(id).subscribe((result)=>{      // Call deleteProduct API
      if(result){
        this.productMessage ="Product is deleted";
        this.list();                // After delete automatically call list API to show Changes on same Page
      }
    });
    setTimeout(() => {
      this.productMessage=undefined
    }, 3000);
  }

  


}
