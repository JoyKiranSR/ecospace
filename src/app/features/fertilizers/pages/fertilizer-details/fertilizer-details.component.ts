import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, Location } from '@angular/common';

import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ListPageWrapperComponent } from '../../../../shared/components/list-page-wrapper/list-page-wrapper.component';
import { Fertilizer } from '../../models/fertilizer.model';
import { ButtonVarient } from '../../../../enums/shared.enum';
import { TabContentDirective, TabsComponent } from '../../../../shared/components/tabs/tabs.component';
import { PropertyCardComponent } from '../../../../shared/components/property-card/property-card.component';
import { Tab } from '../../../../shared/models/tab.model';
import { FertilizerService } from '../../services/fertilizer.service';

@Component({
  selector: 'app-fertilizer-details',
  standalone: true,
  imports: [
    ButtonComponent,
    CommonModule,
    ListPageWrapperComponent,
    PropertyCardComponent,
    TabsComponent,
    TabContentDirective
  ],
  templateUrl: './fertilizer-details.component.html',
  styleUrl: './fertilizer-details.component.scss'
})
export class FertilizerDetailsComponent implements OnInit {
  listWrapper: { title: string; description: string; instruction: string };
  fertilizer: Fertilizer | null;
  tabs: Tab[];
  ButtonVarient = ButtonVarient;

  constructor(private route: ActivatedRoute, private fertilizerService: FertilizerService, private location: Location) {
    this.listWrapper = {
      title: 'Fertilizer Details',
      description: 'Detailed information about the selected fertilizer.',
      instruction: 'Review the details below.'
    };
    // Initialize fertilizer object
    this.fertilizer = null;
    // Initialize tabs with placeholder content
    this.tabs = [
      { id: 'overview', label: 'Overview' },
      { id: 'nutrients', label: 'Nutrients' },
      { id: 'notes', label: 'Notes / Tips' }
    ];
  }

  ngOnInit() {
    // Fetch the fertilizer details based on route parameters (e.g., ID)
    const fertilizerId = this.route.snapshot.paramMap.get('id');
    this.fertilizerService.getFertilizerDetails(fertilizerId || '').subscribe({
      next: (response) => {
        this.fertilizer = response.data;
        console.log('Fertilizer details fetched successfully:', this.fertilizer);
      },
      error: (error) => {
        console.error('Error fetching fertilizer details:', error);
      }
    });
  }

  getFertilizerInitial(): string | null {
    return this.fertilizer ? this.fertilizer.name.split(' ').map(word => word.charAt(0).toUpperCase()).join('') : null;
  }

  goBack() {
    this.location.back();
  }
}
