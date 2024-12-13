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
    { name: 'Televisor LED 55"', image: '../../assets/televisor.jpg', price: 70000, description: 'Televisor LED de 55 pulgadas con alta resolución y colores vibrantes.' },
    { name: 'Refrigerador 350L', image: '../../assets/refrigerador.jpg', price: 85000, description: 'Refrigerador de 350 litros con múltiples compartimientos y tecnología de enfriamiento rápido.' },
    { name: 'Lavadora Automática', image: '../../assets/lavadora.jpg', price: 60000, description: 'Lavadora automática con capacidad de 8 kg y diferentes programas de lavado.' },
    { name: 'Microondas', image: '../../assets/microondas.jpg', price: 15000, description: 'Microondas de 20 litros con varias funciones de cocción y descongelado.' },
    { name: 'Aspiradora Robot', image: '../../assets/aspiradora.jpg', price: 25000, description: 'Aspiradora robot con sensor inteligente y autonomía de 90 minutos.' },
    { name: 'Parlante Bluetooth', image: '../../assets/parlante.jpg', price: 10000, description: 'Parlante Bluetooth portátil con sonido estéreo y batería recargable.' },
    { name: 'Cafetera Espresso', image: '../../assets/cafetera.jpg', price: 20000, description: 'Cafetera espresso con bomba de alta presión y espumador de leche integrado.' },
    { name: 'Reloj Inteligente', image: '../../assets/reloj.jpg', price: 12000, description: 'Reloj inteligente con monitor de ritmo cardíaco y notificaciones de smartphone.' },
    { name: 'Lámpara LED', image: '../../assets/lampara.jpg', price: 3000, description: 'Lámpara LED de escritorio con ajuste de brillo y bajo consumo de energía.' },
    { name: 'Bicicleta de Montaña', image: '../../assets/bicicleta.jpg', price: 50000, description: 'Bicicleta de montaña robusta, ideal para terrenos difíciles y aventuras al aire libre.' }
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

  addNewProduct(product: any) {
    this.dataService.addProduct(product);
  }

  addProducto(product: any) {
    this.dataService.setSelectedProduct(product);
  }
}
