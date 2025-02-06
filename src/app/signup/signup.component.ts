import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: false,
  
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm: FormGroup;
  
  fullName: string = '';
  email: string = '';
  password: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.signupForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get f() {
    return this.signupForm.controls; 
  }

  onSignup() {
    if (this.signupForm.valid) {
      console.log('Full Name:', this.signupForm.value.fullName);
      console.log('Email:', this.signupForm.value.email);
      console.log('Password:', this.signupForm.value.password);
      alert('Signup successful! Please log in.');
      this.router.navigate(['/login']);
    } else {
      alert('Please fill in all fields correctly.');
    }
  }

}
