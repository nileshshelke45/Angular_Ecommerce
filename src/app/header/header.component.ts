import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  menuType: string = 'default';       // For Hide Home Page Menu after Login

  sellerName: string ='';             // For Seller Name

  userName: string ='';               // For USer Name

  constructor(private route: Router, private product: ProductService){}

  ngOnInit() {                                   // If there any changes in Router then we get values                                              
    this.route.events.subscribe((val:any)=>{    
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){  //Check Seller is Present in URL or not
            let sellerStore = localStorage.getItem('seller');   // For SellerName
            let sellerData = sellerStore && JSON.parse(sellerStore)[0]; // To convert Stringyfy data into Json
            this.sellerName = sellerData.name;    // For SellerName
            this.menuType="seller"  // For Hide Home Page Menu after Login

        }else if(localStorage.getItem('user')){   // Check User is in LocalStorage(User SignUp or Not)
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore);  // To convert Stringyfy data into Json
          this.userName = userData.name;   // For USerName
          this.menuType="user"  // For Hide Home Page Menu after SignUp

        }else {
          this.menuType="default"
        }
      }
    });

  }

  logoutSeller(){                               // Seller Logout
    localStorage.removeItem('seller');
    this.route.navigate(['/']);
  }

  logoutUser(){                                 // User Logout
    localStorage.removeItem('user');
    this.route.navigate(['/users']);
  }


}
