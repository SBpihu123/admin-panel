import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatMenuModule
  ]
})
export class UserManagementComponent implements OnInit {
  displayedColumns: string[] = ['username', 'email', 'role', 'status', 'lastLogin', 'actions'];
  dataSource: MatTableDataSource<User>;
  loading = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    // In a real application, this would be an API call
    const mockUsers: User[] = [
      {
        id: '1',
        username: 'johndoe',
        email: 'john@example.com',
        role: 'buyer',
        status: 'active',
        createdAt: new Date(),
        lastLogin: new Date(),
        profile: {
          firstName: 'John',
          lastName: 'Doe',
          phone: '1234567890'
        }
      },
      {
        id: '2',
        username: 'janesmith',
        email: 'jane@example.com',
        role: 'admin',
        status: 'active',
        createdAt: new Date(),
        lastLogin: new Date(),
        profile: {
          firstName: 'Jane',
          lastName: 'Smith',
          phone: '0987654321'
        }
      }
    ];

    this.dataSource.data = mockUsers;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.loading = false;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  updateUserStatus(user: User, status: 'active' | 'inactive' | 'suspended') {
    // In a real application, this would be an API call
    user.status = status;
    this.snackBar.open(`User status updated to ${status}`, 'Close', {
      duration: 3000
    });
  }
}
