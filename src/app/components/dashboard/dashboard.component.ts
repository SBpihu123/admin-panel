import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatHeaderRowDef, MatRowDef } from '@angular/material/table';
import { MatHeaderCellDef, MatCellDef } from '@angular/material/table';
import { UserService } from '../../services/user.service';
import { ProductService } from '../../services/product.service';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatHeaderRowDef,
    MatRowDef,
    MatHeaderCellDef,
    MatCellDef
  ]
})
export class DashboardComponent implements OnInit {
  metrics = {
    activeSellers: 0,
    totalProducts: 0,
    pendingApprovals: 0,
    totalTransactions: 0,
    revenue: 0
  };

  recentTransactions: any[] = [];
  loading = true;

  constructor(
    private userService: UserService,
    private productService: ProductService,
    private transactionService: TransactionService
  ) {}

  ngOnInit() {
    this.loadDashboardData();
  }

  loadDashboardData() {
    // In a real application, these would be actual API calls
    this.metrics = {
      activeSellers: 150,
      totalProducts: 2500,
      pendingApprovals: 25,
      totalTransactions: 5000,
      revenue: 150000
    };

    this.recentTransactions = [
      {
        id: '1',
        product: 'Product 1',
        amount: 100,
        status: 'completed',
        date: new Date()
      },
      {
        id: '2',
        product: 'Product 2',
        amount: 200,
        status: 'pending',
        date: new Date()
      }
    ];

    this.loading = false;
  }
}
