import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  menuType: string = 'default';       // Hide Home Page Menu after Login

  sellerName: string ='';

  userName: string ='';

  constructor(private route: Router, private product: ProductService){}

  ngOnInit() {                                   // If there any changes in Router then we get values                                              
    this.route.events.subscribe((val:any)=>{    
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){  //Check Seller is Present in URL or not
            let sellerStore = localStorage.getItem('seller');
            let sellerData = sellerStore && JSON.parse(sellerStore)[0]; // To convert Stringyfy data into Json
            this.sellerName = sellerData.name;
            this.menuType="seller"

        }else if(localStorage.getItem('user')){
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore);  // To convert Stringyfy data into Json
          this.userName = userData.name;
          this.menuType="user"

        }else {
          this.menuType="default"
        }
      }
    });

  }


  logoutSeller(){
    localStorage.removeItem('seller');
    this.route.navigate(['/']);
  }

  logoutUser(){
    localStorage.removeItem('user');
    this.route.navigate(['/users']);
  }


}
