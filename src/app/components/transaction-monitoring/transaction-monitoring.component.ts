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
import { MatChipsModule } from '@angular/material/chips';
import { TransactionService } from '../../services/transaction.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Transaction } from '../../models/transaction.interface';

@Component({
  selector: 'app-transaction-monitoring',
  templateUrl: './transaction-monitoring.component.html',
  styleUrls: ['./transaction-monitoring.component.scss'],
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
    MatMenuModule,
    MatChipsModule
  ]
})
export class TransactionMonitoringComponent implements OnInit {
  displayedColumns: string[] = ['id', 'amount', 'status', 'type', 'timestamp', 'actions'];
  dataSource: MatTableDataSource<Transaction>;
  loading = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private transactionService: TransactionService,
    private snackBar: MatSnackBar
  ) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.loadTransactions();
  }

  loadTransactions() {
    // In a real application, this would be an API call
    const mockTransactions: Transaction[] = [
      {
        id: '1',
        amount: 1000,
        status: 'completed',
        type: 'purchase',
        timestamp: new Date(),
        buyerId: 'buyer1',
        sellerId: 'seller1',
        productId: 'product1',
        paymentMethod: 'credit_card',
        currency: 'USD',
        createdAt: new Date(),
        updatedAt: new Date(),
        shippingAddress: {
          street: '123 Main St',
          city: 'New York',
          state: 'NY',
          country: 'USA',
          zipCode: '10001'
        }
      },
      {
        id: '2',
        amount: 500,
        status: 'pending',
        type: 'refund',
        timestamp: new Date(),
        buyerId: 'buyer2',
        sellerId: 'seller2',
        productId: 'product2',
        paymentMethod: 'paypal',
        currency: 'USD',
        createdAt: new Date(),
        updatedAt: new Date(),
        shippingAddress: {
          street: '456 Oak Ave',
          city: 'Los Angeles',
          state: 'CA',
          country: 'USA',
          zipCode: '90001'
        }
      }
    ];

    this.dataSource.data = mockTransactions;
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

  approveTransaction(transaction: Transaction) {
    // In a real application, this would be an API call
    transaction.status = 'completed';
    this.snackBar.open('Transaction approved successfully', 'Close', {
      duration: 3000
    });
  }

  rejectTransaction(transaction: Transaction) {
    // In a real application, this would be an API call
    transaction.status = 'rejected';
    this.snackBar.open('Transaction rejected', 'Close', {
      duration: 3000
    });
  }

  viewTransactionDetails(transaction: Transaction) {
    // In a real application, this would navigate to a details page
    console.log('View transaction details:', transaction);
  }
}
