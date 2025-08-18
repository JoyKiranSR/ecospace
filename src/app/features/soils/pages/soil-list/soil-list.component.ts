import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SoilsService } from '../../services/soils.service';
import { Soil } from '../../models/soil.model';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { ButtonVarient } from '../../../../enums/shared.enum';
import { ListPageWrapperComponent } from '../../../../shared/components/list-page-wrapper/list-page-wrapper.component';
import { NoListItemsComponent } from '../../../../shared/components/no-list-items/no-list-items.component';

@Component({
  selector: 'app-soil-list',
  standalone: true,
  imports: [
    ButtonComponent,
    CardComponent,
    ListPageWrapperComponent,
    NoListItemsComponent
  ],
  templateUrl: './soil-list.component.html'
})
export class SoilListComponent implements OnInit {
  listWrapper: { title: string; description: string; instruction: string };
  soils: Soil[];
  ButtonVarient = ButtonVarient;

  constructor(private service: SoilsService, private router: Router) {
    // Initialize properties
    this.listWrapper = {
      title: 'Soils',
      description: 'Explore a variety of soils, their properties, and descriptions.',
      instruction: 'Click on "See Details" to learn more about each soil.'
    };
    this.soils = [];
  }

  ngOnInit() {
    // Fetch the list of soils when the component initializes
    this.service.getSoils(10, 1).subscribe({
      next: (response) => {
        this.soils = response.data;
      },
      error: (error) => {
        console.error('Error fetching soils:', error);
      }
    });
  }

  goToSoilDetails(soilId: string) {
    // Navigate to the soil details page
    this.router.navigate(['/soils', soilId]);
  }
}
