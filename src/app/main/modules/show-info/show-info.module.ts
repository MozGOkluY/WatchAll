import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowInfoComponent } from './components/show-info/show-info.component';
import { ShowInfoRoutingModule } from './show-info-routing.module';
import { ShowInfoShellComponent } from './components/show-info-shell/show-info-shell.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './state/show.reducer';
import { ShowEffects } from './state/show.effects';

@NgModule({
  declarations: [ShowInfoComponent, ShowInfoShellComponent],
  imports: [
    CommonModule,
    ShowInfoRoutingModule,
    StoreModule.forFeature('show', reducer),
    EffectsModule.forFeature([ShowEffects]),
  ]
})
export class ShowInfoModule { }
