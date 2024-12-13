import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataService } from '../../../services/api/data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HttpClientModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderComponent {
  dataSesion = "";
  menuItems = [ 
    { index: 0, color: '#ff2972', icon: 'home-outline',route: '' },
    { index: 1, color: '#ffb529', icon: 'wallet-outline',route: '/wallet' },
    { index: 2, color: '#29ffb5', icon: 'person-outline',route: '/profile' },
    { index: 3, color: '#2972ff', icon: 'key-outline',route: '/security' }
  ]; 
  toggleMenu() { 
    const menu = document.querySelector('.menu'); 
    menu?.classList.toggle('active'); 
  }
  constructor (private dataService: DataService){}
  ngOnInit() {
    this.dataSesion = this.dataService.getSessionData();
  }
  closeSession(){
    const session = null;
    this.dataService.setSessionData(session);
  }
  isSessionActive(): boolean { 
    return this.dataSesion !== null; 
  }
}
