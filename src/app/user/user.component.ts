import { Component } from '@angular/core';
import { Login, SignUp } from '../data-types';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  showLogin=true;

  invalidUserDetails: string ="";

  constructor(private user: UserService) {}       // To Call User Service


  ngOnInit(){                // It is use when we directly go to /Users then it will not shows User Sign Up after User Login.
    this.user.reloadUser();
  }


  signUpSubmit(data:SignUp){          // On Click Submit
    this.user.userSignUp(data)
  }

  loginSubmit(data:Login){              // On Click Submit
    this.user.userLogin(data);
    this.user.invalidUser.subscribe((result)=>{
      if(result){
        this.invalidUserDetails="Please enter valid user details"
      }
    })
  }

  openSignUp(){
    this.showLogin=false;
  }

  openLogin(){
    this.showLogin=true;
  }


}
