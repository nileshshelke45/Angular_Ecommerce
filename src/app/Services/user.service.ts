import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Login, SignUp } from '../data-types';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }   // To call API

  userSignUp(user:SignUp){    // Use this function in User Component to get data
    this.http.post('http://localhost:3000/users',user,
    {observe: 'response'})        // To Check Response with Body 
    .subscribe((result)=>{
      console.log(result);
      if(result){
        localStorage.setItem('user',JSON.stringify(result.body))
        this.router.navigate(['/'])
      }
    })
  }

  reloadUser(){                 // It is use when we directly go to /Users then it will not shows User Sign Up after User Login
    if(localStorage.getItem('user')){
      this.router.navigate(['/'])
    }
  }

  invalidUser = new EventEmitter<boolean>(false)  // To Check User is Valid or Invalid

  userLogin(data:Login){
    this.http.get<SignUp[]>(`http://localhost:3000/users?email=${data.email}&password=${data.password}`,
    {observe: 'response'}).subscribe((result)=>{
      if(result && result.body?.length){  // ?.length means there is some data(Length will be present).
          this.invalidUser.emit(false);   
        localStorage.setItem('user',JSON.stringify(result.body[0]))
        this.router.navigate(['/'])
      }else{
        this.invalidUser.emit(true);
      }
    });
  }

}
