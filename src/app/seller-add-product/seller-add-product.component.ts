import { Component } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { Product } from '../data-types';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {

  constructor(private product: ProductService){}     
  
  addProductMessage: string | undefined;          // Product Added Message

  productSubmit(data:Product){
    this.product.addProduct(data).subscribe((result)=>{   // Call addProduct API
      console.log(result);
      if(result){
        this.addProductMessage="Product is Successfully added";
      }
      setTimeout(() => (this.addProductMessage = undefined), 3000);
    });
  }


}
