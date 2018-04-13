import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { } from '@types/googlemaps';
import { MapsAPILoader } from '@agm/core';
import { WeatherService } from '../weather.service';
import { LocationComponent } from './location.component';

describe('LocationComponent', () => {
  let component: LocationComponent;
  let fixture: ComponentFixture<LocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationComponent ],
      imports: [
        AgmCoreModule.forRoot({
          apiKey: "AIzaSyCo9k2z8br56H8foQ10J-CWQI9guxs60lQ",
          libraries: ["places"]
        }),
        FormsModule, 
      ],
      providers: [WeatherService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
