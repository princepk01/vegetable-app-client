import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;
@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.css']
})
export class ProfileMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.manageLogin();
  }
  // menu(menuName: string) {
  //   this.loadContent.emit(menuName);
  // }
  loginSuccess = true;
  loginProfile = false;
  userName = '';
  userRole = '';
  isAdmin = false;
  manageLogin(){
    var  userInfo = localStorage.getItem('userInfo');
    if(userInfo != null){
        var userInformation = JSON.parse(userInfo);
        if(userInformation != null){
          this.loginSuccess = false;
          this.loginProfile = true;
          this.userName = (userInformation.name).toUpperCase();
          var role = userInformation.userRole;
          if(role === 'ROLE_ADMIN'){
            this.userRole = 'Administrator';
            this.isAdmin = true;
          }else{
            this.userRole = 'User';
            this.isAdmin = false;
          }
        }
    }
  }

}
