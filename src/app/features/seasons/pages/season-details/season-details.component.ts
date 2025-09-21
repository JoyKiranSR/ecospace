import { Component, OnInit } from '@angular/core';
import { Location, TitleCasePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { ButtonVarient } from '../../../../enums/shared.enum';
import { ListPageWrapperComponent } from '../../../../shared/components/list-page-wrapper/list-page-wrapper.component';
import { Season } from '../../models/season.model';
import { SeasonService } from '../../services/season.service';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { TabContentDirective, TabsComponent } from '../../../../shared/components/tabs/tabs.component';
import { Tab } from '../../../../shared/models/tab.model';
import { PropertyCardComponent } from '../../../../shared/components/property-card/property-card.component';

@Component({
  selector: 'app-season-details',
  standalone: true,
  imports: [
    ButtonComponent,
    ListPageWrapperComponent,
    PropertyCardComponent,
    TabsComponent,
    TabContentDirective,
    TitleCasePipe
  ],
  templateUrl: './season-details.component.html'
})
export class SeasonDetailsComponent implements OnInit {
  ButtonVarient = ButtonVarient;
  pageWrapper: { title: string; description: string; instruction?: string };
  season: Season | null;
  tabs: Tab[];

  constructor(private route: ActivatedRoute, private location: Location, private seasonService: SeasonService) {

    this.pageWrapper = {
      title: 'Season Details',
      description: 'Detailed information about the selected season will be displayed here.'
    };
    this.season = null; // This will be populated with actual season data
    this.tabs = [
      { label: 'Overview', id: 'overview' },
      { label: 'Activities', id: 'activities' },
      { label: 'Notes / Tips', id: 'notes' }
    ];
  }

  ngOnInit(): void {
    // Fetch the season ID from the route parameters
    this.route.paramMap.subscribe(params => {
      const seasonId = params.get('id');
      if (seasonId) {
        // Fetch the season details using the seasonId
        this.seasonService.getSeasonById(seasonId).subscribe({
          next: (response) => {
            this.season = response.data;
          },
          error: (err) => {
            console.error('Error fetching season details:', err);
          }
        });
      }
    });
  }

  getSeasonInitial(): string | null{
    return this.season ? this.season.name.split(' ').map(word => word.charAt(0)).join('') : null;
  }

  goBack(): void {
    this.location.back();
  }
}
