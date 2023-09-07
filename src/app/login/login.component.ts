import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;
  loggedInUserData: any;

  

  constructor(private fb: FormBuilder,private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onLoginSubmit(): void {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;

    

      
      const isAuthenticated = true;

    if (isAuthenticated) {
      this.router.navigate(['/table']);

    }
          

      console.log('Email:', email);
      console.log('Password:', password);
    } else {
      // The form is invalid, show error messages
      this.loginForm.markAllAsTouched(); 
    }
  }
}
