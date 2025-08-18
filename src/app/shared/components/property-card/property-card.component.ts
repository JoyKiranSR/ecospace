import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [],
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.scss'
})
export class PropertyCardComponent {
  @Input() label: string;
  @Input() value: string | number | null;

  constructor() {
    // Initialize properties
    this.label = '';
    this.value = null;
  }
}
