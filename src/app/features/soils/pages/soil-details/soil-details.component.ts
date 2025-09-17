import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Soil } from '../../models/soil.model';
import { SoilsService } from '../../services/soils.service';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ListPageWrapperComponent } from '../../../../shared/components/list-page-wrapper/list-page-wrapper.component';
import { ButtonVarient } from '../../../../enums/shared.enum';
import { TabContentDirective, TabsComponent } from '../../../../shared/components/tabs/tabs.component';
import { Tab } from '../../../../shared/models/tab.model';
import { PropertyCardComponent } from '../../../../shared/components/property-card/property-card.component';

@Component({
  selector: 'app-soil-details',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    ListPageWrapperComponent,
    PropertyCardComponent,
    TabsComponent,
    TabContentDirective
  ],
  templateUrl: './soil-details.component.html'
})
export class SoilDetailsComponent {
  soil: Soil | null;
  tabs: Tab[];
  ButtonVarient = ButtonVarient;

  constructor(private service: SoilsService, private route: ActivatedRoute,
    private location: Location) {
    // Initialize properties
    this.soil = null;
    this.tabs = [
      { id: 'properties', label: 'Properties' },
      { id: 'issues', label: 'Soil Issues' },
      { id: 'notes', label: 'Notes / Tips' }
    ]
  }

  ngOnInit() {
    // Get the soil ID from the route parameters
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Fetching details for soil ID:', id);
    if (!id) {
      console.error('No soil ID provided in route parameters');
      return;
    }

    // Fetch soil details from service
    this.service.getSoilDetails(id).subscribe({
      next: (response) => {
        console.log('Soil details fetched successfully:', response);
        this.soil = response.data;
      },
      error: (error) => {
        console.error('Error fetching soil details:', error);
      }
    });
  }

  // Method to get the initial letter of the soil name
  getSoilInitial(): string | null {
    return this.soil ? this.soil.name.split(' ').map(word => word.charAt(0).toUpperCase()).join('') : null;
  }

  // Method to handle back navigation
  goBack() {
    this.location.back();
  }

  // Method to handle edit action
  editSoil(id: string) { }
}
