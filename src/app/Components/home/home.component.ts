import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductService } from '../../services/api/product.service';
import { DataService } from '../../services/api/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  items: any[] = [
    { name: 'Televisor LED 55"', image: '../../assets/televisor.jpg', price: 70000 },
    { name: 'Refrigerador 350L', image: '../../assets/refrigerador.jpg', price: 85000 },
    { name: 'Lavadora Automática', image: '../../assets/lavadora.jpg', price: 60000 },
    { name: 'Microondas', image: '../../assets/microondas.jpg', price: 15000 },
    { name: 'Aspiradora Robot', image: '../../assets/aspiradora.jpg', price: 25000 },
    { name: 'Parlante Bluetooth', image: '../../assets/parlante.jpg', price: 10000 },
    { name: 'Cafetera Espresso', image: '../../assets/cafetera.jpg', price: 20000 },
    { name: 'Reloj Inteligente', image: '../../assets/reloj.jpg', price: 12000 },
    { name: 'Lámpara LED', image: '../../assets/lampara.jpg', price: 3000 },
    { name: 'Bicicleta de Montaña', image: '../../assets/bicicleta.jpg', price: 50000 }
];

  groupedData: any[][] = [];

  constructor(private apiProduct: ProductService, private dataService: DataService) {
    //this.loadData();
  }

  ngOnInit() {
    this.groupedData = this.groupItems(this.items, 5); 
  }

  loadData() {
    this.apiProduct.getProduct().subscribe({
      next: (response) => this.items = response.data,
      error: (err) => console.error(err),
    });
  }
  
  groupItems(array: any[], groupSize: number): any[][] {
    let groups = []; 
    for (let i = 0; i < array.length; i += groupSize) {
      groups.push(array.slice(i, i + groupSize)); 
    } 
    return groups; 
  }

  addNewProduct() {
    const newProduct = { id: 1, name: 'Producto 1', price: 100 };
    this.dataService.addProduct(newProduct);
  }

  addProducto() {
    const newProduct = { id: 1, name: 'Producto 1', price: 100 };
    this.dataService.addProduct(newProduct);
  }
}
