import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    // In a real application, this would be an API call
    return of([]).pipe(
      catchError(error => {
        console.error('Error fetching users:', error);
        throw error;
      })
    );
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        console.error(`Error fetching user ${id}:`, error);
        throw error;
      })
    );
  }

  updateUserStatus(id: string, status: 'active' | 'inactive' | 'suspended'): Observable<User> {
    return this.http.patch<User>(`${this.apiUrl}/${id}/status`, { status }).pipe(
      catchError(error => {
        console.error(`Error updating user ${id} status:`, error);
        throw error;
      })
    );
  }
}
