import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  isSubmitting = signal(false);
  errorMessage = signal('');

  form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  async onSubmit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    this.errorMessage.set('');
    const { email, password } = this.form.getRawValue();

    try {
      await this.authService.loginWithEmail(email, password);
      this.router.navigateByUrl('/home');
    } catch (error) {
      this.errorMessage.set((error as Error).message);
    } finally {
      this.isSubmitting.set(false);
    }
  }

  async onGoogleLogin(): Promise<void> {
    this.isSubmitting.set(true);
    this.errorMessage.set('');

    try {
      await this.authService.loginWithGoogle();
      this.router.navigateByUrl('/home');
    } catch (error) {
      this.errorMessage.set((error as Error).message);
    } finally {
      this.isSubmitting.set(false);
    }
  }
}
