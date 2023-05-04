import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';

import { ThemeService } from './theme.service';

import { HomeComponent } from './components/home/home.component';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';
import { NavbarComponent } from './components/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThemeSwitcherComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
