import { HttpClientModule } from '@angular/common/http';
import { AfterViewInit, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/api/user.service';
import { DataService } from '../../services/api/data.service';

@Component({
  selector: 'app-log',
  standalone: true,
  imports: [HttpClientModule,RouterModule],
  templateUrl: './log.component.html',
  styleUrl: './log.component.css'
})
export class LogComponent implements AfterViewInit {
  perfil: any[] = [];
  email: string = ""; 

  constructor(private apiUser: UserService,private dataService: DataService) {
    this.loadData();
  }

  loadData() {
    this.apiUser.getUsers(this.email).subscribe({
      next: (response) => this.perfil = response.data,
      error: (err) => console.error(err),
    });
  }

  postUser(){
    this.apiUser.postUser(this.perfil).subscribe({
      next: (response) => console.log('User creado con exito', response),
      error: (err) => console.error(err),
    });
  }

  ngAfterViewInit() { 
    this.initEventListeners(); 
  } 
  initEventListeners() { 
    const showSignUp = document.getElementById('showSignUp') as HTMLElement; 
    const showLogin = document.getElementById('showLogin') as HTMLElement; 
    const formContainer = document.querySelector('.form-container') as HTMLElement; 
    if (showSignUp && showLogin && formContainer) { 
      showSignUp.addEventListener('click', () => { 
        formContainer.style.transform = 'translateX(-50%)'; 
      }); 
      showLogin.addEventListener('click', () => { 
        formContainer.style.transform = 'translateX(0%)'; 
      }); 
    } 
  }

  addNewDataLog(){
    const newDataLog = "gmail";
    this.dataService.setSessionData(newDataLog);
  }
}
