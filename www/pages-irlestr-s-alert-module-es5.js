(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-irlestr-s-alert-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/irlestrés/alert.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/irlestrés/alert.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesIrlestrSAlertPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header titulo=\"IRLEstrés\"></app-header>\n\n<ion-content>\n    TODO:Acá van los resultados que calcula el backend typescript\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/irlestrés/alert-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/irlestrés/alert-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: AlertPageRoutingModule */

    /***/
    function srcAppPagesIrlestrSAlertRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertPageRoutingModule", function () {
        return AlertPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _alert_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./alert.page */
      "./src/app/pages/irlestrés/alert.page.ts");

      var routes = [{
        path: '',
        component: _alert_page__WEBPACK_IMPORTED_MODULE_3__["AlertPage"]
      }];

      var AlertPageRoutingModule = function AlertPageRoutingModule() {
        _classCallCheck(this, AlertPageRoutingModule);
      };

      AlertPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AlertPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/irlestrés/alert.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/irlestrés/alert.module.ts ***!
      \*************************************************/

    /*! exports provided: AlertPageModule */

    /***/
    function srcAppPagesIrlestrSAlertModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertPageModule", function () {
        return AlertPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _alert_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./alert-routing.module */
      "./src/app/pages/irlestrés/alert-routing.module.ts");
      /* harmony import */


      var _alert_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./alert.page */
      "./src/app/pages/irlestrés/alert.page.ts");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/components.module */
      "./src/app/components/components.module.ts");

      var AlertPageModule = function AlertPageModule() {
        _classCallCheck(this, AlertPageModule);
      };

      AlertPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _alert_routing_module__WEBPACK_IMPORTED_MODULE_5__["AlertPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_alert_page__WEBPACK_IMPORTED_MODULE_6__["AlertPage"]]
      })], AlertPageModule);
      /***/
    },

    /***/
    "./src/app/pages/irlestrés/alert.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/pages/irlestrés/alert.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesIrlestrSAlertPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2lybGVzdHLDqXMvYWxlcnQucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/pages/irlestrés/alert.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/irlestrés/alert.page.ts ***!
      \***********************************************/

    /*! exports provided: AlertPage */

    /***/
    function srcAppPagesIrlestrSAlertPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertPage", function () {
        return AlertPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AlertPage = /*#__PURE__*/function () {
        function AlertPage() {
          _classCallCheck(this, AlertPage);
        }

        _createClass(AlertPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AlertPage;
      }();

      AlertPage.ctorParameters = function () {
        return [];
      };

      AlertPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alert',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./alert.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/irlestrés/alert.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./alert.page.scss */
        "./src/app/pages/irlestrés/alert.page.scss"))["default"]]
      })], AlertPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-irlestr-s-alert-module-es5.js.map