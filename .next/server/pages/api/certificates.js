"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/certificates";
exports.ids = ["pages/api/certificates"];
exports.modules = {

/***/ "@neondatabase/serverless":
/*!*******************************************!*\
  !*** external "@neondatabase/serverless" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = import("@neondatabase/serverless");;

/***/ }),

/***/ "(api)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sql\": () => (/* binding */ sql)\n/* harmony export */ });\n/* harmony import */ var _neondatabase_serverless__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @neondatabase/serverless */ \"@neondatabase/serverless\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_neondatabase_serverless__WEBPACK_IMPORTED_MODULE_0__]);\n_neondatabase_serverless__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nif (!process.env.DATABASE_URL) {\n    throw new Error(\"DATABASE_URL is not defined in .env.local\");\n}\nconst sql = (0,_neondatabase_serverless__WEBPACK_IMPORTED_MODULE_0__.neon)(process.env.DATABASE_URL);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZ0Q7QUFFaEQsSUFBSSxDQUFDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsWUFBWSxFQUFFO0lBQzNCLE1BQU0sSUFBSUMsS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7QUFDakUsQ0FBQztBQUVNLE1BQU1DLEdBQUcsR0FBR0wsOERBQUksQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFlBQVksQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbGliL2RiLnRzPzFkZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbmVvbiB9IGZyb20gJ0BuZW9uZGF0YWJhc2Uvc2VydmVybGVzcyc7XG5cbmlmICghcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdEQVRBQkFTRV9VUkwgaXMgbm90IGRlZmluZWQgaW4gLmVudi5sb2NhbCcpO1xufVxuXG5leHBvcnQgY29uc3Qgc3FsID0gbmVvbihwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwpOyJdLCJuYW1lcyI6WyJuZW9uIiwicHJvY2VzcyIsImVudiIsIkRBVEFCQVNFX1VSTCIsIkVycm9yIiwic3FsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/db.ts\n");

/***/ }),

/***/ "(api)/./pages/api/certificates.ts":
/*!***********************************!*\
  !*** ./pages/api/certificates.ts ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/db */ \"(api)/./lib/db.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_db__WEBPACK_IMPORTED_MODULE_0__]);\n_lib_db__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nasync function handler(req, res) {\n    try {\n        const rows = await _lib_db__WEBPACK_IMPORTED_MODULE_0__.sql`SELECT * FROM certificate ORDER BY id ASC`;\n        res.status(200).json(rows);\n    } catch (error) {\n        console.error(\"Error fetching certificates:\", error);\n        res.status(500).json({\n            error: \"Internal Server Error\"\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2VydGlmaWNhdGVzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ21DO0FBRXBCLGVBQWVDLE9BQU8sQ0FDakNDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUN0QjtJQUNFLElBQUk7UUFDQSxNQUFNQyxJQUFJLEdBQUcsTUFBTUosd0NBQUcsQ0FBQyx5Q0FBeUMsQ0FBQztRQUNqRUcsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0YsSUFBSSxDQUFDLENBQUM7SUFDL0IsRUFBRSxPQUFPRyxLQUFLLEVBQUU7UUFDWkMsT0FBTyxDQUFDRCxLQUFLLENBQUMsOEJBQThCLEVBQUVBLEtBQUssQ0FBQyxDQUFDO1FBQ3JESixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLEtBQUssRUFBRSx1QkFBdUI7U0FBRSxDQUFDLENBQUM7SUFDN0QsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9wYWdlcy9hcGkvY2VydGlmaWNhdGVzLnRzP2FlYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgeyBzcWwgfSBmcm9tICcuLi8uLi9saWIvZGInO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICAgIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gICAgcmVzOiBOZXh0QXBpUmVzcG9uc2Vcbikge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJvd3MgPSBhd2FpdCBzcWxgU0VMRUNUICogRlJPTSBjZXJ0aWZpY2F0ZSBPUkRFUiBCWSBpZCBBU0NgO1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyb3dzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBjZXJ0aWZpY2F0ZXM6JywgZXJyb3IpO1xuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyB9KTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsic3FsIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInJvd3MiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/certificates.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/certificates.ts"));
module.exports = __webpack_exports__;

})();