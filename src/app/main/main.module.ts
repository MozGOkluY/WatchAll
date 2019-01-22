import { ShowInfoModule } from './modules/show-info/show-info.module';
import { ProfileModule } from './modules/profile/profile.module';
import { HomeModule } from './modules/home/home.module';
import { MainRoutingModule } from './main-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainShellComponent } from './main-shell.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TopnavComponent } from './components/topnav/topnav.component';

@NgModule({
  declarations: [
    MainShellComponent,
    TopnavComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ProfileModule,
    ShowInfoModule,
    FormsModule,
    ReactiveFormsModule,
    HomeModule,
  ],
  bootstrap: [
    MainShellComponent
  ]
})
export class MainModule { }
