import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProfileManagementComponent } from './component/profile-management/profile-management.component';
import { AddressManagementComponent } from './component/address-management/address-management.component';
import { MyOrderComponent } from './component/my-order/my-order.component';



const routes: Routes = [
    {
     path:'',
     component: ProfileComponent,
     children:[
         {
             path: 'profile-management',
             component: ProfileManagementComponent

         },
         {
            path: 'address-management',
            component: AddressManagementComponent

        },
        {
          path: 'my-order',
          component: MyOrderComponent
        }
     ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class ProfileModuleRoutingModule{

}