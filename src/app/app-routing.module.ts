import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ShopComponent } from './component/shop/shop.component';
import { AboutComponent } from './component/about/about.component';
import { BlogComponent } from './component/blog/blog.component';
import { CartComponent } from './component/cart/cart.component';
import { CheckOutComponent } from './component/check-out/check-out.component';
import { ContactComponent } from './component/contact/contact.component';
import { SingleProductComponent } from './component/single-product/single-product.component';
import { WishListComponent } from './component/wish-list/wish-list.component';
import { ShowProductsComponent } from './component/show-products/show-products.component';
import { ShowSingleProductComponent } from './component/show-single-product/show-single-product.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'check-out',
    component: CheckOutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'single-product',
    component: SingleProductComponent
  },
  {
    path: 'wish-list',
    component: WishListComponent
  },
  {
    path: 'show-products',
    component: ShowProductsComponent
  },
  {
    path: 'show-single-product',
    component: ShowSingleProductComponent
  },
  { 
      path: 'profile', 
      loadChildren: () => import(`./profile-module/profile-module.module`).then(m => m.ProfileModuleModule) 
   },
];

// const routes: Routes = [
//   {
//     path: '',
//     component: HomeComponent

//   },
//   { path: 'profile', loadChildren: () => 
//     import(`./profile-module/profile-module.module`).then(m => m.ProfileModuleModule) 
//   },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
