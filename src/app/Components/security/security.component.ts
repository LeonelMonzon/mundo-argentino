import { Component } from '@angular/core';
import { UserService } from '../../services/api/user.service';

@Component({
  selector: 'app-security',
  standalone: true,
  imports: [],
  templateUrl: './security.component.html',
  styleUrl: './security.component.css'
})
export class SecurityComponent {
perfil: any[] = [];
  id: number = 0;
  email: string = ""; 

  constructor(private apiUser: UserService) {
    this.loadData();
  }

  loadData() {
    this.apiUser.getUsers(this.email).subscribe({
      next: (response) => this.perfil = response.data,
      error: (err) => console.error(err),
    });
  }

  putUser(){
    this.apiUser.putUser(this.perfil,this.id).subscribe({
      next: (response) => console.log('User actualizado con exito', response),
      error: (err) => console.error(err),
    });
  }
}
