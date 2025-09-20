import { Routes } from '@angular/router';

import { LayoutComponent } from './core/components/layout/layout.component';
import { ClimateDetailsComponent } from './features/climates/pages/climate-details/climate-details.component';
import { ClimateListComponent } from './features/climates/pages/climate-list/climate-list.component';
import { FertilizerDetailsComponent } from './features/fertilizers/pages/fertilizer-details/fertilizer-details.component';
import { FertilizerListComponent } from './features/fertilizers/pages/fertilizer-list/fertilizer-list.component';
import { GrowthStageDetailsComponent } from './features/growth-stages/pages/growth-stage-details/growth-stage-details.component';
import { GrowthStagesOverviewComponent } from './features/growth-stages/pages/growth-stages-overview/growth-stages-overview.component';
import { SoilDetailsComponent } from './features/soils/pages/soil-details/soil-details.component';
import { SoilListComponent } from './features/soils/pages/soil-list/soil-list.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'climates', component: ClimateListComponent },
      { path: 'climates/:id', component: ClimateDetailsComponent },
      { path: 'fertilizers', component: FertilizerListComponent },
      { path: 'fertilizers/:id', component: FertilizerDetailsComponent },
      { path: 'growth-stages', component: GrowthStagesOverviewComponent },
      { path: 'growth-stages/:id', component: GrowthStageDetailsComponent },
      { path: 'soils', component: SoilListComponent },
      { path: 'soils/:id', component: SoilDetailsComponent },
      { path: '', redirectTo: 'soils', pathMatch: 'full' },
      { path: '**', redirectTo: 'soils' } // Redirect any unknown paths to plants
    ]
  }
];
