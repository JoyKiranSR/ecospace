import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonComponent,
    CardComponent,
    LoadingComponent,
    ToastComponent
  ],
  exports: [
    ButtonComponent,
    CardComponent,
    LoadingComponent,
    ToastComponent
  ]
})
export class SharedModule { }
