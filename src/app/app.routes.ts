import { AboutComponent } from './domain/pages/about/about.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: async () => (await (import('./domain/pages/inicio/inicio.component'))).InicioComponent
  },
  {
    path: 'about',
    loadComponent: async () => (await (import('./domain/pages/about/about.component'))).AboutComponent
  },
  {
    path: 'portfolio',
    loadComponent: async () => (await (import('./domain/pages/portfolio/portfolio.component'))).PortfolioComponent
  },
  {
    path: 'resume',
    loadComponent: async () => (await (import('./domain/pages/resume/resume.component'))).ResumeComponent
  },
  {
    path: 'contact',
    loadComponent: async () => (await (import('./domain/pages/contact/contact.component'))).ContactComponent
  },
  {
    path: 'education',
    loadComponent: async () => (await (import('./domain/pages/education/education.component'))).EducationComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
