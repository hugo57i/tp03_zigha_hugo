import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public products: [];
  constructor(private http: HttpClient) {
   }


  getAllProducts(): any {
      return this.http.get('/assets/catalogue.json');
      
  }
}
