(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inicio-inicio-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title color=\"primary\">S.A.R.L</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-item *ngFor=\"let c of componentes\"\n              [routerLink]=\"c.redirectTo\"\n              detail>\n      <ion-icon [name]=\"c.icon\" slot=\"start\" color=\"primary\"></ion-icon>\n      {{ c.name }}\n    </ion-item>\n  </ion-list>\n\n\n<!-- \n  <ion-button routerLink=\"/alert\">\n    Alert\n  </ion-button>\n\n\n  <ion-button routerLink=\"/action-sheet\">\n    Action Sheet\n  </ion-button> -->\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/inicio/inicio-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/inicio/inicio-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: InicioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageRoutingModule", function() { return InicioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inicio.page */ "./src/app/pages/inicio/inicio.page.ts");




const routes = [
    {
        path: '',
        component: _inicio_page__WEBPACK_IMPORTED_MODULE_3__["InicioPage"]
    }
];
let InicioPageRoutingModule = class InicioPageRoutingModule {
};
InicioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InicioPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/inicio/inicio.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/inicio/inicio.module.ts ***!
  \***********************************************/
/*! exports provided: InicioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageModule", function() { return InicioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inicio-routing.module */ "./src/app/pages/inicio/inicio-routing.module.ts");
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inicio.page */ "./src/app/pages/inicio/inicio.page.ts");







let InicioPageModule = class InicioPageModule {
};
InicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["InicioPageRoutingModule"]
        ],
        declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_6__["InicioPage"]]
    })
], InicioPageModule);



/***/ }),

/***/ "./src/app/pages/inicio/inicio.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/inicio/inicio.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luaWNpby9pbmljaW8ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/inicio/inicio.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/inicio/inicio.page.ts ***!
  \*********************************************/
/*! exports provided: InicioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPage", function() { return InicioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let InicioPage = class InicioPage {
    constructor() {
        this.componentes = [
            {
                icon: 'american-football-outline',
                name: 'IRL',
                redirectTo: '/action-sheet'
            },
            {
                icon: 'logo-apple-appstore',
                name: 'IRL Estr??s',
                redirectTo: '/alert'
            },
            {
                icon: 'beaker-outline',
                name: 'Activos Liquidos',
                redirectTo: '/activosliquidos'
            },
            {
                icon: 'beaker-outline',
                name: 'Indice Promedio de Morosidad',
                redirectTo: '/indicepromdemorosidad'
            }
        ];
    }
    ngOnInit() {
    }
};
InicioPage.ctorParameters = () => [];
InicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inicio',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./inicio.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./inicio.page.scss */ "./src/app/pages/inicio/inicio.page.scss")).default]
    })
], InicioPage);



/***/ })

}]);
//# sourceMappingURL=pages-inicio-inicio-module-es2015.js.map