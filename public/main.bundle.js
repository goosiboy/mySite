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

module.exports = ".container {\r\n    margin: 70px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n\n\n"

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_student_list_student_list_component__ = __webpack_require__("./src/app/components/student-list/student-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guards_auth_guard_service__ = __webpack_require__("./src/app/guards/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_student_data_service__ = __webpack_require__("./src/app/services/student-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_popup_popup_component__ = __webpack_require__("./src/app/components/popup/popup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_student_list_student_list_component__["a" /* StudentListComponent */] },
    // dashboard - route is being filtered by the authGuardService
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_student_list_student_list_component__["a" /* StudentListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_popup_popup_component__["a" /* PopupComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_12__guards_auth_guard_service__["a" /* AuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_13__services_student_data_service__["a" /* StudentDataService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = "ul {\r\n    list-style-type: none;\r\n}\r\n\r\n#wrapper {\r\n    margin: auto;\r\n    width: 90%;\r\n}\r\n\r\n#studentList {\r\n    background-color: rgb(236, 236, 236);\r\n    border: 2px solid rgb(197, 197, 197);\r\n    border-radius: 15px;\r\n    margin: 10px; \r\n    padding: 10px;\r\n    width: 60%;\r\n    font-size: 18px;\r\n    cursor: pointer;\r\n}\r\n\r\n#studentList:hover {\r\n    background-color: rgb(199, 199, 199);\r\n    border: 2px solid rgb(136, 136, 136);\r\n}\r\n\r\n#number {\r\n    margin: 10px;    \r\n    font-weight: bold;\r\n}\r\n\r\n#name {\r\n    margin: 10px;\r\n}\r\n\r\n#email {\r\n    margin: 10px;\r\n}\r\n\r\n#numberInput{\r\n    float: right;\r\n    width: 50%;\r\n}\r\n\r\n#nameInput{\r\n    float: right;\r\n    width: 50%;\r\n}\r\n\r\n#emailInput{\r\n    float: right;\r\n    width: 50%;\r\n}"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <h2>\n      Admin sivut!\n  </h2>\n  <hr>\n  <app-popup *ngIf=\"popUp\" (onBackButtonClick)=\"onBackButtonClick($event)\"></app-popup>\n  <div *ngIf=\"!popUp\" class=\"content\">\n    <br>\n    <h3>Opiskelijat</h3>\n    <br>\n    <p><i>Muokkaa opiskelijoiden tietoja klikkaamalla opiskelija - korttia.</i></p>\n    <hr>\n    <br>\n    <ul>\n      <li *ngFor=\"let student of students\">\n        <div id=\"studentList\" (click)=\"studentListClick(student)\">\n          <div id=\"number\">ID: {{ student.studentNumber }} </div>\n          <hr>\n          <div id=\"name\">Nimi: {{ student.name }} </div>\n          <hr>\n          <div id=\"email\">Email: {{ student.email }} </div>\n        </div>\n      </li>\n    </ul>\n    <br>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_student_data_service__ = __webpack_require__("./src/app/services/student-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(studentData) {
        this.studentData = studentData;
        this.students = [];
        this.popUp = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.initStudents();
    };
    DashboardComponent.prototype.studentListClick = function (student) {
        this.popUp = true;
        this.studentData.clickedStudent(student);
    };
    DashboardComponent.prototype.onBackButtonClick = function (event) {
        this.popUp = event;
    };
    DashboardComponent.prototype.initStudents = function () {
        this.studentData.getAll(function (res) {
            this.resolveStudents(res);
        }.bind(this));
    };
    DashboardComponent.prototype.resolveStudents = function (res) {
        var student = {};
        for (var i = 0; i < res.length; i++) {
            student = {
                studentNumber: res[i].studentNumber,
                name: res[i].name,
                email: res[i].email
            };
            this.students.push(student);
        }
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_student_data_service__["a" /* StudentDataService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Kirjaudu sisään</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label for=\"exampleInputName1\">Nimi</label>\n    <input\n      type=\"username\" class=\"form-control\"\n      id=\"exampleInputName1\"\n      [(ngModel)]=\"username\" name=\"username\"\n      placeholder=\"Lisää nimi (testi)\"\n    >\n\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword1\">Salasana</label>\n    <input\n      type=\"password\"\n      class=\"form-control\"\n      id=\"exampleInputPassword1\"\n      [(ngModel)]=\"password\" name=\"password\"\n      placeholder=\"Salasana (testi)\"\n    >\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\">Kirjaudu</button>\n</form>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onLoginSubmit = function () {
        console.log("naps");
        var user = {
            username: this.username,
            password: this.password
        };
        // Authenticate User
        this.authService
            .findUser(user)
            .subscribe(function (data) {
            if (data.success) {
                console.log("ONNISTUI");
                this.handleLogin(data);
            }
            else {
                console.log("EPÄONNISTUI");
                this.handleError();
            }
        }.bind(this));
    };
    LoginComponent.prototype.handleLogin = function (data) {
        this.authService.storeUserData(data.token, data.user);
        this.router.navigate(['dashboard']);
    };
    LoginComponent.prototype.handleError = function () {
        this.router.navigate(['']);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({ selector: 'app-login', template: __webpack_require__("./src/app/components/login/login.component.html"), styles: [__webpack_require__("./src/app/components/login/login.component.css")] }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light bg-light fixed-top\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n    <ul id=\"ul_left\" class=\"navbar-nav mr-auto\">\n      <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/']\">Opiskelijalista</a>\n      </li>\n    </ul>\n    <ul id=\"ul_right\" class=\"navbar-nav ml-auto\">\n      <li *ngIf=\"!authService.tokenExpired()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Suojattu sivu</a>\n      </li>\n      <li *ngIf=\"authService.tokenExpired()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/login']\">Kirjaudu sisään</a>\n      </li>\n      <li *ngIf=\"!authService.tokenExpired()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Kirjaudu ulos</a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logOut(function (res) {
            this.router.navigate(['']);
        }.bind(this));
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/popup/popup.component.css":
/***/ (function(module, exports) {

module.exports = "#studentList {\r\n    background-color: rgb(236, 236, 236);\r\n    border: 2px solid rgb(197, 197, 197);\r\n    border-radius: 15px;\r\n    margin: 10px; \r\n    padding: 10px;\r\n    width: 60%;\r\n    font-size: 18px;\r\n}\r\n\r\n#number {\r\n    margin: 10px;    \r\n    font-weight: bold;\r\n}\r\n\r\n#name {\r\n    margin: 10px;\r\n}\r\n\r\n#email {\r\n    margin: 10px;\r\n}\r\n\r\n#myForm {\r\n    margin: 10px;\r\n}\r\n\r\n#btn {\r\n    margin: 10px;\r\n    padding: 5px;\r\n    border-radius: 10px;\r\n}\r\n\r\n#btn2 {\r\n    float: right;\r\n    margin: 15px;\r\n}\r\n\r\n#input {\r\n    margin: 10px;\r\n    padding: 5px;\r\n    border-radius: 10px;\r\n}\r\n\r\n#btn:focus {\r\n    border: 2px solid rgb(136, 136, 136);\r\n}\r\n\r\n#btn:hover {\r\n    background-color: rgb(184, 184, 184);\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/components/popup/popup.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<h3>Muokkaa:</h3>\n<br>\n<p><i>Muokkaa opiskelijan tietoja kirjoittamalla uudet tiedot lomakkeeseen.</i></p>\n<p><i>Hyväksy muutokset klikkaamalla \"Muokkaa\".</i></p>\n<hr>\n<br>\n<div id=\"studentList\">\n  <div id=\"number\">ID: {{ student.studentNumber }} </div>\n  <hr>\n  <div id=\"name\">Nimi: {{ student.name }} </div>\n  <hr>\n  <div id=\"email\">Email: {{ student.email }} </div>\n</div>\n<div id=\"studentList\">\n  <div id=\"myForm\">\n      <form [formGroup]=\"newForm\" (ngSubmit)=\"onClickSubmit(newForm.value)\">\n        <input id=\"input\" type=\"text\" class=\"fortextbox\" name=\"name\" \n            placeholder=\"Nimi\" formControlName=\"name\">\n        <br/>\n  \n          <input id=\"input\" type=\"email\" class=\"fortextbox\" name=\"email\" \n            placeholder=\"Email\" formControlName=\"email\">\n        <br/>\n        \n        <input id=\"btn\" type=\"submit\" class=\"forsubmit\" value=\"Muokkaa\">\n      </form>\n  </div>\n  <button id=\"btn2\" (click)=\"backButtonClick()\">Takaisin</button>\n  <button id=\"btn2\" (click)=\"removeStudent()\">Poista opiskelija</button>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/popup/popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_student_data_service__ = __webpack_require__("./src/app/services/student-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PopupComponent = /** @class */ (function () {
    function PopupComponent(studentData) {
        this.studentData = studentData;
        this.onBackButtonClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.newForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]()
        });
    }
    PopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.studentData.observableData.subscribe(function (res) { _this.student = res; });
    };
    PopupComponent.prototype.backButtonClick = function () {
        this.onBackButtonClick.emit(false);
    };
    PopupComponent.prototype.removeStudent = function () {
        if (this.student !== null) {
            this.studentData.removeStudent({
                studentNumber: this.student.studentNumber
            });
        }
    };
    PopupComponent.prototype.onClickSubmit = function (value) {
        var newName;
        var newMail;
        if (value.name == null) {
            newName = this.student.name;
        }
        else {
            newName = value.name;
        }
        if (value.email == null) {
            newMail = this.student.email;
        }
        else {
            newMail = value.email;
        }
        var newData = {
            studentNumber: this.student.studentNumber,
            name: newName,
            email: newMail
        };
        this.studentData.setInfo(newData);
    };
    PopupComponent.prototype.getStudent = function () {
        return this.student;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], PopupComponent.prototype, "onBackButtonClick", void 0);
    PopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-popup',
            template: __webpack_require__("./src/app/components/popup/popup.component.html"),
            styles: [__webpack_require__("./src/app/components/popup/popup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_student_data_service__["a" /* StudentDataService */]])
    ], PopupComponent);
    return PopupComponent;
}());



/***/ }),

/***/ "./src/app/components/student-list/student-list.component.css":
/***/ (function(module, exports) {

module.exports = "ul {\r\n    list-style-type: none;\r\n}\r\n\r\n#studentList {\r\n    background-color: rgb(236, 236, 236);\r\n    border: 1px solid rgb(197, 197, 197);\r\n    border-radius: 15px;\r\n    margin: 10px; \r\n    padding: 10px;\r\n    width: 60%;\r\n    font-size: 18px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/student-list/student-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Students:</h2>\n<br>\n<ul>\n  <li *ngFor=\"let student of students\">\n    <div id=\"studentList\">\n      <p>{{ student.studentNumber }}</p>\n      <p>{{ student.name }}</p>\n      <p>{{ student.email }}</p>\n    </div>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/components/student-list/student-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_student_data_service__ = __webpack_require__("./src/app/services/student-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentListComponent = /** @class */ (function () {
    function StudentListComponent(studentData) {
        this.studentData = studentData;
        this.students = [];
    }
    StudentListComponent.prototype.ngOnInit = function () {
        this.initStudents();
    };
    StudentListComponent.prototype.initStudents = function () {
        this.studentData.getAll(function (res) {
            this.resolveStudents(res);
        }.bind(this));
    };
    StudentListComponent.prototype.resolveStudents = function (res) {
        var student = {};
        for (var i = 0; i < res.length; i++) {
            student = {
                studentNumber: res[i].studentNumber,
                name: res[i].name,
                email: res[i].email
            };
            this.students.push(student);
        }
    };
    StudentListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-student-list',
            template: __webpack_require__("./src/app/components/student-list/student-list.component.html"),
            styles: [__webpack_require__("./src/app/components/student-list/student-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_student_data_service__["a" /* StudentDataService */]])
    ], StudentListComponent);
    return StudentListComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.authService.tokenExpired()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth0_angular_jwt__ = __webpack_require__("./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.findUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post('http://localhost:3000/auth', user, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    /**
     * Assign authToken
     */
    AuthService.prototype.loadToken = function () {
        var token = this.tokenGetter();
        this.authToken = token;
    };
    /**
     * A simple token getter. Returns the JWT.
     */
    AuthService.prototype.tokenGetter = function () {
        return localStorage.getItem('id_token');
    };
    /**
     * Checks if the token is expired or not. Returns true or false.
     * Needed for the authentication guard.
     */
    AuthService.prototype.tokenExpired = function () {
        var helper = new __WEBPACK_IMPORTED_MODULE_3__auth0_angular_jwt__["a" /* JwtHelperService */]();
        var token = this.tokenGetter();
        var tokenExpired = helper.isTokenExpired(token);
        return tokenExpired;
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logOut = function (callback) {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
        var storage = window.localStorage.length;
        if (this.authToken === null && this.user === null && storage === 0) {
            callback(true);
        }
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/student-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StudentDataService = /** @class */ (function () {
    function StudentDataService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.observableData = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.clickedStudentData);
    }
    StudentDataService.prototype.ngOnInit = function () {
    };
    StudentDataService.prototype.clickedStudent = function (student) {
        this.clickedStudentData = student;
        this.observableData.next(this.clickedStudentData);
    };
    StudentDataService.prototype.getAll = function (callback) {
        return this.http.get('http://localhost:3000/findAll').subscribe(function (data) {
            this.studentData = data;
            callback(this.studentData);
        });
    };
    StudentDataService.prototype.removeStudent = function (userID) {
        if (userID !== null) {
            var token = this.authService.tokenGetter();
            console.log("userID: ", userID);
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]()
                .set('Content-Type', 'application/json')
                .set('x-access-token', token);
            return this.http.post('http://localhost:3000/remove', userID, { headers: headers }).subscribe(function (response) {
                console.log("data: ", response);
            });
        }
        else {
            throw "student was empty.";
        }
    };
    StudentDataService.prototype.setInfo = function (newData) {
        if (newData !== null) {
            var token = this.authService.tokenGetter();
            console.log("newData: ", newData);
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]()
                .set('Content-Type', 'application/json')
                .set('x-access-token', token);
            return this.http.put('http://localhost:3000/modifyInfo', newData, { headers: headers }).subscribe(function (response) {
                console.log("data: ", response);
            });
        }
        else {
            throw "student was empty.";
        }
    };
    StudentDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]])
    ], StudentDataService);
    return StudentDataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
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