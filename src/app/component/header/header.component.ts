import { Component, OnInit } from '@angular/core';
import {CommonServiceService} from '../../service/common-service.service';
import {UserModel} from '../../model/user.model';
import {LoginModel} from '../../model/login.model';
import { Router, ActivatedRoute } from '@angular/router';
declare var $: any;
declare  var jQuery:  any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private commonService : CommonServiceService
  ) { }

  ngOnInit(): void {
    $(document).on("scroll", function(){
      if
        ($(document).scrollTop() > 86){
        $("#banner").addClass("shrink");
      }
      else
      {
        $("#banner").removeClass("shrink");
      }
    });
    this.getCartItemByUserId();
    this.manageLogin();
  }
  userModel = new UserModel();
  signUpSuccess = 'false'
    signUp(){
      this.commonService.saveOrLogin(this.userModel,'user/save-user').subscribe((res:any)=>{
        if(res.status){
          this.signUpSuccess = res.status;
          console.log(res);
          this.userModel = new UserModel();
        }
      });
    }
  
    loginModel = new LoginModel();
    loginSuccess = true;
    loginProfile = false;
    userName = '';
    userRole = '';
    login(){
      console.log('loginModel==> '+JSON.stringify(this.loginModel));
      this.commonService.saveOrLogin(this.loginModel,'user/login-user').subscribe((res:any)=>{
        if(res != null && res.status && res.data != null)
            this.loginSuccess = false;
            this.loginProfile = true;
           
            this.userName = (res.data.name).replace(/^./, (res.data.name)[0].toUpperCase());
            localStorage.setItem("userInfo",JSON.stringify(res.data));
            this.loginModel = new LoginModel();
            this.getCartItemByUserId();
        });
    }
  
  
    manageLogin(){
      var  userInfo = localStorage.getItem('userInfo');
      if(userInfo != null){
          var userInformation = JSON.parse(userInfo);
          if(userInformation != null){
            this.loginSuccess = false;
            this.loginProfile = true;
           
            this.userName = (userInformation.name).replace(/^./, (userInformation.name)[0].toUpperCase());
            var role = userInformation.userRole;
            if(role === 'ROLE_ADMIN'){
              this.userRole = 'Administrator';
            }else{
              this.userRole = 'User';
            }
            
          }
      }
    }
  
    logout(){
      this.loginSuccess = true;
      this.loginProfile = false;
      localStorage.clear();
     this. cartItemModelList = [];
      this.router.navigate(['']);
    }

    cartItemModelList = [];
    getCartItemByUserId() {
      let userInfo = localStorage.getItem('userInfo');
      if (userInfo != null && userInfo != '') {
        let userInformation = JSON.parse(userInfo);
        this.commonService.getCartItemByUserId(userInformation.id).subscribe((res: any) => {
          if (res.status) {
            this.cartItemModelList = res.data;
            console.log('cart item model===> : ', this.cartItemModelList);
          }
        });
      }
    }
}
