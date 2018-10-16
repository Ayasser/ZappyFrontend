import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { TwitterComponent } from './twitter/twitter.component';

const AppRoutes: Routes = [
  { path: 'twitter', component: TwitterComponent },

];
export const AppRouting: ModuleWithProviders = RouterModule.forRoot(AppRoutes, { useHash: true });
