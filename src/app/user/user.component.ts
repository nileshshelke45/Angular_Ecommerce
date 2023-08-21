import { Component } from '@angular/core';
import { Login, SignUp } from '../data-types';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  showLogin=true;      // Toggle betweeen SignUp and Login

  invalidUserDetails: string ="";       // For Invalid User

  constructor(private user: UserService) {}       // To Call User Service


  ngOnInit(){ // It is use when we directly go to /Users then it will not shows User Sign Up after User SignUp.
    this.user.reloadUser();
  }


  signUpSubmit(data:SignUp){    // On Click Submit
    this.user.userSignUp(data)  // Call userSignUp API
  }

  loginSubmit(data:Login){      // On Click Submit
    this.user.userLogin(data);  // Call userLogin API
    this.user.invalidUser.subscribe((result)=>{
      if(result){
        this.invalidUserDetails="Please enter valid user details"
      }
    })
  }

  openSignUp(){                 // Toggle betweeen SignUp and Login
    this.showLogin=false;
  }

  openLogin(){                  // Toggle betweeen SignUp and Login
    this.showLogin=true;
  }


}
