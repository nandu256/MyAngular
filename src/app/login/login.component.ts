import { Component } from '@angular/core';
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

  constructor(private router: Router) {}

  onLogin() {
    console.log('Entered Email:', this.email);
    console.log('Entered Password:', this.password);

    if (this.email.trim() === 'admin@example.com' && this.password.trim() === 'admin123') {
      alert('Login successful!');
      this.router.navigate(['/home']); 
    } else {
      alert('Invalid email or password!');
    }
  }

}
