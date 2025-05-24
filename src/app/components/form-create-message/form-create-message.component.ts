import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { GlobalService } from '../../services/global.service';
import { Router } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-form-create-message',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './form-create-message.component.html',
  styleUrl: './form-create-message.component.scss',
})
export class FormCreateMessageComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private globalService: GlobalService, private router: Router,) {
    this.form = this.fb.group({
      fullname: [
        '',
        [
          Validators.required,
          // Validators.minLength(1),
          // Validators.maxLength(50),
        ],
      ],
      to: [
        '',
        [
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(15),
        ],
      ],
      email: ['', [Validators.required]],
      exp: ['', [Validators.required]],
      from: ['STRESSMO'],

      text: ['', [Validators.required /*Validators.maxLength(160)*/]],
      type: ['MT'],
    }) as FormGroup;
  }

  send() {
    // console.log('Formulario:', this.form.errors);
    // console.log('Enviando mensaje');
    // console.log(this.form.value);

    const users = JSON.parse(localStorage.getItem('users') ?? '[]');
    users.push(this.form.value);
    localStorage.setItem('users', JSON.stringify(users));

    this.globalService.sendMessage(this.form.value).subscribe({
      next: (r) => {
        console.log('Mensaje enviado');
        console.log(r);
        
       this.router.navigate(['/details']);
      },
      error: (e) => {
        console.log(e);
        this.router.navigate(['/details']);
      },
    });

    
  }

  getErrorMessage(field: string): string {
    const control = this.form.get(field);
    if (!control || !control.touched || !control.errors) return '';

    const errorMessages = {
      required: 'Debe completar este campo',
      maxlength: (max: number) =>
        `El campo debe tener máximo ${max} caracteres`,
      minlength: (min: number) =>
        `El campo debe tener al menos ${min} caracteres`,
    };

    const errorKey = Object.keys(control.errors)[0];
    const errorMessage = errorMessages[errorKey as keyof typeof errorMessages];

    return typeof errorMessage === 'function'
      ? errorMessage(control.errors[errorKey].requiredLength)
      : errorMessage || '';
  }
}
