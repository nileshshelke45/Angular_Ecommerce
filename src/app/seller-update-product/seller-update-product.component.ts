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

constructor(private route: ActivatedRoute, private product: ProductService){}      // For getting Particular ID and data to Update Particular Product

  ngOnInit(){
    let productId = this.route.snapshot.paramMap.get('id') // For getting Particular ID and data to Update Particular Product
    console.log(productId);
    productId && this.product.getProduct(productId).subscribe((data)=>{
      console.log(data);
      this.productData = data;
    });
  }

  productData: undefined | Product          // Prefill data for Updating

  productMessage: undefined | string        // For Display Product Updated Successfully message


  updateSubmit(data:Product){           // For Click on Submit
    console.log(data); 
    if(this.productData){
      data.id = this.productData.id;
    }       
    this.product.updateProduct(data).subscribe((result)=>{
      if(result){
        this.productMessage="Product has Updated";
      }
    });
    setTimeout(()=>{
      this.productMessage= undefined;
    },3000);
  }
}
