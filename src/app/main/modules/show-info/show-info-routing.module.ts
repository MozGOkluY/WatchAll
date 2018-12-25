import { ShowInfoComponent } from './components/show-info/show-info.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowInfoShellComponent } from './components/show-info-shell/show-info-shell.component';

const routes: Routes = [
  {
    path: '',
    component: ShowInfoShellComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowInfoRoutingModule { }
