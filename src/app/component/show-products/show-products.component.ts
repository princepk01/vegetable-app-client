import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/service/common-service.service';
import { ProductItemModel } from 'src/app/model/product.item.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {

  constructor(
    private commonServiceService : CommonServiceService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  productItemsList : [];
  ngOnInit(): void {
    this.shareData();
  }

  shareData(){
    this.productItemsList = [];
    this.commonServiceService.currentMessage.subscribe((res:any)=>{
      if(res != ''){
        this.productItemsList = res;
        localStorage.setItem('productItemsList',JSON.stringify(res));
      }else{
        this.productItemsList = JSON.parse(localStorage.getItem('productItemsList'));
      }
    });
  }

  
  showProductItem(productItemId:number){
    this.commonServiceService.editProductItemById(productItemId).subscribe((res:any)=>{
      if(res.status){
        localStorage.setItem('productItem',JSON.stringify(res.data))
        let url = this.router.createUrlTree(['show-single-product']);
        window.open(url.toString(),'_blank');
      }
    });
  }
}
