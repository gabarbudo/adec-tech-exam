import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng5SliderModule } from 'ng5-slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityProfilesComponent } from './city-profiles/city-profiles.component';

@NgModule({
  declarations: [
    AppComponent,
    CityProfilesComponent
  ],
  imports: [
    BrowserModule,
    Ng5SliderModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatExpansionModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
