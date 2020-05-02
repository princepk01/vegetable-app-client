import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../profile-module/profile/profile.component';
import { ProfileManagementComponent } from './component/profile-management/profile-management.component';
import { AddressManagementComponent } from './component/address-management/address-management.component';
import { ProfileModuleRoutingModule } from './profile-module-routing.module';
import { ProfileMenuComponent } from './component/profile-menu/profile-menu.component';
import { MyOrderComponent } from './component/my-order/my-order.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [
        ProfileComponent,
        ProfileManagementComponent,
        AddressManagementComponent,
        ProfileMenuComponent,
        MyOrderComponent
    ],
    imports: [
      CommonModule,
      ProfileModuleRoutingModule,
      FormsModule,
      HttpClientModule
    ]
  })

export class ProfileModuleModule{

}