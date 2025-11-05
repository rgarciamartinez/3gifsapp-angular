import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./gifs/pages/dashboard-page/dashboard-page'),
    children: [
      {
        path: 'trending',
        loadComponent: () => import('./gifs/pages/trendingPage/trendingPage'),
      },
      {
        path: 'search',
        loadComponent: () => import('./gifs/pages/searchPage/searchPage'),
      },
      {
        path:'**',
        redirectTo:'trending'
      }
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];
