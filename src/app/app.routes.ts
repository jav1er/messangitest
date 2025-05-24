import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',

    loadComponent: () =>
      import('./pages/home-page/home-page.component').then(
        (c) => c.HomePageComponent
      ),
  },

  {
    path: 'details',

    loadComponent: () =>
      import('./pages/details/details.component').then(
        (c) => c.DetailsComponent
      ),
  },
];
