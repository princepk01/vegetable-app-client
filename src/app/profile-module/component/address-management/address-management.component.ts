import { Component, OnInit } from '@angular/core';
import { ManageAddressModel } from 'src/app/model/manage.address.model';
import { CommonServiceService } from 'src/app/service/common-service.service';
import { UserModel } from 'src/app/model/user.model';

@Component({
  selector: 'app-address-management',
  templateUrl: './address-management.component.html',
  styleUrls: ['./address-management.component.css']
})
export class AddressManagementComponent implements OnInit {

  constructor(
    private commonService: CommonServiceService
  ) { }

  ngOnInit(): void {
    this.getAddressByUserId();
  }
  address = false;
  manageAddress = true;
  addAddress() {
    this.address = true;
    this.manageAddress = false;
  }
  cancelAdress() {
    this.address = false;
    this.manageAddress = true;
  }

  manageAddressModel = new ManageAddressModel();
  userModel = new UserModel();
  saveAddress() {
    var usreInfo = localStorage.getItem('userInfo');
    this.userModel = JSON.parse(usreInfo);
    this.manageAddressModel.userId = this.userModel.id;
    console.log(JSON.stringify(this.manageAddressModel));
    this.commonService.saveOrLogin(this.manageAddressModel, 'address/save-address').subscribe((res: any) => {
      if (res.status) {
        this.manageAddressModel = new ManageAddressModel();
        this.getAddressByUserId();
        this.cancelAdress();
      }
    });
  }

  addressList = [];
  getAddressByUserId() {
    var usreInfo = localStorage.getItem('userInfo');
    this.userModel = JSON.parse(usreInfo);
    this.commonService.getAddressByUserId(this.userModel.id).subscribe((res: any) => {
      console.log(res.data);
      if (res.status) {
        this.addressList = res.data;
      }
    });
  }

  editAddressById(addressId:number){
    this.commonService.editAddressById(addressId).subscribe((res:any)=>{
      if(res.status){
        this.addAddress();
        this.manageAddressModel = res.data;
      }
    });
  }
  deleteAddressById(addressId:number){
    this.commonService.editAddressById(addressId).subscribe((res:any)=>{
      if(res.status){
        this.getAddressByUserId();
      }
    });
  }
}
