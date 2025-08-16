import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ButtonVarient, LoadingType } from './enums/shared.enum';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CoreModule,
    RouterOutlet,
    SharedModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
