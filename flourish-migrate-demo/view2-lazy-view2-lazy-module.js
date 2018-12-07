(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view2-lazy-view2-lazy-module"],{

/***/ "./src/app-js/core/version/interpolate-filter.ts":
/*!*******************************************************!*\
  !*** ./src/app-js/core/version/interpolate-filter.ts ***!
  \*******************************************************/
/*! exports provided: interpolateFilter, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateFilter", function() { return interpolateFilter; });
var interpolateFilter = angular.module('myApp.version.interpolate-filter', [])
    .filter('interpolate', ['version', function (version) {
        return function (text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        };
    }]);
/* harmony default export */ __webpack_exports__["default"] = (interpolateFilter);


/***/ }),

/***/ "./src/app-js/core/version/version-directive.ts":
/*!******************************************************!*\
  !*** ./src/app-js/core/version/version-directive.ts ***!
  \******************************************************/
/*! exports provided: versionDirective, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "versionDirective", function() { return versionDirective; });
var versionDirective = angular.module('myApp.version.version-directive', [])
    .directive('appVersion', ['version', function (version) {
        return function (scope, elm, attrs) {
            elm.text(version);
        };
    }]);
/* harmony default export */ __webpack_exports__["default"] = (versionDirective);


/***/ }),

/***/ "./src/app-js/core/version/version.ts":
/*!********************************************!*\
  !*** ./src/app-js/core/version/version.ts ***!
  \********************************************/
/*! exports provided: myAppVersion, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myAppVersion", function() { return myAppVersion; });
/* harmony import */ var _version_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version-directive */ "./src/app-js/core/version/version-directive.ts");
/* harmony import */ var _interpolate_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interpolate-filter */ "./src/app-js/core/version/interpolate-filter.ts");


var myAppVersion = angular.module('myApp.version', [
    _interpolate_filter__WEBPACK_IMPORTED_MODULE_1__["interpolateFilter"].name,
    _version_directive__WEBPACK_IMPORTED_MODULE_0__["versionDirective"].name
])
    .value('version', '0.1');
/* harmony default export */ __webpack_exports__["default"] = (myAppVersion);


/***/ }),

/***/ "./src/app-js/view2/view2.html":
/*!*************************************!*\
  !*** ./src/app-js/view2/view2.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>This is the partial for view 2.</p>\n<p>\n  Showing of 'interpolate' filter:\n  {{ 'Current version is v%VERSION%.' | interpolate }}\n</p>\n"

/***/ }),

/***/ "./src/app-js/view2/view2.ts":
/*!***********************************!*\
  !*** ./src/app-js/view2/view2.ts ***!
  \***********************************/
/*! exports provided: myAppView2, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myAppView2", function() { return myAppView2; });
/* harmony import */ var _core_version_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/version/version */ "./src/app-js/core/version/version.ts");

var myAppView2 = angular
    .module('view2', ['ui.router', _core_version_version__WEBPACK_IMPORTED_MODULE_0__["myAppVersion"].name])
    .config(['$locationProvider', '$stateProvider', function ($locationProvider, $stateProvider) {
        $locationProvider.html5Mode(true);
        $stateProvider.state('view2', {
            url: '/view2',
            template: __webpack_require__(/*! ./view2.html */ "./src/app-js/view2/view2.html"),
            controller: 'View2Ctrl'
        });
    }])
    .run(function ($rootScope) {
    console.log('Running AngularJS application 222222222222222');
    $rootScope.$on('$stateChangeStart', function (e, toState, toParams) {
        console.log('$stateChangeStart', toState, toParams);
    });
})
    .controller('View2Ctrl', [function () {
    }]);
/* harmony default export */ __webpack_exports__["default"] = (myAppView2);


/***/ }),

/***/ "./src/app/view2-lazy/view2-lazy.module.ts":
/*!*************************************************!*\
  !*** ./src/app/view2-lazy/view2-lazy.module.ts ***!
  \*************************************************/
/*! exports provided: EmptyComponent, View2LazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyComponent", function() { return EmptyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View2LazyModule", function() { return View2LazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/upgrade/static */ "./node_modules/@angular/upgrade/fesm5/static.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_router_upgrade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router/upgrade */ "./node_modules/@angular/router/fesm5/upgrade.js");
/* harmony import */ var _app_js_view2_view2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app-js/view2/view2 */ "./src/app-js/view2/view2.ts");







var EmptyComponent = /** @class */ (function () {
    function EmptyComponent(upgrade) {
        this.upgrade = upgrade;
    }
    EmptyComponent.prototype.ngOnInit = function () {
        this.upgrade.bootstrap(document.querySelector('#view2'), [_app_js_view2_view2__WEBPACK_IMPORTED_MODULE_6__["default"].name]);
        Object(_angular_router_upgrade__WEBPACK_IMPORTED_MODULE_5__["setUpLocationSync"])(this.upgrade);
    };
    EmptyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: '<div id="view2" ui-view></div>'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_upgrade_static__WEBPACK_IMPORTED_MODULE_3__["UpgradeModule"]])
    ], EmptyComponent);
    return EmptyComponent;
}());

var View2LazyModule = /** @class */ (function () {
    function View2LazyModule() {
    }
    View2LazyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
    ], View2LazyModule);
    return View2LazyModule;
}());



/***/ })

}]);
//# sourceMappingURL=view2-lazy-view2-lazy-module.js.map