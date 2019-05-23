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
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
import { OwlModule } from 'ngx-owl-carousel';

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
    MatGridListModule,
    MatTableModule,
    MatListModule,
    MatTooltipModule,
    OwlModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
