/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/express/lib sync recursive":
/*!****************************************!*\
  !*** ./node_modules/express/lib/ sync ***!
  \****************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/express/lib sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "./src/Pages/App.js":
/*!**************************!*\
  !*** ./src/Pages/App.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"./node_modules/express/index.js\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_CoreComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/CoreComponent */ \"./src/core/CoreComponent.js\");\n/* harmony import */ var _const_RouteConst__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const/RouteConst */ \"./src/const/RouteConst.js\");\n\n\n\n\nclass App extends _core_CoreComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n    constructor($target, props) {\n        super($target, props);\n    }\n    setHTML() {\n        `\n        <div class=\"progress-bar-container\">\n            <label for=\"progressbar\">Loading...</label>\n            <progress id=\"progressbar\" value=\"0\" max=\"100\"></progress>\n        </div>\n        `;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvUGFnZXMvQXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2YtbGFiLXZhbmlsbGEtcHJvamVjdC8uL3NyYy9QYWdlcy9BcHAuanM/ZjhlNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBDb3JlQ29tcG9uZW50IGZyb20gJy4uL2NvcmUvQ29yZUNvbXBvbmVudCc7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4uL2NvbnN0L1JvdXRlQ29uc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBDb3JlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigkdGFyZ2V0LCBwcm9wcykge1xuICAgICAgICBzdXBlcigkdGFyZ2V0LCBwcm9wcyk7XG4gICAgfVxuICAgIHNldEhUTUwoKSB7XG4gICAgICAgIGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzLWJhci1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcm9ncmVzc2JhclwiPkxvYWRpbmcuLi48L2xhYmVsPlxuICAgICAgICAgICAgPHByb2dyZXNzIGlkPVwicHJvZ3Jlc3NiYXJcIiB2YWx1ZT1cIjBcIiBtYXg9XCIxMDBcIj48L3Byb2dyZXNzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Pages/App.js\n");

/***/ }),

/***/ "./src/const/RouteConst.js":
/*!*********************************!*\
  !*** ./src/const/RouteConst.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pages_TetrisPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/TetrisPage */ \"./src/pages/TetrisPage.js\");\n/* harmony import */ var _pages_BallPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/BallPage */ \"./src/pages/BallPage.js\");\n/* harmony import */ var _pages_SnakePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/SnakePage */ \"./src/pages/SnakePage.js\");\n/* harmony import */ var _pages_GalagaPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/GalagaPage */ \"./src/pages/GalagaPage.js\");\n/* harmony import */ var _core_Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Router */ \"./src/core/Router.js\");\n/* harmony import */ var _Pages_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Pages/App */ \"./src/Pages/App.js\");\n\n\n\n\n\n\n\nconst route = [\n    { path: '/Main', component: _Pages_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"] },\n    { path: '/Tetris', component: _pages_TetrisPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"] },\n    { path: '/Ball', component: _pages_BallPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"] },\n    { path: '/Snake', component: _pages_SnakePage__WEBPACK_IMPORTED_MODULE_2__[\"default\"] },\n    { path: '/Gallugu', component: _pages_GalagaPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"] },\n];\n\nconst router = new _core_Router__WEBPACK_IMPORTED_MODULE_4__[\"default\"](route);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uc3QvUm91dGVDb25zdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZi1sYWItdmFuaWxsYS1wcm9qZWN0Ly4vc3JjL2NvbnN0L1JvdXRlQ29uc3QuanM/YmQzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGV0cmlzUGFnZSBmcm9tICcuLi9wYWdlcy9UZXRyaXNQYWdlJztcbmltcG9ydCBCYWxsUGFnZSBmcm9tICcuLi9wYWdlcy9CYWxsUGFnZSc7XG5pbXBvcnQgU25ha2VQYWdlIGZyb20gJy4uL3BhZ2VzL1NuYWtlUGFnZSc7XG5pbXBvcnQgR2FsYWdhUGFnZSBmcm9tICcuLi9wYWdlcy9HYWxhZ2FQYWdlJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi4vY29yZS9Sb3V0ZXInO1xuaW1wb3J0IEFwcCBmcm9tICcuLi9QYWdlcy9BcHAnO1xuXG5jb25zdCByb3V0ZSA9IFtcbiAgICB7IHBhdGg6ICcvTWFpbicsIGNvbXBvbmVudDogQXBwIH0sXG4gICAgeyBwYXRoOiAnL1RldHJpcycsIGNvbXBvbmVudDogVGV0cmlzUGFnZSB9LFxuICAgIHsgcGF0aDogJy9CYWxsJywgY29tcG9uZW50OiBCYWxsUGFnZSB9LFxuICAgIHsgcGF0aDogJy9TbmFrZScsIGNvbXBvbmVudDogU25ha2VQYWdlIH0sXG4gICAgeyBwYXRoOiAnL0dhbGx1Z3UnLCBjb21wb25lbnQ6IEdhbGFnYVBhZ2UgfSxcbl07XG5cbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIocm91dGUpO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/const/RouteConst.js\n");

/***/ }),

/***/ "./src/core/CoreComponent.js":
/*!***********************************!*\
  !*** ./src/core/CoreComponent.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CoreComponent)\n/* harmony export */ });\nclass CoreComponent {\n    constructor($target, props) {\n        this.$target = $target;\n        this.props = props;\n        this.events = [];\n        this.setup();\n        this.appendChild();\n        this.render();\n    }\n\n    setup() {}\n\n    render() {\n        this.$target.innerHTML = this.setHTML();\n        if (this.props?.inner) {\n            this.$target.replaceWith(...this.$target.childeNodes);\n        }\n    }\n\n    setHTML() {\n        return ``;\n    }\n\n    appendChild() {}\n\n    clearEvent(events) {\n        events.forEach((event) => {\n            const { target, type, callback } = event;\n            target.removeEventListener(type, callback);\n        });\n    }\n    setEvent() {}\n    addEvent(type, selector, callback) {\n        this.$target.addEventListener(type, (event) => {\n            if (!event.target.closest(selector)) return false;\n            callback(event);\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29yZS9Db3JlQ29tcG9uZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mLWxhYi12YW5pbGxhLXByb2plY3QvLi9zcmMvY29yZS9Db3JlQ29tcG9uZW50LmpzPzBkMGUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29yZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoJHRhcmdldCwgcHJvcHMpIHtcbiAgICAgICAgdGhpcy4kdGFyZ2V0ID0gJHRhcmdldDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmV2ZW50cyA9IFtdO1xuICAgICAgICB0aGlzLnNldHVwKCk7XG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoKTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBzZXR1cCgpIHt9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuJHRhcmdldC5pbm5lckhUTUwgPSB0aGlzLnNldEhUTUwoKTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHM/LmlubmVyKSB7XG4gICAgICAgICAgICB0aGlzLiR0YXJnZXQucmVwbGFjZVdpdGgoLi4udGhpcy4kdGFyZ2V0LmNoaWxkZU5vZGVzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEhUTUwoKSB7XG4gICAgICAgIHJldHVybiBgYDtcbiAgICB9XG5cbiAgICBhcHBlbmRDaGlsZCgpIHt9XG5cbiAgICBjbGVhckV2ZW50KGV2ZW50cykge1xuICAgICAgICBldmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgdGFyZ2V0LCB0eXBlLCBjYWxsYmFjayB9ID0gZXZlbnQ7XG4gICAgICAgICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzZXRFdmVudCgpIHt9XG4gICAgYWRkRXZlbnQodHlwZSwgc2VsZWN0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuJHRhcmdldC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFldmVudC50YXJnZXQuY2xvc2VzdChzZWxlY3RvcikpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/core/CoreComponent.js\n");

/***/ }),

/***/ "./src/core/Router.js":
/*!****************************!*\
  !*** ./src/core/Router.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Router)\n/* harmony export */ });\nclass Router {\n    constructor(target, render_target, routes, errorPage) {\n        this.target = target;\n        this.render_target = render_target;\n        this.routes = routes;\n        this.errorPage = errorPage;\n        this.set();\n        this.routes();\n    }\n\n    set() {}\n\n    route(path) {\n        window.history.pushState(null, null, path);\n        const curPath = window.location.pathname;\n        const routTarget = this.routes.find((rout) => rout.path == curPath);\n        if (routTarget) {\n            new routTarget.component.render();\n        } else {\n            new this.errorPage.render();\n        }\n    }\n\n    backNavigate() {\n        window.addEventListener('popstate', () => {\n            this.route();\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29yZS9Sb3V0ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mLWxhYi12YW5pbGxhLXByb2plY3QvLi9zcmMvY29yZS9Sb3V0ZXIuanM/MzIzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHRhcmdldCwgcmVuZGVyX3RhcmdldCwgcm91dGVzLCBlcnJvclBhZ2UpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMucmVuZGVyX3RhcmdldCA9IHJlbmRlcl90YXJnZXQ7XG4gICAgICAgIHRoaXMucm91dGVzID0gcm91dGVzO1xuICAgICAgICB0aGlzLmVycm9yUGFnZSA9IGVycm9yUGFnZTtcbiAgICAgICAgdGhpcy5zZXQoKTtcbiAgICAgICAgdGhpcy5yb3V0ZXMoKTtcbiAgICB9XG5cbiAgICBzZXQoKSB7fVxuXG4gICAgcm91dGUocGF0aCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgcGF0aCk7XG4gICAgICAgIGNvbnN0IGN1clBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgICAgIGNvbnN0IHJvdXRUYXJnZXQgPSB0aGlzLnJvdXRlcy5maW5kKChyb3V0KSA9PiByb3V0LnBhdGggPT0gY3VyUGF0aCk7XG4gICAgICAgIGlmIChyb3V0VGFyZ2V0KSB7XG4gICAgICAgICAgICBuZXcgcm91dFRhcmdldC5jb21wb25lbnQucmVuZGVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXcgdGhpcy5lcnJvclBhZ2UucmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiYWNrTmF2aWdhdGUoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucm91dGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/core/Router.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Pages_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pages/App */ \"./src/Pages/App.js\");\n\n\nnew _Pages_App__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document.querySelector('#App'));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mLWxhYi12YW5pbGxhLXByb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gJy4vUGFnZXMvQXBwJztcblxubmV3IEFwcChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjQXBwJykpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/pages/BallPage.js":
/*!*******************************!*\
  !*** ./src/pages/BallPage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BallPage)\n/* harmony export */ });\nclass BallPage {\n    setHTML() {\n        return `\n        <h1>BallPage</h1>\n        `;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvQmFsbFBhZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZi1sYWItdmFuaWxsYS1wcm9qZWN0Ly4vc3JjL3BhZ2VzL0JhbGxQYWdlLmpzP2ZmZmYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFsbFBhZ2Uge1xuICAgIHNldEhUTUwoKSB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgIDxoMT5CYWxsUGFnZTwvaDE+XG4gICAgICAgIGA7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/BallPage.js\n");

/***/ }),

/***/ "./src/pages/GalagaPage.js":
/*!*********************************!*\
  !*** ./src/pages/GalagaPage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GalagaPage)\n/* harmony export */ });\nclass GalagaPage {\n    setHTML() {\n        return `\n        <h1>GalagaPage</h1>\n        `;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvR2FsYWdhUGFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mLWxhYi12YW5pbGxhLXByb2plY3QvLi9zcmMvcGFnZXMvR2FsYWdhUGFnZS5qcz81MDJjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbGFnYVBhZ2Uge1xuICAgIHNldEhUTUwoKSB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgIDxoMT5HYWxhZ2FQYWdlPC9oMT5cbiAgICAgICAgYDtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/GalagaPage.js\n");

/***/ }),

/***/ "./src/pages/SnakePage.js":
/*!********************************!*\
  !*** ./src/pages/SnakePage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SnakePage)\n/* harmony export */ });\nclass SnakePage {\n    setHTML() {\n        return `\n        <h1>SankePage</h1>\n        `;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvU25ha2VQYWdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2YtbGFiLXZhbmlsbGEtcHJvamVjdC8uL3NyYy9wYWdlcy9TbmFrZVBhZ2UuanM/YzVjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTbmFrZVBhZ2Uge1xuICAgIHNldEhUTUwoKSB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgIDxoMT5TYW5rZVBhZ2U8L2gxPlxuICAgICAgICBgO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/SnakePage.js\n");

/***/ }),

/***/ "./src/pages/TetrisPage.js":
/*!*********************************!*\
  !*** ./src/pages/TetrisPage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TetrisPage)\n/* harmony export */ });\nclass TetrisPage {\n    setHTML() {\n        return `\n        <h1>TetrisPage</h1>\n        `;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvVGV0cmlzUGFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mLWxhYi12YW5pbGxhLXByb2plY3QvLi9zcmMvcGFnZXMvVGV0cmlzUGFnZS5qcz8zMjhlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRldHJpc1BhZ2Uge1xuICAgIHNldEhUTUwoKSB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgIDxoMT5UZXRyaXNQYWdlPC9oMT5cbiAgICAgICAgYDtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/TetrisPage.js\n");

/***/ }),

/***/ "?5438":
/*!*******************************!*\
  !*** ./extend-node (ignored) ***!
  \*******************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?5997":
/*!***************************!*\
  !*** ./streams (ignored) ***!
  \***************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?e38f":
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?4f7e":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkf_lab_vanilla_project"] = self["webpackChunkf_lab_vanilla_project"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_express_index_js"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;