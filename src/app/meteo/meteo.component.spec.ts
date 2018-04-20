import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoComponent } from './meteo.component';
import { WeatherService } from '../weather.service';

describe('MeteoComponent', () => {
  let component: MeteoComponent;
  let fixture: ComponentFixture<MeteoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeteoComponent ],
      providers: [WeatherService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
