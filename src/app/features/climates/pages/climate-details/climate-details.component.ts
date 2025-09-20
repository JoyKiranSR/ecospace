import { Component } from '@angular/core';
import { Climate } from '../../models/climate.model';
import { ListPageWrapperComponent } from '../../../../shared/components/list-page-wrapper/list-page-wrapper.component';

@Component({
  selector: 'app-climate-details',
  standalone: true,
  imports: [
    ListPageWrapperComponent
  ],
  templateUrl: './climate-details.component.html'
})
export class ClimateDetailsComponent {
  climate: Climate | null;
  pageWrapper: { title: string, description: string, instruction?: string };

  constructor() {
    // Initialize properties
    this.climate = null;
    this.pageWrapper = {
      title: 'Climate Details',
      description: 'View detailed information about a specific climate.'
    };
  }
}
