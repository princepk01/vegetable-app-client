import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/service/common-service.service';
import { JsonPipe } from '@angular/common';
import { ProductItemModel } from 'src/app/model/product.item.model';

@Component({
  selector: 'app-show-single-product',
  templateUrl: './show-single-product.component.html',
  styleUrls: ['./show-single-product.component.css']
})
export class ShowSingleProductComponent implements OnInit {

  constructor(
    private commonServiceService : CommonServiceService,
  ) { }

  ngOnInit(): void {
    this.getShareData();
  }
itemCount:number=0;
itemCountPlus(){
  this.itemCount = this.itemCount + 1;
}
itemCountminus(){
  this.itemCount = this.itemCount - 1;
}
  productItem = new ProductItemModel();
  getShareData(){
    let data = localStorage.getItem('productItem');
    this.productItem = JSON.parse(data);
    console.log('this.productItem===> : ',this.productItem);
  }
}
