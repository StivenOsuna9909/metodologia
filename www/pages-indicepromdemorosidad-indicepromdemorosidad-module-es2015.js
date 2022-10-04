(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-indicepromdemorosidad-indicepromdemorosidad-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/indicepromdemorosidad/indicepromdemorosidad.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/indicepromdemorosidad/indicepromdemorosidad.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"I.Prom. de Morosidad\"></app-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/indicepromdemorosidad/indicepromdemorosidad-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/indicepromdemorosidad/indicepromdemorosidad-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: IndicepromdemorosidadPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndicepromdemorosidadPageRoutingModule", function() { return IndicepromdemorosidadPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _indicepromdemorosidad_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./indicepromdemorosidad.page */ "./src/app/pages/indicepromdemorosidad/indicepromdemorosidad.page.ts");




const routes = [
    {
        path: '',
        component: _indicepromdemorosidad_page__WEBPACK_IMPORTED_MODULE_3__["IndicepromdemorosidadPage"]
    }
];
let IndicepromdemorosidadPageRoutingModule = class IndicepromdemorosidadPageRoutingModule {
};
IndicepromdemorosidadPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IndicepromdemorosidadPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/indicepromdemorosidad/indicepromdemorosidad.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/indicepromdemorosidad/indicepromdemorosidad.module.ts ***!
  \*****************************************************************************/
/*! exports provided: IndicepromdemorosidadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndicepromdemorosidadPageModule", function() { return IndicepromdemorosidadPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _indicepromdemorosidad_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./indicepromdemorosidad-routing.module */ "./src/app/pages/indicepromdemorosidad/indicepromdemorosidad-routing.module.ts");
/* harmony import */ var _indicepromdemorosidad_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./indicepromdemorosidad.page */ "./src/app/pages/indicepromdemorosidad/indicepromdemorosidad.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let IndicepromdemorosidadPageModule = class IndicepromdemorosidadPageModule {
};
IndicepromdemorosidadPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _indicepromdemorosidad_routing_module__WEBPACK_IMPORTED_MODULE_5__["IndicepromdemorosidadPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_indicepromdemorosidad_page__WEBPACK_IMPORTED_MODULE_6__["IndicepromdemorosidadPage"]]
    })
], IndicepromdemorosidadPageModule);



/***/ }),

/***/ "./src/app/pages/indicepromdemorosidad/indicepromdemorosidad.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/indicepromdemorosidad/indicepromdemorosidad.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZGljZXByb21kZW1vcm9zaWRhZC9pbmRpY2Vwcm9tZGVtb3Jvc2lkYWQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/indicepromdemorosidad/indicepromdemorosidad.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/indicepromdemorosidad/indicepromdemorosidad.page.ts ***!
  \***************************************************************************/
/*! exports provided: IndicepromdemorosidadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndicepromdemorosidadPage", function() { return IndicepromdemorosidadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let IndicepromdemorosidadPage = class IndicepromdemorosidadPage {
    constructor() { }
    ngOnInit() {
    }
};
IndicepromdemorosidadPage.ctorParameters = () => [];
IndicepromdemorosidadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-indicepromdemorosidad',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./indicepromdemorosidad.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/indicepromdemorosidad/indicepromdemorosidad.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./indicepromdemorosidad.page.scss */ "./src/app/pages/indicepromdemorosidad/indicepromdemorosidad.page.scss")).default]
    })
], IndicepromdemorosidadPage);



/***/ })

}]);
//# sourceMappingURL=pages-indicepromdemorosidad-indicepromdemorosidad-module-es2015.js.map