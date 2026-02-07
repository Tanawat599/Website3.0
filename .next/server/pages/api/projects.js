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
exports.id = "pages/api/projects";
exports.ids = ["pages/api/projects"];
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

/***/ "(api)/./pages/api/projects.ts":
/*!*******************************!*\
  !*** ./pages/api/projects.ts ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/db */ \"(api)/./lib/db.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_db__WEBPACK_IMPORTED_MODULE_0__]);\n_lib_db__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nasync function handler(req, res) {\n    try {\n        const rows = await _lib_db__WEBPACK_IMPORTED_MODULE_0__.sql`SELECT * FROM project ORDER BY id ASC`;\n        res.status(200).json(rows);\n    } catch (error) {\n        console.error(\"Error fetching projects:\", error);\n        res.status(500).json({\n            error: \"Internal Server Error\"\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvamVjdHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDbUM7QUFFcEIsZUFBZUMsT0FBTyxDQUNqQ0MsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ3RCO0lBQ0UsSUFBSTtRQUNBLE1BQU1DLElBQUksR0FBRyxNQUFNSix3Q0FBRyxDQUFDLHFDQUFxQyxDQUFDO1FBQzdERyxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDRixJQUFJLENBQUMsQ0FBQztJQUMvQixFQUFFLE9BQU9HLEtBQUssRUFBRTtRQUNaQyxPQUFPLENBQUNELEtBQUssQ0FBQywwQkFBMEIsRUFBRUEsS0FBSyxDQUFDLENBQUM7UUFDakRKLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsS0FBSyxFQUFFLHVCQUF1QjtTQUFFLENBQUMsQ0FBQztJQUM3RCxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3BhZ2VzL2FwaS9wcm9qZWN0cy50cz85M2Q4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgc3FsIH0gZnJvbSAnLi4vLi4vbGliL2RiJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICAgIHJlczogTmV4dEFwaVJlc3BvbnNlXG4pIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByb3dzID0gYXdhaXQgc3FsYFNFTEVDVCAqIEZST00gcHJvamVjdCBPUkRFUiBCWSBpZCBBU0NgO1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyb3dzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwcm9qZWN0czonLCBlcnJvcik7XG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InIH0pO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJzcWwiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicm93cyIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/projects.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/projects.ts"));
module.exports = __webpack_exports__;

})();