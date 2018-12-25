import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './user/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthGuard } from './shared/guards/auth.guard';
import { RegisterComponent } from './user/register/register.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    !environment.production
      ? StoreDevtoolsModule.instrument(
        {
          name: 'WatchAll App DevTools',
        })
      : [],
    EffectsModule.forRoot([]),
    BrowserAnimationsModule, // required animations module
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
