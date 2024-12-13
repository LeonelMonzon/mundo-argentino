import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // Propiedades para almacenar los datos
  sessionData: any = null; // Datos de sesión
  products: any[] = [];    // Lista de productos
  selectedProduct: any[] = []; // Producto específico

  constructor() {}

  // Métodos para manejar los datos de sesión
  setSessionData(data: any) {
    this.sessionData = data;
  }

  getSessionData() {
    return this.sessionData;
  }

  // Métodos para manejar los productos
  addProduct(product: any) {
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }

  setSelectedProduct(product: any) {
    this.selectedProduct = product;
  }

  getSelectedProduct() {
    return this.selectedProduct;
  }
}
