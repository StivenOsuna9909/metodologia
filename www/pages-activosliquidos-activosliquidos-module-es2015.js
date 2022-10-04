(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-activosliquidos-activosliquidos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/activosliquidos/activosliquidos.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/activosliquidos/activosliquidos.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"Activos Líquidos\"></app-header>\n\n<ion-content >\n    <ion-grid style=\"background-color: #fbfffa\" >\n        <ion-row>\n            <ion-col size=\"2\"></ion-col>\n            <ion-col size=\"8\">\n\n                <ion-item >\n                    <ion-label>Fecha</ion-label>\n                    <ion-datetime display-format=\"DD.MM.YYYY\"></ion-datetime>\n                </ion-item>      \n                \n                    <ion-img style=\"width: 20%; position: relative; left: 40%;\" src=\"/assets/logo-cab-capital-1.svg\" ></ion-img>\n\n\n                <ion-card *ngFor=\"let item of datosi2; let i = index;\">\n                    <ion-card-title style=\"font-family: AvenirLTStd-Black; position: relative; left: 30px; top: 7px; font-weight: bold; color: #34662E; \" >{{ item.title }}</ion-card-title>\n                    <ion-card-content>\n\n                        <ion-label style=\"font-family: AvenirLTStd-Black; \">\n                            {{ item.description }}\n                            <br>\n                            <form #formulario=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n                                <ion-item>\n                                    <ion-input type=\"number\" placeholder=\"Awesome Input\" name=\"number\"\n                                        [(ngModel)]=\"arrayInput1[i]\"  required></ion-input>\n                                    <ion-label>{{ formulario.valid }} </ion-label>\n                                </ion-item>\n\n                                <ion-label>\n                                    {{ item.content }} | {{ formulario.valid }}\n                                </ion-label>\n                                \n                                <ion-input type=\"number\" placeholder=\"Awesome Input\" name=\"number1\"\n                                    [(ngModel)]=\"arrayInput2[i]\" required></ion-input>\n                                <ion-label>\n                                    {{ item.content1 }} | {{ formulario.valid }}\n                                </ion-label>\n\n\n                                <ion-input type=\"number\" placeholder=\"Awesome Input\" name=\"number2\"\n                                [(ngModel)]=\"arrayInput3[i]\"   required></ion-input>\n                                \n                                <!--acá colocar el ngif-->\n\n\n\n        \n\n\n                                <ion-label>\n                                    {{ item.content3 }} | {{ formulario.valid }}\n                                </ion-label>\n                                <ion-input type=\"number\" placeholder=\"Awesome Input\" name=\"number4\"\n                                [(ngModel)]=\"arrayInput5[i]\" *ngIf=\"i == 2\"  required></ion-input>\n\n                                \n                                <ion-label>\n                                    {{ item.content4 }} | {{ formulario.valid }}\n                                </ion-label>\n                                <ion-input type=\"number\" placeholder=\"Awesome Input\" name=\"number4\"\n                                [(ngModel)]=\"arrayInput6[i]\" *ngIf=\"i == 2\" required></ion-input>\n\n                                \n                                <ion-label>\n                                    {{ item.content5 }} | {{ formulario.valid }}\n                                </ion-label>\n                                <ion-input type=\"number\" placeholder=\"Awesome Input\" name=\"number4\"\n                                [(ngModel)]=\"arrayInput7[i]\" *ngIf=\"i == 2\" required></ion-input>\n\n                                <ion-label>\n                                    {{ item.content6 }} | {{ formulario.valid }}\n                                </ion-label>\n                                <ion-input type=\"number\" placeholder=\"Awesome Input\" name=\"number4\"\n                                [(ngModel)]=\"arrayInput8[i]\" *ngIf=\"i == 2\" required></ion-input>\n\n                                <ion-label>\n                                    {{ item.content7 }} | {{ formulario.valid }}\n                                </ion-label>\n                                <ion-input type=\"number\" placeholder=\"Awesome Input\" name=\"number4\"\n                                [(ngModel)]=\"arrayInput9[i]\" *ngIf=\"i == 2\" required></ion-input>\n\n                                <ion-label>\n                                    {{ item.content8 }} | {{ formulario.valid }}\n                                </ion-label>\n                                <ion-input type=\"number\" placeholder=\"Awesome Input\" name=\"number4\"\n                                [(ngModel)]=\"arrayInput10[i]\" *ngIf=\"i == 2\" required></ion-input>\n\n                                <ion-label>\n                                    {{ item.content9 }} | {{ formulario.valid }}\n                                </ion-label>\n                                <ion-input type=\"number\" placeholder=\"Awesome Input\" name=\"number4\"\n                                [(ngModel)]=\"arrayInput11[i]\" *ngIf=\"i == 2\" required></ion-input>\n\n\n                                <ion-label>\n                                    {{ item.content10 }} | {{ formulario.valid }}\n                                </ion-label>\n                                <ion-input type=\"number\" placeholder=\"Awesome Input\" name=\"number4\"\n                                [(ngModel)]=\"arrayInput12[i]\" *ngIf=\"i == 2\" required></ion-input>\n                                \n\n\n\n\n                                <ion-button type=\"submit\" expand=\"block\">\n                                    Click me\n                                </ion-button>\n                            </form>\n                        </ion-label>\n                    </ion-card-content>\n\n                </ion-card>\n\n            </ion-col>\n            <ion-col size=\"2\"></ion-col>\n        </ion-row>\n    </ion-grid>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/activosliquidos/activosliquidos-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/activosliquidos/activosliquidos-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ActivosliquidosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivosliquidosPageRoutingModule", function() { return ActivosliquidosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _activosliquidos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./activosliquidos.page */ "./src/app/pages/activosliquidos/activosliquidos.page.ts");




const routes = [
    {
        path: '',
        component: _activosliquidos_page__WEBPACK_IMPORTED_MODULE_3__["ActivosliquidosPage"]
    }
];
let ActivosliquidosPageRoutingModule = class ActivosliquidosPageRoutingModule {
};
ActivosliquidosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ActivosliquidosPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/activosliquidos/activosliquidos.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/activosliquidos/activosliquidos.module.ts ***!
  \*****************************************************************/
/*! exports provided: ActivosliquidosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivosliquidosPageModule", function() { return ActivosliquidosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _activosliquidos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./activosliquidos-routing.module */ "./src/app/pages/activosliquidos/activosliquidos-routing.module.ts");
/* harmony import */ var _activosliquidos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activosliquidos.page */ "./src/app/pages/activosliquidos/activosliquidos.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let ActivosliquidosPageModule = class ActivosliquidosPageModule {
};
ActivosliquidosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _activosliquidos_routing_module__WEBPACK_IMPORTED_MODULE_5__["ActivosliquidosPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
        ],
        declarations: [_activosliquidos_page__WEBPACK_IMPORTED_MODULE_6__["ActivosliquidosPage"]]
    })
], ActivosliquidosPageModule);



/***/ }),

/***/ "./src/app/pages/activosliquidos/activosliquidos.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/activosliquidos/activosliquidos.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card-content {\n  color: #000;\n}\n\np {\n  font-family: AvenirLTStd-Black;\n}\n\nion-card-subtitle {\n  font-family: AvenirLTStd-Black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWN0aXZvc2xpcXVpZG9zL2FjdGl2b3NsaXF1aWRvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFBO0FBQUo7O0FBRUE7RUFDSSw4QkFBQTtBQUNKOztBQUNBO0VBQ0ksOEJBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjdGl2b3NsaXF1aWRvcy9hY3Rpdm9zbGlxdWlkb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5we1xyXG4gICAgZm9udC1mYW1pbHk6IEF2ZW5pckxUU3RkLUJsYWNrO1xyXG59XHJcbmlvbi1jYXJkLXN1YnRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBBdmVuaXJMVFN0ZC1CbGFjaztcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/activosliquidos/activosliquidos.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/activosliquidos/activosliquidos.page.ts ***!
  \***************************************************************/
/*! exports provided: ActivosliquidosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivosliquidosPage", function() { return ActivosliquidosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ActivosliquidosPage = class ActivosliquidosPage {
    constructor() {
        this.card1 = {
            inversionesNegociables: '',
            inversinesDisponibles: '',
            participacionFondos: ''
        };
        this.arrayInput1 = [];
        this.arrayInput2 = [];
        this.arrayInput3 = [];
        this.arrayInput5 = [];
        this.arrayInput6 = [];
        this.arrayInput7 = [];
        this.arrayInput8 = [];
        this.arrayInput9 = [];
        this.arrayInput10 = [];
        this.arrayInput11 = [];
        this.arrayInput12 = [];
        this.datosi2 = [
            {
                description: 'Caja(110500)',
                content: 'Bancos y otras entidades con actividad financiera(111000) ',
                content1: 'Equivalentes al efectivo(compromiso de pago)(111500)',
                title: 'Disponible'
            },
            {
                description: 'Inversiones negociables en títulos de deuda(120400)',
                content: 'Inversiones disponibles para la venta en títulos de deuda(121300)',
                content1: 'Participación en fondos de inversión colectiva abiertos sin pacto de permanencia(123016)',
                title: 'Inversiones'
            },
            {
                description: 'Cuentas corrientes',
                content: 'Fondos de inversión colectiva administrados por sociedades fiduciari',
                content1: 'Cuentas de ahorro',
                content2: 'Fondos de inversión colectiva administrados por sociedades comisionistas de bolsa(112006)',
                content3: 'Certificado de depósito a término(112007)',
                content4: 'Certificados de ahorro a término(112008)',
                content5: 'Títulos emitidos avalados, aceptados o garantizados por instituciones vigiladas por la superintendencia financiera(120305)',
                content6: '¿Certificados de ahorro a término ¿ cdat(120310)',
                content7: 'Fondos de inversión colectiva administrados por sociedades fiduciarias(120315)',
                content8: 'Fondos de inversión colectiva administrados por sociedades comisionistas de bolsa2(120320)',
                content9: 'Patrimonio autónomo administrado por sociedades fiduciarias(120325)',
                content10: 'Bonos ordinarios(120330)',
                title: 'Fondo de liquídez'
            },
        ];
    }
    ngOnInit() {
    }
    onSubmit() {
        console.log('submit');
    }
};
ActivosliquidosPage.ctorParameters = () => [];
ActivosliquidosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-activosliquidos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./activosliquidos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/activosliquidos/activosliquidos.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./activosliquidos.page.scss */ "./src/app/pages/activosliquidos/activosliquidos.page.scss")).default]
    })
], ActivosliquidosPage);



/***/ })

}]);
//# sourceMappingURL=pages-activosliquidos-activosliquidos-module-es2015.js.map