import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ListPageWrapperComponent } from '../../../../shared/components/list-page-wrapper/list-page-wrapper.component';
import { NoListItemsComponent } from '../../../../shared/components/no-list-items/no-list-items.component';
import { Fertilizer } from '../../models/fertilizer.model';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ButtonVarient } from '../../../../enums/shared.enum';
import { FertilizerService } from '../../services/fertilizer.service';

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

  constructor(private fertilizerService: FertilizerService, private router: Router) {
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
    this.fertilizerService.getFertilizers().subscribe({
      next: (response) => {
        this.fertilizers = response.data;
      },
      error: (error) => {
        console.error('Error fetching fertilizers:', error);
      }
    });
  }

  goToFertilizerDetails(fertilizerId: string) {
    // Navigate to the fertilizer details page
    this.router.navigate(['/fertilizers', fertilizerId]);
  }
}
