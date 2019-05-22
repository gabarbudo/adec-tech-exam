import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CityProfilesComponent }      from './city-profiles/city-profiles.component';

const routes: Routes = [
	{ path: '', redirectTo: '/city-profiles', pathMatch: 'full' },
	{ path: 'city-profiles', component: CityProfilesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
