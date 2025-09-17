import { Component } from '@angular/core';
import { ListPageWrapperComponent } from '../../../../shared/components/list-page-wrapper/list-page-wrapper.component';
import { NoListItemsComponent } from '../../../../shared/components/no-list-items/no-list-items.component';

@Component({
  selector: 'app-fertilizer-list',
  standalone: true,
  imports: [
    NoListItemsComponent,
    ListPageWrapperComponent
  ],
  templateUrl: './fertilizer-list.component.html',
  styleUrl: './fertilizer-list.component.scss'
})
export class FertilizerListComponent {
  listWrapper: { title: string; description: string; instruction: string };
  fertilizers: any[]; // Placeholder for fertilizer data

  constructor() {
    this.listWrapper = {
      title: 'Fertilizers',
      description: 'Discover a variety of fertilizers, their properties, and descriptions.',
      instruction: 'Click on "See Details" to learn more about each fertilizer.'
    };
    // Initialize fertilizers array
    this.fertilizers = [];
  }
}
