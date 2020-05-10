import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(
    private httpClient: HttpClient
  ) { }

  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();

  changeMessage(data: any) {
    this.messageSource.next(data)
  }


  saveOrLogin(data: any, url: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      })
    }

    //return this.httpClient.post(`${this.baseUrl}/gift-card/save-gift-card-placed`, JSON.stringify(giftCardPlacedData), httpOptions);
    return this.httpClient.post(`${environment.baseUrl}/${url}`, data, httpOptions);
  }

  getAddressByUserId(userId: any): Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}/${'address/get-address-by-user-id'}/` + userId);
  }

  editAddressById(addressId: number) {
    return this.httpClient.get(`${environment.baseUrl}/${'address/get-address-by-id'}/` + addressId);
  }
  deleteAddressById(addressId: number) {
    return this.httpClient.get(`${environment.baseUrl}/${'address/delete-address-by-id'}/` + addressId);
  }

  saveProduct(data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      })
    }
    return this.httpClient.post(`${environment.baseUrl}/${'product/save-product'}`, data, httpOptions);
  }

  getAllProducts() {
    return this.httpClient.get(`${environment.baseUrl}/${'product/get-all-products'}`);
  }

  editProductById(productId: number) {
    return this.httpClient.get(`${environment.baseUrl}/${'product/get-product-by-id'}/` + productId);
  }
  deleteProductById(productId: number) {
    return this.httpClient.get(`${environment.baseUrl}/${'product/delete-product-by-id'}/` + productId);
  }

  saveproductItem(data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      })
    }
    return this.httpClient.post(`${environment.baseUrl}/${'product-item/save-product-item'}`, data, httpOptions);
  }

  getAllProductItem() {
    return this.httpClient.get(`${environment.baseUrl}/${'product-item/get-all-product-items'}`);
  }

  editProductItemById(productItemId: number) {
    return this.httpClient.get(`${environment.baseUrl}/${'product-item/get-product-item-by-id'}/` + productItemId);
  }
  deleteProductItemById(productItemId: number) {
    return this.httpClient.get(`${environment.baseUrl}/${'product-item/delete-product-item-by-id'}/` + productItemId);
  }

  getItemsByproductId(productId:number){
    return this.httpClient.get(`${environment.baseUrl}/${'product-item/get-product-items-by-product-id'}/` + productId);
  }


  getProductItemByProductName(prodcutName:any){
    return this.httpClient.get(`${environment.baseUrl}/${'product-item/get-product-items-by-product-name'}/` + prodcutName);
  }
}
