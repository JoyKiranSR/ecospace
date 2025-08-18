import { Component } from '@angular/core';

@Component({
  selector: 'app-no-list-items',
  standalone: true,
  imports: [],
  templateUrl: './no-list-items.component.html'
})
export class NoListItemsComponent {
  message: string;
  instruction: string;

  constructor() {
    this.message = '';
    this.instruction = '';
  }
}
