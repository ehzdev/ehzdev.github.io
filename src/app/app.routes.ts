import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'; 
import { ProjectsComponent } from './pages/projects/projects.component';

export const routes: Routes = [
  { path: '', component: HomeComponent,  data: { name: 'home' } },
  { path: 'proyectos', component: ProjectsComponent, data: { name: 'proyects' } },
];