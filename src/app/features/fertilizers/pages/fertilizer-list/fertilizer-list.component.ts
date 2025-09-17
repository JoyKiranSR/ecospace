import { Component } from '@angular/core';

import { ListPageWrapperComponent } from '../../../../shared/components/list-page-wrapper/list-page-wrapper.component';
import { NoListItemsComponent } from '../../../../shared/components/no-list-items/no-list-items.component';
import { Fertilizer } from '../../models/fertilizer.model';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ButtonVarient } from '../../../../enums/shared.enum';

@Component({
  selector: 'app-fertilizer-list',
  standalone: true,
  imports: [
    ButtonComponent,
    CardComponent,
    NoListItemsComponent,
    ListPageWrapperComponent
  ],
  templateUrl: './fertilizer-list.component.html',
  styleUrl: './fertilizer-list.component.scss'
})
export class FertilizerListComponent {
  listWrapper: { title: string; description: string; instruction: string };
  fertilizers: Fertilizer[]; // Placeholder for fertilizer data
  ButtonVarient = ButtonVarient;

  constructor() {
    this.listWrapper = {
      title: 'Fertilizers',
      description: 'Discover a variety of fertilizers, their properties, and descriptions.',
      instruction: 'Click on "See Details" to learn more about each fertilizer.'
    };
    // Initialize fertilizers array
    this.fertilizers = [];
  }

  ngOnInit() {
    // Fetch the list of fertilizers when the component initializes
    // This is a placeholder; replace with actual service call
    this.fertilizers = [
      {
        id: '1',
        name: 'Nitrogen Fertilizer',
        type: 'Chemical',
        form: 'Granular',
        applicationMethod: 'Soil Application',
        availability: 'Year-round',
        description: 'A fertilizer rich in nitrogen, essential for plant growth.',
        purpose: 'Promotes leafy growth'
      },
      {
        id: '2',
        name: 'Compost',
        type: 'Organic',
        form: 'Bulk',
        applicationMethod: 'Soil Amendment',
        availability: 'Seasonal',
        description: 'Decomposed organic matter that enriches soil.',
        purpose: 'Improves soil structure and fertility'
      }
    ];
  }

  goToFertilizerDetails(fertilizerId: string) {
    // Navigate to the fertilizer details page
    // This is a placeholder; replace with actual navigation logic
    console.log(`Navigating to details for fertilizer ID: ${fertilizerId}`);
  }
}
