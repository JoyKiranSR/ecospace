import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TitleCasePipe } from '@angular/common';

import { ButtonVarient } from '../../../../enums/shared.enum';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { NoListItemsComponent } from '../../../../shared/components/no-list-items/no-list-items.component';
import { ListPageWrapperComponent } from '../../../../shared/components/list-page-wrapper/list-page-wrapper.component';
import { ClimateService } from '../../services/climate.service';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-climate-list',
  standalone: true,
  imports: [
    ButtonComponent,
    CardComponent,
    NoListItemsComponent,
    ListPageWrapperComponent,
    TitleCasePipe
  ],
  templateUrl: './climate-list.component.html'
})
export class ClimateListComponent implements OnInit {
  ButtonVarient = ButtonVarient;
  climates: any[];
  pageWrapper: { title: string, description: string, instruction?: string };

  constructor(private climateService: ClimateService, private router: Router) {
    // Initialize the data
    this.climates = [];
    this.pageWrapper = {
      title: 'Climates',
      description: 'Explore various climate types and their characteristics.',
      instruction: 'Select a climate to view detailed information and related data.'
    };
  }

  ngOnInit(): void {
    // Fetch climates list from service
    this.climateService.getClimates().subscribe({
      next: (response) => {
        this.climates = response.data;
      },
      error: (err) => {
        console.error('Error fetching climates:', err);
      }
    });
  }

  goToClimateDetails(climateId: string): void {
    this.router.navigate(['/climates', climateId]);
  }
}
