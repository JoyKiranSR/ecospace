import { Component } from '@angular/core';

import { ListPageWrapperComponent } from '../../../../shared/components/list-page-wrapper/list-page-wrapper.component';
import { Season } from '../../models/season.model';

@Component({
  selector: 'app-season-details',
  standalone: true,
  imports: [
    ListPageWrapperComponent
  ],
  templateUrl: './season-details.component.html'
})
export class SeasonDetailsComponent {
  pageWrapper: { title: string; description: string; instruction?: string };
  season: Season | null;

  constructor() {
    this.pageWrapper = {
      title: 'Season Details',
      description: 'Detailed information about the selected season will be displayed here.'
    };
    this.season = null; // This will be populated with actual season data
  }
}
