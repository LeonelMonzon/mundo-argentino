import { Component } from '@angular/core';
import { MetodopagoService } from '../../services/api/metodopago.service';
import { CartService } from '../../services/api/cart.service';
import { DataService } from '../../services/api/data.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  paymentMethod: any[] = [];
  cart: any[] = []; 
  products: any[] = [];

  constructor(private apiMetodoPago: MetodopagoService,private apiCart: CartService,private dataService: DataService) {
    this.loadData();
  }

  ngOnInit() {
    this.products = this.dataService.getProducts();
  }

  loadData() {
    this.apiMetodoPago.getPaymentMethod().subscribe({
      next: (response) => this.paymentMethod = response.data,
      error: (err) => console.error(err),
    });
  }
  postCart(){
    this.apiCart.postCart(this.cart).subscribe({
      next: (response) => console.log('Cart posted successfully', response),
      error: (err) => console.error(err),
    });
  }
}
