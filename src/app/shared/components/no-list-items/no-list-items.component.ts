import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-no-list-items',
  standalone: true,
  imports: [],
  templateUrl: './no-list-items.component.html'
})
export class NoListItemsComponent {
  @Input() message: string;
  @Input() instruction: string;

  constructor() {
    this.message = '';
    this.instruction = '';
  }
}
