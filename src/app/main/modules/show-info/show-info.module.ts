import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowInfoComponent } from './components/show-info/show-info.component';
import { ShowInfoRoutingModule } from './show-info-routing.module';

@NgModule({
  declarations: [ShowInfoComponent],
  imports: [
    CommonModule,
    ShowInfoRoutingModule
  ]
})
export class ShowInfoModule { }
