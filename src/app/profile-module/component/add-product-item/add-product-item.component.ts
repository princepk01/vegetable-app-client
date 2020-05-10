import { Component, OnInit } from '@angular/core';
import { ProductItemModel } from 'src/app/model/product.item.model';
import { ProductItemDetailsModel } from 'src/app/model/product.item.details.model';
import { CommonServiceService } from 'src/app/service/common-service.service';
import { ProductItemImageModel } from 'src/app/model/product.item.image.model';
declare var $: any;
declare  var jQuery:  any;
@Component({
  selector: 'app-add-product-item',
  templateUrl: './add-product-item.component.html',
  styleUrls: ['./add-product-item.component.css']
})
export class AddProductItemComponent implements OnInit {

  constructor(
    private commonServiceService : CommonServiceService,
  ) { }

  ngOnInit(): void {
    $(document).ready(function(){

      var current_fs, next_fs, previous_fs; //fieldsets
      var opacity;
      var current = 1;
      var steps = $("fieldset").length;
      
      $(".next").click(function(){
      
      current_fs = $(this).parent();
      next_fs = $(this).parent().next();
      
      //Add Class Active
      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
      
      //show the next fieldset
      next_fs.show();
      //hide the current fieldset with style
      current_fs.animate({opacity: 0}, {
      step: function(now) {
      // for making fielset appear animation
      opacity = 1 - now;
      
      current_fs.css({
      'display': 'none',
      'position': 'relative'
      });
      next_fs.css({'opacity': opacity});
      },
      duration: 500
      });
      
      });
      
      $(".previous").click(function(){
      
      current_fs = $(this).parent();
      previous_fs = $(this).parent().prev();
      
      //Remove class active
      $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
      
      //show the previous fieldset
      previous_fs.show();
      
      //hide the current fieldset with style
      current_fs.animate({opacity: 0}, {
      step: function(now) {
      // for making fielset appear animation
      opacity = 1 - now;
      
      current_fs.css({
      'display': 'none',
      'position': 'relative'
      });
      previous_fs.css({'opacity': opacity});
      },
      duration: 500
      });
     
      });
     $(".nextSubmit").click(function(){
		  current_fs = $(this).parent();
		  previous_fs = $(this).parent().prev();
		  //Remove class active
      $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	   //show the previous fieldset
      previous_fs.show();
	     //hide the current fieldset with style
      current_fs.animate({opacity: 0}, {
      step: function(now) {
      // for making fielset appear animation
      opacity = 1 - now;
      
      current_fs.css({
      'display': 'none',
      'position': 'relative'
      });
      previous_fs.css({'opacity': opacity});
      },
      duration: 500
      });
    
	  current_fs = current_fs.prev();
		  previous_fs = previous_fs.prev();
		  //Remove class active
      $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	   //show the previous fieldset
      previous_fs.show();
	     //hide the current fieldset with style
      current_fs.animate({opacity: 0}, {
      step: function(now) {
      // for making fielset appear animation
      opacity = 1 - now;
      
      current_fs.css({
      'display': 'none',
      'position': 'relative'
      });
      previous_fs.css({'opacity': opacity});
      },
      duration: 500
      });
    
      });
      
      });
      
      // method call in this calss
      this.getAllProducts();
      this.getAllProductItem();
  }

  productModelList = [];
  getAllProducts(){
    this.commonServiceService.getAllProducts().subscribe((res:any)=>{
      if(res.status){
        this.productModelList = res.data;
        console.log('this.prodcutModelList ==> : ',this.productModelList);
      }
    })
  }
  productItemModel = new ProductItemModel();
  productItemDetailsModel = new ProductItemDetailsModel();
  productItemImageModel = new ProductItemImageModel();
  resultFile : FileList;
  onFileChange(event:any) {
     if(event.target.files && event.target.files.length) {
       this.resultFile = event.target.files;
    }
    }
  saveproductItem(){
    this.productItemModel.productItemDetailsModel = this.productItemDetailsModel;
    this.productItemModel.productItemImageModel = this.productItemImageModel;
    //const  formData = new FormData();
   //formData.append('productItemModel',new Blob([JSON.stringify(this.productItemModel)], {type:"application/json"}));
    // if(this.resultFile != null){
    //   formData.append('file', this.resultFile.item(0));
    // }
    this.commonServiceService.saveproductItem(this.productItemModel).subscribe((res:any)=>{
      if(res.status){
        alert(res.message);
        this.productItemModel = new ProductItemModel();
        this.productItemDetailsModel = new ProductItemDetailsModel();
        this.productItemImageModel = new ProductItemImageModel();
        this.getAllProductItem();
      }
    });
    console.log('this.productItemModel==> ',this.productItemModel)
  }

  headElements = ['Item Name', 'Total Quantity','Total Price','Mrp', 'Discount Price', 'Action'];
  productItemsList = [];
  page = 1;
  pageSize = 10;
  productItemsListSize:number;
  getAllProductItem(){
      this.commonServiceService.getAllProductItem().subscribe((res:any)=>{
        if(res.status){
          this.productItemsList = res.data;
          this.productItemsListSize = this.productItemsList.length;
          console.log('this.prductItemsListSize ==> :'+this.productItemsListSize);
        }
      });
  }
  // productItemModel = new ProductItemModel();
  // productItemDetailsModel = new ProductItemDetailsModel();
  // productItemImageModel = new ProductItemImageModel();
  editProductItemById(productItemId : number){
    this.commonServiceService.editProductItemById(productItemId).subscribe((res:any)=>{
    if(res.status)
    this.productItemModel = res.data
    this.productItemDetailsModel = res.data.productItemDetailsModel;
    this.productItemImageModel = res.data.productItemImageModel;
      console.log(this.productItemModel);
    });
  }
  deleteProductItemById(productItemId : number){
    this.commonServiceService.deleteProductItemById(productItemId).subscribe((res:any)=>{
      if(res.status){
        this.getAllProductItem();
      }
    })
  }
 
}
