import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityProfilesComponent } from './city-profiles.component';

describe('CityProfilesComponent', () => {
  let component: CityProfilesComponent;
  let fixture: ComponentFixture<CityProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
