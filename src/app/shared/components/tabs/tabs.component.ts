import {
  AfterContentInit, Component, ContentChildren, Directive, Input,
  QueryList, TemplateRef
} from '@angular/core';

import { Tab } from '../../models/tab.model';
import { CommonModule } from '@angular/common';

@Directive({
  selector: '[tabContent]',
  standalone: true
})
export class TabContentDirective {
  @Input('tabContent') id!: string;
  constructor(public template: TemplateRef<any>) { }
}

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './tabs.component.html'
})
export class TabsComponent implements AfterContentInit {
  @Input() tabs: Tab[];
  @ContentChildren(TabContentDirective) tabContents: QueryList<TabContentDirective>;
  activeTabId: string;

  constructor() {
    // Initialize properties
    this.tabs = [];
    this.tabContents = new QueryList<TabContentDirective>();
    this.activeTabId = '';
  }

  ngAfterContentInit() {
    console.log('Tab contents:', this.tabContents.toArray());
    if (this.tabs.length > 0) {
      // Set the first tab as active by default
      this.activeTabId = this.tabs[0].id;
    }
  }

  setTab(tabId: string) {
    this.activeTabId = tabId;
  }
}
