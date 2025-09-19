import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GrowthStage } from '../../models/growth-stage.model';
import { GrowthStageService } from '../../services/growth-stage.service';
import { ListPageWrapperComponent } from '../../../../shared/components/list-page-wrapper/list-page-wrapper.component';
import { ButtonVarient } from '../../../../enums/shared.enum';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { Tab } from '../../../../shared/models/tab.model';
import { TabContentDirective, TabsComponent } from '../../../../shared/components/tabs/tabs.component';
import { PropertyCardComponent } from '../../../../shared/components/property-card/property-card.component';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-growth-stage-details',
  standalone: true,
  imports: [
    ButtonComponent,
    ListPageWrapperComponent,
    PropertyCardComponent,
    TabsComponent,
    TabContentDirective,
    TitleCasePipe
  ],
  templateUrl: './growth-stage-details.component.html',
  styleUrl: './growth-stage-details.component.scss'
})
export class GrowthStageDetailsComponent implements OnInit {
  growthStage: GrowthStage | null;
  tabs: Tab[];
  ButtonVarient = ButtonVarient;

  constructor(private route: ActivatedRoute, private growthStageService: GrowthStageService) {
    this.growthStage = null;
    this.tabs = [
      { id: 'overview', label: 'Overview' },
      { id: 'care-tips', label: 'Care Tips' },
      { id: 'notes', label: 'Notes / Tips' }
    ];
  }

  ngOnInit() {
    const stageId = this.route.snapshot.paramMap.get('id');
    if (stageId) {
      this.growthStageService.getGrowthStageDetails(stageId).subscribe({
        next: (response) => {
          this.growthStage = response.data;
        },
        error: (error) => {
          console.error('Error fetching growth stage details:', error);
        }
      });
    }
  }

  getGrowthStageInitial(): string | null {
    return this.growthStage?.name.split(' ').map(n => n[0]).join('').toUpperCase() || null;
  }

  goBack() {
    window.history.back();
  }
}
