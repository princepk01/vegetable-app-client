import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/service/common-service.service';

import { ProductItemModel } from 'src/app/model/product.item.model';
import { CartItemModel } from 'src/app/model/cart-item.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-single-product',
  templateUrl: './show-single-product.component.html',
  styleUrls: ['./show-single-product.component.css']
})
export class ShowSingleProductComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private commonServiceService : CommonServiceService,
  ) { }

  ngOnInit(): void {
    this.getShareData();
  }
tempItemCount:number=1;
itemCountPlus(){
  this.tempItemCount = this.tempItemCount + 1;
}
itemCountminus(){
  this.tempItemCount = this.tempItemCount - 1;
}
  productItem = new ProductItemModel();
  getShareData(){
    let data = localStorage.getItem('productItem');
    this.productItem = JSON.parse(data);
    console.log('this.productItem===> : ',this.productItem);
  }
  cartItemModel= new CartItemModel();
  addToCartItem(){
    let userInfo = localStorage.getItem('userInfo');
    if(userInfo != null && userInfo != ''){
      this.cartItemModel.productItemModel = this.productItem;
      this.cartItemModel.productItemDetailsModel = this.productItem.productItemDetailsModel;
      this.cartItemModel.productItemImageModel = this.productItem.productItemImageModel;
      this.cartItemModel.itemCount = this.tempItemCount;
      let userInformation = JSON.parse(userInfo);
      this.cartItemModel.userId = userInformation.id;
      this.commonServiceService.addToCartItem(this.cartItemModel).subscribe((res:any)=>{
        if(res.status){
          alert(res.message);
          this.router.navigate(['cart']);
        }
      });
      console.log('cart item==> : ', this.cartItemModel);
    }else{
      this.cartItemModel= new CartItemModel();
      alert('Please login to continue.');
    }

  }
}
