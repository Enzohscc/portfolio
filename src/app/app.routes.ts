import { AboutComponent } from './domain/about/about.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: async () => (await (import('./domain/inicio/inicio.component'))).InicioComponent
  },
  {
    path: 'about',
    loadComponent: async () => (await (import('./domain/about/about.component'))).AboutComponent
  },
  {
    path: 'portfolio',
    loadComponent: async () => (await (import('./domain/portfolio/portfolio.component'))).PortfolioComponent
  },
  {
    path: 'contact',
    loadComponent: async () => (await (import('./domain/contact/contact.component'))).ContactComponent
  },
  {
    path: 'education',
    loadComponent: async () => (await (import('./domain/education/education.component'))).EducationComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
