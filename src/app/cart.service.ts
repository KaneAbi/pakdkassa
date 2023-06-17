import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public baseUrl = "https://648d88682de8d0ea11e7f391.mockapi.io/preise";
  private isMobileResolution: boolean;

  constructor(private httpClient: HttpClient) {
    if (window.innerWidth < 768) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
  }

  public getProducts(): Observable<any> { 
    return this.httpClient.get(this.baseUrl); 
  }
  
  public getIsMobileResolution(): boolean {
    return this.isMobileResolution;
  }
}
