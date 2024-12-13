import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/api/product.service';
import { DataService } from '../../services/api/data.service';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements OnInit { 
  items: any[] = []; 
  producto: any[] = [];
  groupedData: any[][] = [];

  constructor(private apiProduct: ProductService, private dataService: DataService) {
    this.loadData();
  }

  loadData() {
    this.apiProduct.getProduct().subscribe({
      next: (response) => this.items = response.data,
      error: (err) => console.error(err),
    });
  }
  
  ngOnInit() {
    this.producto = this.dataService.getSelectedProduct();
    this.groupedData = this.groupItems(this.items, 5); 
  } 
  groupItems(array: any[], groupSize: number): any[][] {
    let groups = []; 
    for (let i = 0; i < array.length; i += groupSize) {
      groups.push(array.slice(i, i + groupSize)); 
    } 
    return groups; 
  }
}
