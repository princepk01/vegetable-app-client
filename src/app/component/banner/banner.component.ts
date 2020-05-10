import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/service/common-service.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(
    private commonServiceService: CommonServiceService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  productModelList = [];
  getAllProducts() {
    this.commonServiceService.getAllProducts().subscribe((res:any)=>{
      if(res.status){
        this.productModelList = res.data;
      }
    });
  }

  productItemList:[];
  getProductsById(productId:number){
    this.commonServiceService.getItemsByproductId(productId).subscribe((res:any)=>{
      if(res.status){
        this.productItemList = res.data;
        this.commonServiceService.changeMessage(this.productItemList);
        this.router.navigate(['show-products']);
      }
    });
  }
}
