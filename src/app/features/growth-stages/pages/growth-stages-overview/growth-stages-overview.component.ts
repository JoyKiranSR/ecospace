import { Component, OnInit } from '@angular/core';

import { ListPageWrapperComponent } from '../../../../shared/components/list-page-wrapper/list-page-wrapper.component';
import { NoListItemsComponent } from '../../../../shared/components/no-list-items/no-list-items.component';

@Component({
  selector: 'app-growth-stages-overview',
  standalone: true,
  imports: [
    NoListItemsComponent,
    ListPageWrapperComponent
  ],
  templateUrl: './growth-stages-overview.component.html',
  styleUrl: './growth-stages-overview.component.scss'
})
export class GrowthStagesOverviewComponent implements OnInit {
  listWrapper: { title: string, description: string, instruction: string };
  noListItems: { message: string, instruction: string };
  growthStages: any[];

  constructor() {
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
    // This is a placeholder; replace with actual service call
    this.growthStages = [
      { id: 1, name: 'Germination', description: 'The process by which a plant grows from a seed.' },
      { id: 2, name: 'Vegetative', description: 'The stage where the plant focuses on growing leaves and stems.' },
      { id: 3, name: 'Budding', description: 'The phase where flower buds start to form.' },
      { id: 4, name: 'Flowering', description: 'The stage when the plant produces flowers.' },
      { id: 5, name: 'Fruiting', description: 'The phase where fruits develop and mature.' }
    ];
  }

  goToStageDetails(stageId: number) {
    // Navigate to the stage details page
    console.log('Navigating to stage details for stage ID:', stageId);
  }
}
