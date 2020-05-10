import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../profile-module/profile/profile.component';
import { ProfileManagementComponent } from './component/profile-management/profile-management.component';
import { AddressManagementComponent } from './component/address-management/address-management.component';
import { ProfileModuleRoutingModule } from './profile-module-routing.module';
import { ProfileMenuComponent } from './component/profile-menu/profile-menu.component';
import { MyOrderComponent } from './component/my-order/my-order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './component/add-product/add-product.component';
import { AddProductItemComponent } from './component/add-product-item/add-product-item.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        ProfileComponent,
        ProfileManagementComponent,
        AddressManagementComponent,
        ProfileMenuComponent,
        MyOrderComponent,
        AddProductComponent,
        AddProductItemComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      ProfileModuleRoutingModule,
      NgbModule,
    ],
    bootstrap: [ProfileComponent]
  })

export class ProfileModuleModule{

}