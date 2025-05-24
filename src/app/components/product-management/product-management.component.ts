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
import { ProductService } from '../../services/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss'],
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
    MatSnackBarModule
  ]
})
export class ProductManagementComponent implements OnInit {
  displayedColumns: string[] = ['name', 'category', 'price', 'seller', 'status', 'actions'];
  dataSource: MatTableDataSource<Product>;
  loading = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private productService: ProductService,
    private snackBar: MatSnackBar
  ) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    // In a real application, this would be an API call
    const mockProducts: Product[] = [
      {
        id: '1',
        name: 'Product 1',
        description: 'Description 1',
        price: 100,
        category: 'Electronics',
        sellerId: 'seller1',
        status: 'pending',
        images: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        specifications: {},
        stock: 10
      },
      {
        id: '2',
        name: 'Product 2',
        description: 'Description 2',
        price: 200,
        category: 'Clothing',
        sellerId: 'seller2',
        status: 'approved',
        images: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        specifications: {},
        stock: 5
      }
    ];

    this.dataSource.data = mockProducts;
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

  approveProduct(product: Product) {
    // In a real application, this would be an API call
    product.status = 'approved';
    this.snackBar.open('Product approved successfully', 'Close', {
      duration: 3000
    });
  }

  rejectProduct(product: Product) {
    // In a real application, this would be an API call
    product.status = 'rejected';
    this.snackBar.open('Product rejected', 'Close', {
      duration: 3000
    });
  }
}
