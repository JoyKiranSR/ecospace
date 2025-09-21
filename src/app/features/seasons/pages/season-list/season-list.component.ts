import { Component } from '@angular/core';

import { NoListItemsComponent } from '../../../../shared/components/no-list-items/no-list-items.component';
import { ListPageWrapperComponent } from '../../../../shared/components/list-page-wrapper/list-page-wrapper.component';

@Component({
  selector: 'app-season-list',
  standalone: true,
  imports: [
    NoListItemsComponent,
    ListPageWrapperComponent
  ],
  templateUrl: './season-list.component.html'
})
export class SeasonListComponent {
  pageWrapper: { title: string; description: string; instruction?: string };
  seasons: any[];

  constructor() {
    this.pageWrapper = {
      title: 'Seasons',
      description: 'Discover the different seasons and their impact on agriculture and ecosystems.',
      instruction: 'Select a season to view detailed information and related data.'
    };
    this.seasons = [];
  }
}
