import { ListsComponent } from './components/lists/lists.component';
import { ListsRoutingModule } from './lists-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ListsComponent],
  imports: [
    CommonModule,
    ListsRoutingModule
  ]
})
export class ListsModule { }
