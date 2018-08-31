import { RouterModule, Routes } from '@angular/router';

import {
  HomeComponent
} from "./components/index-pagina";

const routes: Routes = [
  { path: 'trips', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'trips' }
];

export const APP_ROUTING: any = RouterModule.forRoot(routes, { useHash: true });
