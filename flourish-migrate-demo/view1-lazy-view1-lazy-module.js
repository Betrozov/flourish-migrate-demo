(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view1-lazy-view1-lazy-module"],{

/***/ "./src/app-js/view1/view1.html":
/*!*************************************!*\
  !*** ./src/app-js/view1/view1.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>This is the partial for view 1.</p>\n"

/***/ }),

/***/ "./src/app-js/view1/view1.ts":
/*!***********************************!*\
  !*** ./src/app-js/view1/view1.ts ***!
  \***********************************/
/*! exports provided: myAppView1, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myAppView1", function() { return myAppView1; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);

var myAppView1 = angular__WEBPACK_IMPORTED_MODULE_0__["module"]('view1', ['ui.router'])
    .config(['$locationProvider', '$stateProvider', function ($locationProvider, $stateProvider) {
        $locationProvider.html5Mode(true);
        $stateProvider.state('view1', {
            url: '/view1',
            template: __webpack_require__(/*! ./view1.html */ "./src/app-js/view1/view1.html"),
            controller: 'View1Ctrl'
        });
    }])
    .run(function ($rootScope) {
    console.log('Running AngularJS application');
    $rootScope.$on('$stateChangeStart', function (e, toState, toParams) {
        console.log('$stateChangeStart', toState, toParams);
    });
})
    .controller('View1Ctrl', [function () {
    }]);
/* harmony default export */ __webpack_exports__["default"] = (myAppView1);


/***/ }),

/***/ "./src/app/view1-lazy/view1-lazy.module.ts":
/*!*************************************************!*\
  !*** ./src/app/view1-lazy/view1-lazy.module.ts ***!
  \*************************************************/
/*! exports provided: EmptyComponent, View1LazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyComponent", function() { return EmptyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View1LazyModule", function() { return View1LazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/upgrade/static */ "./node_modules/@angular/upgrade/fesm5/static.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_router_upgrade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router/upgrade */ "./node_modules/@angular/router/fesm5/upgrade.js");
/* harmony import */ var _app_js_view1_view1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app-js/view1/view1 */ "./src/app-js/view1/view1.ts");







var EmptyComponent = /** @class */ (function () {
    function EmptyComponent(upgrade) {
        this.upgrade = upgrade;
    }
    EmptyComponent.prototype.ngOnInit = function () {
        this.upgrade.bootstrap(document.querySelector('#view1'), [_app_js_view1_view1__WEBPACK_IMPORTED_MODULE_6__["default"].name]);
        Object(_angular_router_upgrade__WEBPACK_IMPORTED_MODULE_5__["setUpLocationSync"])(this.upgrade);
    };
    EmptyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: '<div id="view1" ui-view></div>'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_upgrade_static__WEBPACK_IMPORTED_MODULE_3__["UpgradeModule"]])
    ], EmptyComponent);
    return EmptyComponent;
}());

var View1LazyModule = /** @class */ (function () {
    function View1LazyModule() {
    }
    View1LazyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                EmptyComponent
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_3__["UpgradeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    { path: '', pathMatch: 'full', component: EmptyComponent }
                ])
            ]
        })
    ], View1LazyModule);
    return View1LazyModule;
}());



/***/ })

}]);
//# sourceMappingURL=view1-lazy-view1-lazy-module.js.map