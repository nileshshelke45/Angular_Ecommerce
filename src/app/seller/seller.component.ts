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

  showLogin=false;
  authError:string = '';            // For Email or Password Incorrect

  ngOnInit():void {
    this.seller.reloadSeller()
  }

  signUp(data:SignUp){                                // For OnSubmit button Click
     this.seller.userSignUp(data)
  }

  login(data:SignUp){                                // For OnSubmit button Click
    this.seller.userLogin(data)
    this.seller.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError="Email or Password is not correct"
      }
    })
 }

  openLogin(){
    this.showLogin=true;
  }

  openSignUp(){
    this.showLogin=false;
  }

  }

