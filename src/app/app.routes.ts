import { Routes } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';
import { SoilListComponent } from './features/soils/pages/soil-list/soil-list.component';
import { SoilDetailsComponent } from './features/soils/pages/soil-details/soil-details.component';
import { FertilizerListComponent } from './features/fertilizers/pages/fertilizer-list/fertilizer-list.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'soils', component: SoilListComponent },
      { path: 'soils/:id', component: SoilDetailsComponent },
      { path: 'fertilizers', component: FertilizerListComponent },
      { path: '', redirectTo: 'soils', pathMatch: 'full' },
      { path: '**', redirectTo: 'soils' } // Redirect any unknown paths to plants
    ]
  }
];
