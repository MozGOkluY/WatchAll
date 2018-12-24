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
    FormsModule,
    ReactiveFormsModule,
    HomeModule
  ],
  bootstrap: [
    MainShellComponent
  ]
})
export class MainModule { }
