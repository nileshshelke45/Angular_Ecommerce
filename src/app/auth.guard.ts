import { CanActivateFn } from '@angular/router';
import { SellerService } from './Services/seller.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const sellerService = inject(SellerService);

  if(localStorage.getItem('seller')){  // If Seller is Login then go to Seller-home Page
    return true;
  }
   return sellerService.isSellerLoggedIn;
};


