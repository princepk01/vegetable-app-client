import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/service/common-service.service';
import { CartItemModel } from 'src/app/model/cart-item.model';
import { Router, ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/app/model/user.model';
import {PlacedOrderModel} from 'src/app/model/placed-order.model';
import { ManageAddressModel } from 'src/app/model/manage.address.model';
import { OrderDetailsModel } from 'src/app/model/order-details.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    private commonServiceService: CommonServiceService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getCartItemByUserId();
    this.calculateAmount();
    this.chamgeValue();
    this.getAddressByUserId();
  }

 cartItemModelList = [];
  getCartItemByUserId() {
    let userInfo = localStorage.getItem('userInfo');
    if (userInfo != null && userInfo != '') {
      let userInformation = JSON.parse(userInfo);
      this.commonServiceService.getCartItemByUserId(userInformation.id).subscribe((res: any) => {
        if (res.status) {
          this.cartItemModelList = res.data;
          console.log('cart item model===> : ', this.cartItemModelList);
          this.chamgeValue();
          this.calculateAmount();
        }
      });
    } else {
      alert('Please login to continue.');
      this.router.navigate(['']);
      }
  }

  discountPrice: number = 0;
  marpPrice: number = 0;
  savedAmount: number = 0;
  deliveryType: string;
  deliveryAmount: number = 0;
  totalAmount: number = 0;
  chamgeValue(){
    this.discountPrice = 0;
    this.marpPrice = 0;
    this.savedAmount = 0;
    this.deliveryAmount = 0;
    this.totalAmount = 0;
  }
  calculateAmount() {
    this.cartItemModelList.forEach(cItem => {
      console.log('citer====> : ', cItem);
      this.discountPrice = this.discountPrice + cItem.totalItemCountDiscountPrice;
      this.marpPrice = this.marpPrice + cItem.totalItemCountMrpAmount;

    });
    this.savedAmount = this.marpPrice - this.discountPrice;
    if (this.discountPrice >= 500) {
      this.deliveryType = 'FREE';
      this.totalAmount = this.discountPrice;
    } else {
      this.deliveryType = '50';
      this.totalAmount = this.discountPrice + 50;
    }
  }

  itemCountPlus(cartItemModel: CartItemModel) {
    cartItemModel.itemCount = cartItemModel.itemCount + 1;
    this.commonServiceService.addToCartItem(cartItemModel).subscribe((res:any)=>{
      if(res.status){
        this.getCartItemByUserId();
        this.chamgeValue();
        this.calculateAmount();
        cartItemModel = new CartItemModel();
      }
    });
  }
  itemCountminus(cartItemModel: CartItemModel) {
    cartItemModel.itemCount = cartItemModel.itemCount - 1;
    this.commonServiceService.addToCartItem(cartItemModel).subscribe((res:any)=>{
       if(res.status){
         this.getCartItemByUserId();
         this.chamgeValue();
         this.calculateAmount();
         cartItemModel = new CartItemModel();
       }
     });
  }

  removeCartItem(cartItemId: number) {
    this.commonServiceService.removeCartItem(cartItemId).subscribe((res: any) => {
      if (res.status) {
        alert(res.message);
        this.chamgeValue();
        this.getCartItemByUserId();
      }
    })
  }

  addressList = [];
  userModel = new UserModel()
  getAddressByUserId() {
    var usreInfo = localStorage.getItem('userInfo');
    this.userModel = JSON.parse(usreInfo);
    this.commonServiceService.getAddressByUserId(this.userModel.id).subscribe((res: any) => {
      console.log(res.data);
      if (res.status) {
        this.addressList = res.data;
      }
    });
  }

  addressModel = new ManageAddressModel();
  selectAddress(address:any){
    this.addressModel = address;
  }

  placdeOrderModel = new PlacedOrderModel();
  placedOrderModelList = [];
  orderDetailsModelList = [];
  placedOrder(){
    this.placdeOrderModel.totalAmount = this.discountPrice;
    this.placdeOrderModel.totalItem = this.cartItemModelList.length;
    this.placdeOrderModel.addressModel = this.addressModel;
    this.placdeOrderModel.userModel = this.userModel;
    this.cartItemModelList.forEach(cartItem=>{
      let orderDetailsModel = new OrderDetailsModel();
      orderDetailsModel.itemCount = cartItem.itemCount;
      orderDetailsModel.orderPrice = cartItem.productItemModel.discountPrice;
      orderDetailsModel.itemImageUrl = cartItem.productItemImageModel.itemInageFileUrl;
      orderDetailsModel.itemName = cartItem.productItemModel.itemName;
      orderDetailsModel.unit = cartItem.productItemDetailsModel.unit; 
      orderDetailsModel.cartItemId = cartItem.id;
      this.orderDetailsModelList.push(orderDetailsModel);
      
    });
    this.placdeOrderModel.orderDetailsModelList = this.orderDetailsModelList;
    console.log('placdeOrderModel ===> : ',this.placdeOrderModel);
    this.commonServiceService.placedOrder(this.placdeOrderModel).subscribe((res:any)=>{
      if(res.status){
        console.log(res.data);
        alert('Order placed successfully.');
      }
    });
    this.orderDetailsModelList = [];
  }

  selectProduct(cartItem : CartItemModel){

  }

 
}
