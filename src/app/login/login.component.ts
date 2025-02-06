import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        if (response.token) {
          this.authService.saveToken(response.token);
          this.router.navigate(['/home']);
        } else {
          this.errorMessage = 'Invalid login credentials';
        }
      },
      error => {
        this.errorMessage = 'An error occurred during login';
      }
    );
  }
  onLogin(): void {
    
  }
}