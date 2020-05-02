import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(
    private httpClient: HttpClient
  ) { }
 
  saveOrLogin(data:any, url:any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json',
      })
    }
   
    //return this.httpClient.post(`${this.baseUrl}/gift-card/save-gift-card-placed`, JSON.stringify(giftCardPlacedData), httpOptions);
    return  this.httpClient.post(`${environment.baseUrl}:${environment.port}/${url}`,JSON.stringify(data), httpOptions);
  }

  getAddressByUserId(userId:any, url:any):Observable<any>{
      return this.httpClient.get(`${environment.baseUrl}:${environment.port}/${url}/`+userId);
  }

  editAddressById(addressId:number, url:any){
    return this.httpClient.get(`${environment.baseUrl}:${environment.port}/${url}/`+addressId);
  }
  deleteAddressById(addressId:number, url:any){
    return this.httpClient.get(`${environment.baseUrl}:${environment.port}/${url}/`+addressId);
  }
}
