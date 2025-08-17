import { Component, Input, OnInit } from '@angular/core';
import { ButtonVarient } from '../../../enums/shared.enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements OnInit {
  @Input() varient: ButtonVarient;
  buttonClass: string;

  constructor() {
    this.varient = ButtonVarient.PRIMARY; // default
    this.buttonClass = 'btn-primary';
  }

  ngOnInit(): void {
    switch (this.varient) {
      case ButtonVarient.PRIMARY:
        this.buttonClass = 'btn-primary';
        break;
      case ButtonVarient.SECONDARY:
        this.buttonClass = 'btn-secondary';
        break;
      case ButtonVarient.OUTLINE:
        this.buttonClass = 'btn-outline';
        break;
      case ButtonVarient.DANGER:
        this.buttonClass = 'btn-danger';
        break;
      case ButtonVarient.SUCCESS:
        this.buttonClass = 'btn-success';
        break;
      case ButtonVarient.WARNING:
        this.buttonClass = 'btn-warning';
        break;
      case ButtonVarient.INFO:
        this.buttonClass = 'btn-info';
        break;
      case ButtonVarient.LINK:
        this.buttonClass = 'btn-link';
        break;
      default:
        this.buttonClass = 'btn-primary'; // fallback
        break;
    }
  }
}
