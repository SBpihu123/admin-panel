import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Transaction } from '../models/transaction.interface';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = `${environment.apiUrl}/transactions`;

  constructor(private http: HttpClient) {}

  getTransactions(): Observable<Transaction[]> {
    // In a real application, this would be an API call
    return of([]).pipe(
      catchError(error => {
        console.error('Error fetching transactions:', error);
        throw error;
      })
    );
  }

  getTransaction(id: string): Observable<Transaction> {
    return this.http.get<Transaction>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        console.error(`Error fetching transaction ${id}:`, error);
        throw error;
      })
    );
  }

  updateTransactionStatus(id: string, status: 'completed' | 'cancelled' | 'refunded'): Observable<Transaction> {
    return this.http.patch<Transaction>(`${this.apiUrl}/${id}/status`, { status }).pipe(
      catchError(error => {
        console.error(`Error updating transaction ${id} status:`, error);
        throw error;
      })
    );
  }
}
