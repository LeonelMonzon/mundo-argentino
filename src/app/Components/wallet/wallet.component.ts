import { Component } from '@angular/core';
import { CartService } from '../../services/api/cart.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { response } from 'express';

@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.css'
})
export class WalletComponent {
  carts: any[] = [
    { 
      products: [ 
        { name: 'Smartphone', quantity: 1, price: 50000 }, 
        { name: 'Auriculares Bluetooth', quantity: 1, price: 15000 } 
      ], 
      paymentMethod: 'Tarjeta de Crédito', 
      total: 65000 
    }, 
    { 
      products: [ 
        { name: 'Laptop', quantity: 1, price: 120000 }, 
        { name: 'Mochila para Laptop', quantity: 1, price: 5000 }, 
        { name: 'Mouse Inalámbrico', quantity: 1, price: 2000 } 
      ], 
      paymentMethod: 'Efectivo', 
      total: 127000 
    }, 
    { 
      products: [ 
        { name: 'Cámara Fotográfica', quantity: 1, price: 80000 }, 
        { name: 'Trípode', quantity: 1, price: 6000 }, 
        { name: 'Tarjeta de Memoria', quantity: 1, price: 3000 } 
      ], 
      paymentMethod: 'Débito', 
      total: 89000 
    } 
  ];

  constructor(private apiCart: CartService) {
    //this.loadData();
  }

  loadData() {
    this.apiCart.getCarts().subscribe({
      next: (response) => this.carts = response.data,
      error: (err) => console.error(err),
    });
  }

  getProductNames(products: any[]): string { 
    return products.map(product => product.name).join(', '); 
  }
}
