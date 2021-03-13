import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ListRepsonseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
apiUrl='https://localhost:44360/api/categories/getall';
  constructor(private httpClient:HttpClient) { }

  getCategories():Observable<ListRepsonseModel<Category>>{
    return this.httpClient.get<ListRepsonseModel<Category>>(this.apiUrl);
  }
}
