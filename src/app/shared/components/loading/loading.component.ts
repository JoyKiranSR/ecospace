import { Component, Input, OnInit } from '@angular/core';
import { LoadingType } from '../../../enums/shared.enum';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent implements OnInit {
  @Input() type: LoadingType;
  LoadingType = LoadingType;

  constructor() {
    this.type = LoadingType.SPINNER; // default
  }

  ngOnInit(): void {
    switch (this.type) {
      case LoadingType.DOTS:
        break;
      case LoadingType.DUEL_RING:
        break;
      case LoadingType.SPINNER:
        break;
      case LoadingType.SWEEP:
        break;
      default:
        this.type = LoadingType.SPINNER; // default
        break;
    }
  }
}