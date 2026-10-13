import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { WEB3FORMS_ACCESS_KEY } from '../../../environments/web3forms.config';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact {
  private fb = inject(FormBuilder);

  status = signal<SubmitStatus>('idle');

  form = this.fb.nonNullable.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    subject: [''],
    message: ['', [Validators.required]],
  });

  async onSubmit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.status.set('submitting');
    const { name, email, subject, message } = this.form.getRawValue();

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: subject ? `Atelier Mercedes Fleitas: ${subject}` : 'Atelier Mercedes Fleitas: Nueva consulta',
          from_name: name,
          name,
          email,
          message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        this.status.set('success');
        this.form.reset();
      } else {
        this.status.set('error');
      }
    } catch {
      this.status.set('error');
    }
  }
}
