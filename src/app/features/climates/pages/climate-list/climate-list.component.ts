import { Component } from '@angular/core';

import { NoListItemsComponent } from '../../../../shared/components/no-list-items/no-list-items.component';
import { ListPageWrapperComponent } from '../../../../shared/components/list-page-wrapper/list-page-wrapper.component';

@Component({
  selector: 'app-climate-list',
  standalone: true,
  imports: [
    NoListItemsComponent,
    ListPageWrapperComponent
  ],
  templateUrl: './climate-list.component.html'
})
export class ClimateListComponent {
  climates: any[];
  pageWrapper: { title: string, description: string, instruction?: string };
  
  constructor() {
    // Initialize the data
    this.climates = [];
    this.pageWrapper = {
      title: 'Climates',
      description: 'Explore various climate types and their characteristics.',
      instruction: 'Select a climate to view detailed information and related data.'
    };
  }
}
