import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../Services/product.service';
import { Product } from '../data-types';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  productData: undefined | Product        // To display Product details on HTML
  
  constructor(private activateRoute: ActivatedRoute, private product: ProductService){}   // For getting productId

  ngOnInit(){                                            // For getting productId
    let productId = this.activateRoute.snapshot.paramMap.get('productId');
    console.log(productId);
    productId && this.product.getProduct(productId).subscribe((result)=>{
      console.log(result)
      this.productData=result;
    })
  }

  productQuantity:number = 1;               // For Product Quantity

  handleQuantity(value:string){             // For Product Quantity
    if(this.productQuantity<20 && value==='plus'){
      this.productQuantity+=1;
    }
    else if(this.productQuantity>1 && value==='min'){
      this.productQuantity-=1;
    }
  }

}
