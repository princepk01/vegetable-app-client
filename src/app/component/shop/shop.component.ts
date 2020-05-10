import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/service/common-service.service';
import { ProductItemModel } from 'src/app/model/product.item.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(
    private commonServiceService : CommonServiceService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  page=1;

  productsItemList : [];
  getAllProducts(){
   this.productsItemList = [];
    this.commonServiceService.getAllProductItem().subscribe((res:any)=>{
      if(res.status){
        this.productsItemList = res.data;
        
      }
    });
  }

  getProductItemByProductName(prodcutName:any){
    this.productsItemList = [];
    this.commonServiceService.getProductItemByProductName(prodcutName).subscribe((res:any)=>{
      if(res.status){
        this.productsItemList = res.data;
      }
    });
  }

  productItem = new  ProductItemModel();
  showProductItem(productItemId:number){
    this.commonServiceService.editProductItemById(productItemId).subscribe((res:any)=>{
      if(res.status){
        this.productItem = res.data;
       // this.router.navigate(['show-products']);
       let url = this.router.createUrlTree(['show-single-product']);
       window.open(url.toString(),'_blank');

      }
    });
  }
}
