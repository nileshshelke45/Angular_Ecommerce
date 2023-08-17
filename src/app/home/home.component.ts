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

  popularProducts: undefined | Product[]      // For Popular Products data

  trendyProducts: undefined | Product[]       // For Trendy Products data

  ngOnInit(){                
    this.product.popularProducts().subscribe((data)=>{  // Call popularProducts API to display Popular Products
      console.log(data);
      this.popularProducts=data; // add data in trendyProducts
    });
    this.product.trendyProducts().subscribe((data)=>{  // Call trendyProducts API to display Trendy Products
      this.trendyProducts=data;  // add data in trendyProducts
    });
  }

}
