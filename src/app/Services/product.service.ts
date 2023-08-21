import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../data-types';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) { }             // To call API
  addProduct(data:Product){           // addProduct API
   return this.http.post('http://localhost:3000/products',data);
  }

  productList(){                  // productList API Call this in Seller-Home Component
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  deleteProduct(id:number){             // deleteProduct API
   return this.http.delete(`http://localhost:3000/products/${id}`); 
  }

  getProduct(id:string){         // For get Product ID to Update Particular Product and show Product details
    return this.http.get<Product>(`http://localhost:3000/products/${id}`);
  }

  updateProduct(product:Product){    // Update Product API for Update Product)
    return this.http.put<Product>(`http://localhost:3000/products/${product.id}`, product);
  }

  popularProducts(){          // popularProducts API for First 3 or 4 Popular Products in Home Component Carousel
    return this.http.get<Product[]>('http://localhost:3000/products?_limit=3'); 
  }

  trendyProducts(){             // trendyProducts API for Trendy Products in Home Component
    return this.http.get<Product[]>('http://localhost:3000/products?_limit=8');
  }



  }
