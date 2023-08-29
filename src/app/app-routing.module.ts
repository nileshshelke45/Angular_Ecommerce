import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerComponent } from './seller/seller.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { authGuard } from './auth.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserComponent } from './user/user.component';
import { MaterialUiComponent } from './material-ui/material-ui.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'seller', component: SellerComponent}, 
  {path:'seller-home', component: SellerHomeComponent, canActivate: [authGuard]},
  {path:'seller-add-product', component: SellerAddProductComponent, canActivate:[authGuard]},
  {path:'seller-update-product/:id', component: SellerUpdateProductComponent, canActivate:[authGuard]},
  {path:'product-details/:productId', component: ProductDetailsComponent},
  {path:'users', component: UserComponent},
  {path:'material-ui', component: MaterialUiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
