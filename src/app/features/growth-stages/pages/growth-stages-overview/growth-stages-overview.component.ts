import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ListPageWrapperComponent } from '../../../../shared/components/list-page-wrapper/list-page-wrapper.component';
import { NoListItemsComponent } from '../../../../shared/components/no-list-items/no-list-items.component';
import { GrowthStageService } from '../../services/growth-stage.service';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-growth-stages-overview',
  standalone: true,
  imports: [
    NoListItemsComponent,
    ListPageWrapperComponent,
    TitleCasePipe
  ],
  templateUrl: './growth-stages-overview.component.html',
  styleUrl: './growth-stages-overview.component.scss'
})
export class GrowthStagesOverviewComponent implements OnInit {
  listWrapper: { title: string, description: string, instruction: string };
  noListItems: { message: string, instruction: string };
  growthStages: any[];

  constructor(private growthStageService: GrowthStageService, private router: Router) {
    this.listWrapper = {
      title: 'Growth Stages Overview',
      description: 'Explore the various growth stages of plants, from germination to maturity, and understand the key characteristics of each stage.',
      instruction: 'Select a growth stage to learn more about its features and requirements.'
    };
    this.noListItems = {
      message: 'No Growth Stages Found',
      instruction: 'There are currently no growth stages to display.'
    };
    // Initialize growthStages array
    this.growthStages = [];
  }

  ngOnInit() {
    // Fetch the list of growth stages when the component initializes
    this.growthStageService.getGrowthStages().subscribe({
      next: (response) => {
        // Order stages by 'order' property
        this.growthStages = response.data.sort((a, b) => a.order - b.order);
      },
      error: (error) => {
        console.error('Error fetching growth stages:', error);
      }
    });
  }

  goToStageDetails(stageId: number) {
    // Navigate to the stage details page
    this.router.navigate(['/growth-stages', stageId]);
  }
}
