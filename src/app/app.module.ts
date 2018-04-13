import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { enableProdMode } from '@angular/core';
import { LocalForecastComponent } from './local-forecast/local-forecast.component';
import { HttpClientModule } from '@angular/common/http';

import { WeatherService } from './weather.service';

import { AppComponent } from './app.component';
import { MeteoComponent } from './meteo/meteo.component';
import { LocationComponent } from './location/location.component';
enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    MeteoComponent,
    LocationComponent,
    LocalForecastComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCo9k2z8br56H8foQ10J-CWQI9guxs60lQ",
      libraries: ["places"]
    }),
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {}
