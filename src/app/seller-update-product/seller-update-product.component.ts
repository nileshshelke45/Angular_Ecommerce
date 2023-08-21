import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../Services/product.service';
import { Product } from '../data-types';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent {

constructor(private route: ActivatedRoute, private product: ProductService){} // For getting Particular ID and data to Update Particular Product(Prefill)

productData: undefined | Product    // Prefill data for Updating

productMessage: undefined | string  // For Display Product Updated Successfully message

  ngOnInit(){
    let productId = this.route.snapshot.paramMap.get('id') // For getting Particular ID and data to Update Particular Product(Prefill)
    console.log(productId);
    productId && this.product.getProduct(productId).subscribe((data)=>{  // Call getProduct API to get particular ID
      console.log(data);
      this.productData = data;      // Prefill data for Updating
    });
  }


  updateSubmit(data:Product){           // For Click on Submit
    console.log(data); 
    if(this.productData){
      data.id = this.productData.id;    // Push ID in data
    }       
    this.product.updateProduct(data).subscribe((result)=>{      // Call updateProduct API
      if(result){
        this.productMessage="Product has Updated"; // Product Update Message
      }
    });
    setTimeout(()=>{
      this.productMessage= undefined;
    },3000);
  }
}
