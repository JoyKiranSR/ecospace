import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-page-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './list-page-wrapper.component.html'
})
export class ListPageWrapperComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() instruction?: string;

  constructor() {
    // Initialize any necessary properties or services here
    this.title = '';
    this.description = '';
  }
}
