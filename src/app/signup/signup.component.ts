import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: false,
  
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  
  fullName: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSignup() {
    console.log('Full Name:', this.fullName);
    console.log('Email:', this.email);
    console.log('Password:', this.password);

    if (this.fullName && this.email && this.password) {
      alert('Signup successful! Please log in.');
      this.router.navigate(['/login']); // Redirect to Login Page
    } else {
      alert('Please fill in all fields.');
    }
  }

}
