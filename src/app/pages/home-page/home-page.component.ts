import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { FormCreateMessageComponent } from '../../components/form-create-message/form-create-message.component';

@Component({
  selector: 'app-home-page',
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    FormCreateMessageComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
