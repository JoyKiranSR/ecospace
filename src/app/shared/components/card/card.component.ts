import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() hasHeader: boolean;
  @Input() hasFooter: boolean;

  constructor() {
    this.hasHeader = false;
    this.hasFooter = false;
  }
}
