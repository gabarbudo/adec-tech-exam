import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'adec-tech-exam';

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
  	this.mobileQuery = media.matchMedia('(max-width: 720px)');
	this._mobileQueryListener = () => changeDetectorRef.detectChanges();
	this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy() {
  	this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
