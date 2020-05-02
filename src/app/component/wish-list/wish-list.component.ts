import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  headElements = ['ID','Product List', 'Price', 'Quantity', 'Total',''];

  responseData=[
    {"id":"1", "productList":"item-1", "price":"2300", "quantity":"1","total":"400"},
    {"id":"2", "productList":"item-1", "price":"2300", "quantity":"1","total":"400"},
    {"id":"3", "productList":"item-1", "price":"2300", "quantity":"1","total":"400"},
    {"id":"4", "productList":"item-1", "price":"2300", "quantity":"1","total":"400"},
    {"id":"5", "productList":"item-1", "price":"2300", "quantity":"1","total":"400"},
  ]

tempCartData = this.responseData;
size = this.responseData.length;
  deleteItem(index:any){
  this.responseData.splice(index,1);
  }
}
