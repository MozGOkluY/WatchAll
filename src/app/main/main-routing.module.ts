import { MainShellComponent } from './main-shell.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainShellComponent,
    children: [
      { path: '', loadChildren: './modules/home/home.module#HomeModule' },
      { path: 'show/:id', loadChildren: './modules/show-info/show-info.module#ShowInfoModule' },
      { path: 'lists', loadChildren: './modules/lists/lists.module#ListsModule' },
      { path: 'profile', loadChildren: './modules/profile/profile.module#ProfileModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
