import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherService } from './weather.service';
import { LocalForecastComponent } from './local-forecast.component';

describe('LocalForecastComponent', () => {
  let component: LocalForecastComponent;
  let fixture: ComponentFixture<LocalForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalForecastComponent ],
      providers: [WeatherService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
