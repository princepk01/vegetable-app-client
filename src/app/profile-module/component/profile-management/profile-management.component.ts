import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/model/user.model';
import { CommonServiceService } from 'src/app/service/common-service.service';

@Component({
  selector: 'app-profile-management',
  templateUrl: './profile-management.component.html',
  styleUrls: ['./profile-management.component.css']
})
export class ProfileManagementComponent implements OnInit {

  constructor(
    private commonService : CommonServiceService
  ) { }

  loginInformation : UserModel;
  ngOnInit(): void {
    var userInfo = localStorage.getItem('userInfo');
    if(userInfo != null){
      this.loginInformation = JSON.parse(userInfo);
    }
  }

  saveUser(){
    this.commonService.saveOrLogin(this.loginInformation, '/user/save-user').subscribe((res:any)=>{
      if(res.status){
        alert(res.message);
      }
    });
  }
}
