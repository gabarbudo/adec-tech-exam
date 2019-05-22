import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-city-profiles',
  templateUrl: './city-profiles.component.html',
  styleUrls: ['./city-profiles.component.css']
})
export class CityProfilesComponent implements OnInit {
  populationValue: number = 100;
  populationHighValue: number = 1000;
  
  totalgradValue: number = 100;
  totalgradHighValue: number = 1000;

  coecodValue: number = 100;
  coecodHighValue: number = 1000;

  progtalentValue: number = 100;
  progtalentHighValue: number = 1000;

  heiValue: number = 100;
  heiHighValue: number = 1000;

  fteValue: number = 100;
  fteHighValue: number = 1000;

  options: Options = {
	floor: 50,
	ceil: 1000000,
	noSwitching: true,
	translate: (value: number): string => {
		if (value == 1000000) {
			return '1M';
		} else {
			return value;
		}
    }
  };

  showToggle = false;

  toggleButton(element) {
  	element.toggle();
  	this.showToggle = !this.showToggle
  }

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
  	iconRegistry.addSvgIcon(
  	    'tune',
  	    sanitizer.bypassSecurityTrustResourceUrl('../assets/round-tune-24px.svg'));
  }

  ngOnInit() {
  }

}
