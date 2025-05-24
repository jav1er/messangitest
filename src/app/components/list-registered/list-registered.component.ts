import { Component, Input  } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import {
  NgFor,
  NgIf,
} from '@angular/common';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-list-registered',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    NgFor,
  ],
  templateUrl: './list-registered.component.html',
  styleUrl: './list-registered.component.scss',
})
export class ListRegisteredComponent {
  @Input() users!: any[];
  
  constructor(private router: Router) {}
  send() {}
  ngOnInit() {
    //console.log('users', this.users);
  }

  redirect() {
    this.router.navigate(['/']);
  }
}
