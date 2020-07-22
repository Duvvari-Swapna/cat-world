import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ErrorService } from './error.service';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Image, Category, Images } from '../shared/interface';

@Injectable({
  providedIn: 'root'
})
export class CatServiceService {

  constructor(private http: HttpClient, private error: ErrorService) { }

  getCatImage() {
    console.log('service for accessing random image being called');
    return this.http.get(`${environment.baseUrl}/images/search`)
      .pipe(
        map((data: Image) => {
          if (data) {
            return data;
          }
        }),
        catchError(this.error.handleError)
      );
  }
  getCategories() {
    console.log('service for getting being called');
    return this.http.get(`${environment.baseUrl}/categories`)
      .pipe(
        map((data: Category) => {
          if (data) {
            return data;
          }
        }),
        catchError(this.error.handleError)
      );
  }

  getSelectedCategoryImg(category_id, limit) {
    console.log('service for getting selected category images');
    return this.http.get(`${environment.baseUrl}/images/search?category_ids=${category_id}&limit=${limit}`)
      .pipe(
        map((data: Images) => {
          if (data) {
            return data;
          }
        }),
        catchError(this.error.handleError)
      );
  }
}
