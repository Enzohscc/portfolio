import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: async () => (await (import('./domain/inicio/inicio.component'))).InicioComponent,
    title: 'Portfolio - Home'
  },
  {
    path: 'about',
    loadComponent: async () => (await (import('./domain/about/about.component'))).AboutComponent,
    title: 'Portfolio - Sobre'
  },
  {
    path: 'portfolio',
    loadComponent: async () => (await (import('./domain/portfolio/portfolio.component'))).PortfolioComponent,
    title: 'Portfolio'
  },
  {
    path: 'contact',
    loadComponent: async () => (await (import('./domain/contact/contact.component'))).ContactComponent,
    title: 'Portfolio - Contato'
  },
  {
    path: 'education',
    loadComponent: async () => (await (import('./domain/education/education.component'))).EducationComponent,
    title: 'Portfolio - Educação'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
