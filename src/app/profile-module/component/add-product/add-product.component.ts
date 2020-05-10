import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/model/product.model';
import { CommonServiceService } from 'src/app/service/common-service.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(
    private commonService: CommonServiceService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  headElements = ['Product Name', 'Product View', 'Action'];
  imageSrc: string;
  isImageSelected:boolean = false;
  resultFile : FileList;
  // onFileChange(event:any) {
  //    if(event.target.files && event.target.files.length) {
  //      this.resultFile = event.target.files;
  //   }
  //   }

    productModel = new ProductModel();
    saveProduct(){
   //const  formData = new FormData();
      console.log("productModel ===> "+JSON.stringify(this.productModel));
      //formData.append('productModel',new Blob([JSON.stringify(this.productModel)], {type:"application/json"}));
      // if(this.resultFile != null){
      //   formData.append('file', this.resultFile.item(0));
      // }
      this.commonService.saveProduct(this.productModel).subscribe((res:any)=>{
        if(res.status){
          this.productModel = new ProductModel();
          this.getAllProducts();
        }
      });
    }
    page = 1;
    pageSize = 10;
    productModelList = [];
    productListSize:number;
    getAllProducts(){
      this.commonService.getAllProducts().subscribe((res:any)=>{
        if(res.status){
          this.productModelList = res.data;
          this.productListSize = this.productModelList.length;
          console.log('productsize ==> :'+this.productListSize)
        }
      });
    }

    editProductById(productId:number){
      this.commonService.editProductById(productId).subscribe((res:any)=>{
        if(res.status){
          this.productModel = res.data;
          console.log(this.productModel);

        }
      });
    }
    deleteProductById(productId:number){
      this.commonService.deleteProductById(productId).subscribe((res:any)=>{
        if(res.status){
          this.getAllProducts();
        }
      });
    }

    viewProduct = new ProductModel();
    image : any;
    viewProductRecord(productId:number){
      this.commonService.editProductById(productId).subscribe((res:any)=>{
        if(res.status){
         
          // let objectURL = 'data:image/jpeg;base64,' + res.data.productImage;

          // this.image = this.sanitizer.bypassSecurityTrustUrl(objectURL)
          this.viewProduct = res.data;
          console.log(this.viewProduct);

        }
      });
    }
   
  }
