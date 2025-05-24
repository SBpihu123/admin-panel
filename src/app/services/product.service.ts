import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = `${environment.apiUrl}/products`;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    // In a real application, this would be an API call
    return of([]).pipe(
      catchError(error => {
        console.error('Error fetching products:', error);
        throw error;
      })
    );
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        console.error(`Error fetching product ${id}:`, error);
        throw error;
      })
    );
  }

  approveProduct(id: string): Observable<Product> {
    return this.http.patch<Product>(`${this.apiUrl}/${id}/approve`, {}).pipe(
      catchError(error => {
        console.error(`Error approving product ${id}:`, error);
        throw error;
      })
    );
  }

  rejectProduct(id: string): Observable<Product> {
    return this.http.patch<Product>(`${this.apiUrl}/${id}/reject`, {}).pipe(
      catchError(error => {
        console.error(`Error rejecting product ${id}:`, error);
        throw error;
      })
    );
  }
}
