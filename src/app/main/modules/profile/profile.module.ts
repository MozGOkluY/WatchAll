import { ProfileRoutingModule } from './profile-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileShellComponent } from './components/profile-shell/profile-shell.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/user.reducer';
import { UserEffects } from './state/user.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [ProfileComponent, ProfileShellComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    StoreModule.forFeature('user', reducer),
    EffectsModule.forFeature([UserEffects])
  ]
})
export class ProfileModule { }
