/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://spa_game_website/./src/sass/style.scss?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ \"./src/sass/style.scss\");\n\nconst pageList = __webpack_require__(/*! ./pageList */ \"./src/js/pageList.js\");\nconst pageDetail = __webpack_require__(/*! ./pageDetail */ \"./src/js/pageDetail.js\");\nconst router = __webpack_require__(/*! ./router */ \"./src/js/router.js\")\n\nconsole.log(\"index.js\");\npageList();\npageDetail();\n\nconst getRoute = () => {\n\tlet path = window.location.hash.substring(1).split(\"/\");\n\tlet pageArgument = path[1] || \"\";\n\trouter[path[0]](pageArgument);\n}\n\nwindow.addEventListener(\"hashchange\", getRoute);\nwindow.addEventListener(\"DOMContentLoaded\", getRoute);\n\n//# sourceURL=webpack://spa_game_website/./src/js/index.js?");

/***/ }),

/***/ "./src/js/pageDetail.js":
/*!******************************!*\
  !*** ./src/js/pageDetail.js ***!
  \******************************/
/***/ ((module) => {

eval("const pageDetail = () => {\n\tconsole.log(\"this is pageDetail\");\n}\nmodule.exports = pageDetail;\n\n//# sourceURL=webpack://spa_game_website/./src/js/pageDetail.js?");

/***/ }),

/***/ "./src/js/pageList.js":
/*!****************************!*\
  !*** ./src/js/pageList.js ***!
  \****************************/
/***/ ((module) => {

eval("const pageList = () => {\n\tconsole.log(\"this is pageList\");\n}\nmodule.exports = pageList;\n\n//# sourceURL=webpack://spa_game_website/./src/js/pageList.js?");

/***/ }),

/***/ "./src/js/router.js":
/*!**************************!*\
  !*** ./src/js/router.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const pageList = __webpack_require__(/*! ./pageList */ \"./src/js/pageList.js\");\nconst pageDetail = __webpack_require__(/*! ./pageDetail */ \"./src/js/pageDetail.js\");\nconst router = {\n\t\"\": pageList,\n\t\"pageList\": pageList,\n\t\"pageDetail\": pageDetail\n}\nmodule.exports = router;\n\n//# sourceURL=webpack://spa_game_website/./src/js/router.js?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;