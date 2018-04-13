webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n  Welcome to app!\n</h1>\n<app-meteo></app-meteo>\n<app-location></app-location>\n<app-local-forecast></app-local-forecast>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__local_forecast_local_forecast_component__ = __webpack_require__("./src/app/local-forecast/local-forecast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__weather_service__ = __webpack_require__("./src/app/weather.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__meteo_meteo_component__ = __webpack_require__("./src/app/meteo/meteo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__location_location_component__ = __webpack_require__("./src/app/location/location.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* enableProdMode */])();
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__meteo_meteo_component__["a" /* MeteoComponent */],
                __WEBPACK_IMPORTED_MODULE_9__location_location_component__["a" /* LocationComponent */],
                __WEBPACK_IMPORTED_MODULE_4__local_forecast_local_forecast_component__["a" /* LocalForecastComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: "AIzaSyCo9k2z8br56H8foQ10J-CWQI9guxs60lQ",
                    libraries: ["places"]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__weather_service__["a" /* WeatherService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.settings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = (function () {
    function AppSettings() {
    }
    Object.defineProperty(AppSettings, "DEFAULT_LAT", {
        get: function () { return 47.63967400000001; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AppSettings, "DEFAULT_LNG", {
        get: function () { return 6.863848999999959; },
        enumerable: true,
        configurable: true
    });
    ;
    return AppSettings;
}());



/***/ }),

/***/ "./src/app/local-forecast/local-forecast.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/local-forecast/local-forecast.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n  <i class=\"wi wi-barometer\"></i> Weather Forecast\n</h1>\n\n<h1>Seven Day Forecast</h1>\n\n<div *ngIf=\"forecast | async as f\" class=\"columns\">\n    <div *ngFor=\"let day of f.daily.data\" class=\"column\">\n\n        <i [class]=\"weatherIcon(day.icon)\"></i>\n        <h3>{{ day.time * 1000 | date: 'MMM d'  }}</h3>\n        <p>{{ day.summary }}</p>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/local-forecast/local-forecast.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalForecastComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__weather_service__ = __webpack_require__("./src/app/weather.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_settings__ = __webpack_require__("./src/app/app.settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LocalForecastComponent = (function () {
    function LocalForecastComponent(weather) {
        var _this = this;
        this.weather = weather;
        this.data = {};
        /// suscribing to coordinates data 
        this.weather.setLatLng$.subscribe(function (data) {
            _this.data = data;
        });
    }
    LocalForecastComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
            });
        }
        else {
            /// default coords
            this.lat = __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].DEFAULT_LAT;
            this.lng = __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].DEFAULT_LNG;
        }
        /// Request forecast on location trigger
        this.weather.locationsTrigger$.forEach(function (event) { return _this.getForecast(); });
    };
    LocalForecastComponent.prototype.getForecast = function () {
        this.forecast = this.weather.currentForecast()
            .do(function (data) { return console.log(data); });
    };
    LocalForecastComponent.prototype.setLatLngFromData = function () {
        this.lat = this.data[0];
        this.lng = this.data[1];
    };
    /// Helper to make weather icons work
    /// better solution is to map icons to an object 
    LocalForecastComponent.prototype.weatherIcon = function (icon) {
        switch (icon) {
            case 'partly-cloudy-day':
                return 'wi wi-day-cloudy';
            case 'clear-day':
                return 'wi wi-day-sunny';
            case 'partly-cloudy-night':
                return 'wi wi-night-partly-cloudy';
            default:
                return "wi wi-day-sunny";
        }
    };
    LocalForecastComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-local-forecast',
            template: __webpack_require__("./src/app/local-forecast/local-forecast.component.html"),
            styles: [__webpack_require__("./src/app/local-forecast/local-forecast.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__weather_service__["a" /* WeatherService */]])
    ], LocalForecastComponent);
    return LocalForecastComponent;
}());



/***/ }),

/***/ "./src/app/location/location.component.css":
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 300px;\n}\n\n.full-width {\n  width: 100%;\n}"

/***/ }),

/***/ "./src/app/location/location.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"form-group\">\n    \n\n      <input placeholder=\"search for location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #search [formControl]=\"searchControl\">\n\n  </div>\n  <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\">\n    <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\n  </agm-map>\n</div>"

/***/ }),

/***/ "./src/app/location/location.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__weather_service__ = __webpack_require__("./src/app/weather.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_settings__ = __webpack_require__("./src/app/app.settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LocationComponent = (function () {
    function LocationComponent(mapsAPILoader, ngZone, weather) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.weather = weather;
        this.setData();
        this.weather.setLatLng(this.data);
    }
    LocationComponent.prototype.ngOnInit = function () {
        var _this = this;
        //set google maps defaults
        this.zoom = 4;
        this.latitude = __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].DEFAULT_LAT;
        this.longitude = __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].DEFAULT_LNG;
        //create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: []
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.zoom = 12;
                    _this.setData();
                    _this.weather.setLatLng(_this.data);
                    _this.triggerForecast();
                });
            });
        });
    };
    LocationComponent.prototype.triggerForecast = function () {
        this.weather.newForecastRequest();
    };
    LocationComponent.prototype.setData = function () {
        (this.latitude == undefined) ? this.data = [__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].DEFAULT_LAT, __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].DEFAULT_LNG] : this.data = [this.latitude, this.longitude];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChild */])("search"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */])
    ], LocationComponent.prototype, "searchElementRef", void 0);
    LocationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-location',
            template: __webpack_require__("./src/app/location/location.component.html"),
            styles: [__webpack_require__("./src/app/location/location.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_3__weather_service__["a" /* WeatherService */]])
    ], LocationComponent);
    return LocationComponent;
}());



/***/ }),

/***/ "./src/app/meteo/meteo.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/meteo/meteo.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  {{town.name}} {{town.temperature}}°C\n</p>\n"

/***/ }),

/***/ "./src/app/meteo/meteo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeteoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MeteoComponent = (function () {
    function MeteoComponent() {
        this.town = { id: 1, name: 'VALLATOWN', temperature: 1000, icon: "sun" };
    }
    MeteoComponent.prototype.ngOnInit = function () {
    };
    MeteoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-meteo',
            template: __webpack_require__("./src/app/meteo/meteo.component.html"),
            styles: [__webpack_require__("./src/app/meteo/meteo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MeteoComponent);
    return MeteoComponent;
}());



/***/ }),

/***/ "./src/app/weather.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WeatherService = (function () {
    function WeatherService(http) {
        this.http = http;
        this._coordsTrigger = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this._locationTrigger = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.ROOT_URL = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/31fb9ed2fc5a7c2766847cefdcca8570/";
        this.setLatLng$ = this._coordsTrigger.asObservable();
    }
    WeatherService.prototype.currentForecast = function () {
        return this.http.get(this.ROOT_URL + this.lat.toString() + "," + this.lng.toString());
    };
    WeatherService.prototype.setLatLng = function (data) {
        this.lat = data[0];
        this.lng = data[1];
        this._coordsTrigger.next(data);
    };
    WeatherService.prototype.newForecastRequest = function () {
        /// Create a new location trigger
        this._locationTrigger.next();
    };
    Object.defineProperty(WeatherService.prototype, "locationsTrigger$", {
        get: function () {
            return this._locationTrigger.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    WeatherService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], WeatherService);
    return WeatherService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map