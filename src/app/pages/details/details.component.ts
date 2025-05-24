// import { Component } from '@angular/core';
import { ListRegisteredComponent } from '../../components/list-registered/list-registered.component';
import { NgFor, NgIf } from '@angular/common';


import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [ListRegisteredComponent, NgIf],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  data: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const storedData = localStorage.getItem('users');
      if (storedData) {
        this.data = JSON.parse(storedData);
        console.log(this.data);
      } else {
        console.log('No hay data almacenada');
      }
      console.log('data', this.data);
    }
  }
}