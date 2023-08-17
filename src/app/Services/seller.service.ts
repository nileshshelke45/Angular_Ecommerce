import { HttpClient } from '@angular/common/http'; 
import { EventEmitter, Injectable } from '@angular/core';
import { Login, SignUp } from '../data-types';           // For Data Types
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerLoggedIn = new BehaviorSubject<boolean>(false)    // To check Seller-Logged in or not

  isLoginError = new EventEmitter<boolean>(false)   // For Login Error

  constructor(private http: HttpClient, private router: Router) { }     // To Call API

  userSignUp(data:SignUp){                    // Seller SignUp API
    this.http.post('http://localhost:3000/seller', 
    data, 
    { observe: 'response' })  //Pass Object in Api(Observe: 'response )
    .subscribe((result) => {
      console.log(result)
      if(result){
      localStorage.setItem('seller', JSON.stringify(result.body)) // For add Data in LocalStorage
      this.router.navigate(['seller-home']);  //(Redirect Seller-Home)For Navigate Seller-Home 
      }
    });
  }
  
  reloadSeller() {                        //For Check if we Refresh the Page
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }

  userLogin(data:Login){                      // Seller Login API
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
    {observe: 'response'}                            // For Json Type Request
    ).subscribe((result:any)=>{
      console.log(result);
      if(result && result.body && result.body.length){ // Check result contains body and length
        console.log("User Logged in")
        localStorage.setItem('seller', JSON.stringify(result.body)) // For add Data in LocalStorage
        this.router.navigate(['seller-home']);  //(Redirect Seller-Home)For Navigate Seller-Home 
      }
      else{
        console.log("Login Failed")
        this.isLoginError.emit(true)
      }
    })
    }


}

