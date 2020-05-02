import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { BannerComponent } from './component/banner/banner.component';
import { BlogComponent } from './component/blog/blog.component';
import { CartComponent } from './component/cart/cart.component';
import { CheckOutComponent } from './component/check-out/check-out.component';
import { ContactComponent } from './component/contact/contact.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderMenuComponent } from './component/header-menu/header-menu.component';
import { ShopComponent } from './component/shop/shop.component';
import { SingleProductComponent } from './component/single-product/single-product.component';
import { WishListComponent } from './component/wish-list/wish-list.component';
import { CustomExceptionHandler } from './exception/custom.exception.handler';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    BannerComponent,
    BlogComponent,
    CartComponent,
    CheckOutComponent,
    ContactComponent,
    FooterComponent,
    HeaderMenuComponent,
    ShopComponent,
    SingleProductComponent,
    WishListComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: CustomExceptionHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
