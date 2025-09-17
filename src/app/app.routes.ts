import { Routes } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';
import { SoilListComponent } from './features/soils/pages/soil-list/soil-list.component';
import { SoilDetailsComponent } from './features/soils/pages/soil-details/soil-details.component';
import { FertilizerListComponent } from './features/fertilizers/pages/fertilizer-list/fertilizer-list.component';
import { FertilizerDetailsComponent } from './features/fertilizers/pages/fertilizer-details/fertilizer-details.component';
import { GrowthStagesOverviewComponent } from './features/growth-stages/pages/growth-stages-overview/growth-stages-overview.component';
import { GrowthStageDetailsComponent } from './features/growth-stages/pages/growth-stage-details/growth-stage-details.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'soils', component: SoilListComponent },
      { path: 'soils/:id', component: SoilDetailsComponent },
      { path: 'fertilizers', component: FertilizerListComponent },
      { path: 'fertilizers/:id', component: FertilizerDetailsComponent },
      { path: 'growth-stages', component: GrowthStagesOverviewComponent },
      { path: 'growth-stages/:id', component: GrowthStageDetailsComponent },
      { path: '', redirectTo: 'soils', pathMatch: 'full' },
      { path: '**', redirectTo: 'soils' } // Redirect any unknown paths to plants
    ]
  }
];
