import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location, TitleCasePipe } from '@angular/common';

import { ButtonVarient } from '../../../../enums/shared.enum';
import { Climate } from '../../models/climate.model';
import { ClimateService } from '../../services/climate.service';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ListPageWrapperComponent } from '../../../../shared/components/list-page-wrapper/list-page-wrapper.component';
import { PropertyCardComponent } from '../../../../shared/components/property-card/property-card.component';
import { TabContentDirective, TabsComponent } from '../../../../shared/components/tabs/tabs.component';
import { Tab } from '../../../../shared/models/tab.model';

@Component({
  selector: 'app-climate-details',
  standalone: true,
  imports: [
    ButtonComponent,
    ListPageWrapperComponent,
    PropertyCardComponent,
    TabsComponent,
    TabContentDirective,
    TitleCasePipe
  ],
  templateUrl: './climate-details.component.html'
})
export class ClimateDetailsComponent implements OnInit {
  ButtonVarient = ButtonVarient;
  climate: Climate | null;
  pageWrapper: { title: string, description: string, instruction?: string };
  tabs: Tab[];

  constructor(private route: ActivatedRoute, private climateService: ClimateService, private location: Location) {
    // Initialize properties
    this.climate = null;
    this.pageWrapper = {
      title: 'Climate Details',
      description: 'View detailed information about a specific climate.'
    };
    this.tabs = [
      { label: 'Overview', id: 'overview' },
      { label: 'Notes/Tips', id: 'notes' }
    ];
  }

  ngOnInit(): void {
    // Fetch climate details based on route parameters
    this.route.paramMap.subscribe(params => {
      const climateId = params.get('id');
      if (climateId) {
        // Fetch climate details from the service
        this.climateService.getClimateById(climateId).subscribe({
          next: (response) => {
            console.log('Fetched climate details:', response);
            this.climate = response.data;
          },
          error: (err) => {
            console.error('Error fetching climate details:', err);
          }
        });
      }
    });
  }

  getClimateInitial(): string {
    return this.climate ? this.climate.name.split(' ').map(word => word.charAt(0).toUpperCase()).join('') : '';
  }

  goBack(): void {
    // Navigate back to the previous page
    this.location.back();
  }
}
