import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,map} from 'rxjs';
import { Product } from '../common/product';
import { Category } from '../common/Category';



@Injectable({
  providedIn: 'root'
})
export class ManagmentServiceService {
produrl="http://localhost:8081/api/prod"
caturl="http://localhost:8081/api/category"
  constructor(private httpClient:HttpClient) { }
  getAllProduct():Observable<Product[]>{
    return this.httpClient.get<getProductResponse>(this.produrl).pipe(map(response=> response._embedded.products))
  }
  getAllCategory():Observable<Category[]>{
    return this.httpClient.get<getCategoryResponse>(this.caturl).pipe(map(response=>response._embedded.categorys))
  }
}

interface getProductResponse{
  _embedded : {
    products : Product[]
  }
}

interface getCategoryResponse{
  _embedded : {
    categorys :Category[]
  }
}