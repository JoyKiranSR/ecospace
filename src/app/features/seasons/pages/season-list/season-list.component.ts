import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TitleCasePipe } from '@angular/common';

import { ButtonVarient } from '../../../../enums/shared.enum';
import { Season } from '../../models/season.model';
import { SeasonService } from '../../services/season.service';
import { NoListItemsComponent } from '../../../../shared/components/no-list-items/no-list-items.component';
import { ListPageWrapperComponent } from '../../../../shared/components/list-page-wrapper/list-page-wrapper.component';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-season-list',
  standalone: true,
  imports: [
    ButtonComponent,
    CardComponent,
    NoListItemsComponent,
    ListPageWrapperComponent,
    TitleCasePipe
  ],
  templateUrl: './season-list.component.html'
})
export class SeasonListComponent implements OnInit {
  ButtonVarient = ButtonVarient;
  pageWrapper: { title: string; description: string; instruction?: string };
  seasons: Season[];

  constructor(private seasonService: SeasonService, private router: Router) {
    this.pageWrapper = {
      title: 'Seasons',
      description: 'Discover the different seasons and their impact on agriculture and ecosystems.',
      instruction: 'Select a season to view detailed information and related data.'
    };
    this.seasons = [];
  }

  ngOnInit(): void {
    this.seasonService.getSeasons().subscribe({
      next: (response) => {
        this.seasons = response.data;
      },
      error: (err) => {
        console.error('Error fetching seasons:', err);
      }
    });
  }

  goToSeasonDetails(seasonId: string): void {
    this.router.navigate(['/seasons', seasonId]);
  }
}
