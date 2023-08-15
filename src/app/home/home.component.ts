import { Component } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { Product } from '../data-types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private product: ProductService){}  // To Call API

  popularProducts: undefined | Product[]

  trendyProducts: undefined | Product[]

  ngOnInit(){                 // To Call API to display Popular Products
    this.product.popularProducts().subscribe((data)=>{
      console.log(data);
      this.popularProducts=data;
    });
    this.product.trendyProducts().subscribe((data)=>{     // Call API to display Trendy Products
      this.trendyProducts=data;
    });
  }

}
