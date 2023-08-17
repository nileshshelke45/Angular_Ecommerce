import { Component } from '@angular/core';
import { SellerService } from '../Services/seller.service';
import { Router } from '@angular/router';
import { SignUp } from '../data-types';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent {

  constructor(private seller: SellerService, private router:Router) { } // To call Service

  showLogin=false;    // Toggle between Sign Up and Login
  authError:string = '';            // For Email or Password Incorrect

  ngOnInit():void {               // In Case of Refresh Page stay in particular User Page
    this.seller.reloadSeller()
  }

  signUp(data:SignUp){                                // For OnSubmit button Click and Call userSignUp API From Seller Service
     this.seller.userSignUp(data)
  }

  login(data:SignUp){                                // For OnSubmit button Click and Call userLogin API From Seller Service
    this.seller.userLogin(data)
    this.seller.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError="Email or Password is not correct"
      }
    })
 }

  openLogin(){                  // Toggle between Sign Up and Login
    this.showLogin=true;
  }

  openSignUp(){                 // Toggle between Sign Up and Login
    this.showLogin=false;
  }

  }

