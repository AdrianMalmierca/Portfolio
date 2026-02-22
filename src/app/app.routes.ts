import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { StackComponent } from './features/stack/stack.component';
import { ContactComponent } from './features/contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'stack', component: StackComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'home' }
];