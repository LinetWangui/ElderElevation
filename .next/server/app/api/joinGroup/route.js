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
exports.id = "app/api/joinGroup/route";
exports.ids = ["app/api/joinGroup/route"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FjoinGroup%2Froute&page=%2Fapi%2FjoinGroup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FjoinGroup%2Froute.js&appDir=C%3A%5CUsers%5CUser%5CDownloads%5Clinet%20(3)%5Clinet%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUser%5CDownloads%5Clinet%20(3)%5Clinet&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FjoinGroup%2Froute&page=%2Fapi%2FjoinGroup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FjoinGroup%2Froute.js&appDir=C%3A%5CUsers%5CUser%5CDownloads%5Clinet%20(3)%5Clinet%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUser%5CDownloads%5Clinet%20(3)%5Clinet&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_User_Downloads_linet_3_linet_src_app_api_joinGroup_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/joinGroup/route.js */ \"(rsc)/./src/app/api/joinGroup/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/joinGroup/route\",\n        pathname: \"/api/joinGroup\",\n        filename: \"route\",\n        bundlePath: \"app/api/joinGroup/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\User\\\\Downloads\\\\linet (3)\\\\linet\\\\src\\\\app\\\\api\\\\joinGroup\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_User_Downloads_linet_3_linet_src_app_api_joinGroup_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/joinGroup/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZqb2luR3JvdXAlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmpvaW5Hcm91cCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmpvaW5Hcm91cCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNVc2VyJTVDRG93bmxvYWRzJTVDbGluZXQlMjAoMyklNUNsaW5ldCU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDVXNlciU1Q0Rvd25sb2FkcyU1Q2xpbmV0JTIwKDMpJTVDbGluZXQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDZ0M7QUFDN0c7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saW5ldC8/NzM0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxVc2VyXFxcXERvd25sb2Fkc1xcXFxsaW5ldCAoMylcXFxcbGluZXRcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcam9pbkdyb3VwXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9qb2luR3JvdXAvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9qb2luR3JvdXBcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2pvaW5Hcm91cC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXFVzZXJcXFxcRG93bmxvYWRzXFxcXGxpbmV0ICgzKVxcXFxsaW5ldFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxqb2luR3JvdXBcXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvam9pbkdyb3VwL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FjoinGroup%2Froute&page=%2Fapi%2FjoinGroup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FjoinGroup%2Froute.js&appDir=C%3A%5CUsers%5CUser%5CDownloads%5Clinet%20(3)%5Clinet%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUser%5CDownloads%5Clinet%20(3)%5Clinet&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.js":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_models_table_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/models/table_users */ \"(rsc)/./src/app/models/table_users.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst authOptions = {\n    secret: \"jfkndosvjiodfsdj\",\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"Credentials\",\n            id: \"credentials\",\n            credentials: {\n                username: {\n                    label: \"Email\",\n                    type: \"email\",\n                    placeholder: \"johndoe@example.com\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                const email = credentials?.email;\n                const password = credentials?.password;\n                if (!email || !password) {\n                    throw new Error(\"Email and password are required\");\n                }\n                await mongoose__WEBPACK_IMPORTED_MODULE_2__.connect(\"mongodb+srv://elderelevation:elderelevation123@cluster0.dqmkuhs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0\");\n                const user = await _app_models_table_users__WEBPACK_IMPORTED_MODULE_3__.User.findOne({\n                    email\n                });\n                if (!user) {\n                    throw new Error(\"No user found with this email\");\n                }\n                const passwordOk = user && bcrypt__WEBPACK_IMPORTED_MODULE_4___default().compareSync(password, user.password);\n                if (!passwordOk) {\n                    throw new Error(\"Invalid email or password\");\n                }\n                return user;\n            }\n        })\n    ],\n    pages: {\n        error: \"/login\"\n    }\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDaUM7QUFDN0I7QUFDVztBQUNwQjtBQUVyQixNQUFNSyxjQUFjO0lBQ3pCQyxRQUFRQyxrQkFBOEI7SUFDdENHLFdBQVc7UUFDVFQsMkVBQW1CQSxDQUFDO1lBQ2xCVSxNQUFNO1lBQ05DLElBQUk7WUFDSkMsYUFBYTtnQkFDWEMsVUFBVTtvQkFBRUMsT0FBTztvQkFBU0MsTUFBTTtvQkFBU0MsYUFBYTtnQkFBc0I7Z0JBQzlFQyxVQUFVO29CQUFFSCxPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ2xEO1lBQ0EsTUFBTUcsV0FBVU4sV0FBVyxFQUFFTyxHQUFHO2dCQUM5QixNQUFNQyxRQUFRUixhQUFhUTtnQkFDM0IsTUFBTUgsV0FBV0wsYUFBYUs7Z0JBRTlCLElBQUksQ0FBQ0csU0FBUyxDQUFDSCxVQUFVO29CQUN2QixNQUFNLElBQUlJLE1BQU07Z0JBQ2xCO2dCQUVBLE1BQU1wQiw2Q0FBZ0IsQ0FBQ0ssMkhBQWdDO2dCQUN2RCxNQUFNa0IsT0FBTyxNQUFNdEIseURBQUlBLENBQUN1QixPQUFPLENBQUM7b0JBQUVMO2dCQUFNO2dCQUN4QyxJQUFJLENBQUNJLE1BQU07b0JBQ1QsTUFBTSxJQUFJSCxNQUFNO2dCQUNsQjtnQkFFQSxNQUFNSyxhQUFhRixRQUFRckIseURBQWtCLENBQUNjLFVBQVVPLEtBQUtQLFFBQVE7Z0JBQ3JFLElBQUksQ0FBQ1MsWUFBWTtvQkFDZixNQUFNLElBQUlMLE1BQU07Z0JBQ2xCO2dCQUVBLE9BQU9HO1lBQ1Q7UUFDRjtLQUNEO0lBQ0RJLE9BQU87UUFDTEMsT0FBTztJQUNUO0FBQ0YsRUFBRTtBQUVGLE1BQU1DLFVBQVUvQixnREFBUUEsQ0FBQ0s7QUFFa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saW5ldC8uL3NyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcz8yMzJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XHJcbmltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIkAvYXBwL21vZGVscy90YWJsZV91c2Vyc1wiO1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcclxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NFQ1JFVCxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgICBuYW1lOiBcIkNyZWRlbnRpYWxzXCIsXHJcbiAgICAgIGlkOiAnY3JlZGVudGlhbHMnLFxyXG4gICAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICAgIHVzZXJuYW1lOiB7IGxhYmVsOiBcIkVtYWlsXCIsIHR5cGU6IFwiZW1haWxcIiwgcGxhY2Vob2xkZXI6IFwiam9obmRvZUBleGFtcGxlLmNvbVwiIH0sXHJcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscywgcmVxKSB7XHJcbiAgICAgICAgY29uc3QgZW1haWwgPSBjcmVkZW50aWFscz8uZW1haWw7XHJcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSBjcmVkZW50aWFscz8ucGFzc3dvcmQ7XHJcblxyXG4gICAgICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFbWFpbCBhbmQgcGFzc3dvcmQgYXJlIHJlcXVpcmVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NT05HT1VSTCk7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsIH0pO1xyXG4gICAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gdXNlciBmb3VuZCB3aXRoIHRoaXMgZW1haWxcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwYXNzd29yZE9rID0gdXNlciAmJiBiY3J5cHQuY29tcGFyZVN5bmMocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xyXG4gICAgICAgIGlmICghcGFzc3dvcmRPaykge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBwYWdlczoge1xyXG4gICAgZXJyb3I6IFwiL2xvZ2luXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XHJcblxyXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH07XHJcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJtb25nb29zZSIsIlVzZXIiLCJiY3J5cHQiLCJhdXRoT3B0aW9ucyIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TRUNSRVQiLCJwcm92aWRlcnMiLCJuYW1lIiwiaWQiLCJjcmVkZW50aWFscyIsInVzZXJuYW1lIiwibGFiZWwiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInJlcSIsImVtYWlsIiwiRXJyb3IiLCJjb25uZWN0IiwiTkVYVF9QVUJMSUNfTU9OR09VUkwiLCJ1c2VyIiwiZmluZE9uZSIsInBhc3N3b3JkT2siLCJjb21wYXJlU3luYyIsInBhZ2VzIiwiZXJyb3IiLCJoYW5kbGVyIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./src/app/api/joinGroup/route.js":
/*!****************************************!*\
  !*** ./src/app/api/joinGroup/route.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var _app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/api/auth/[...nextauth]/route */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_models_table_groups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/models/table_groups */ \"(rsc)/./src/app/models/table_groups.js\");\n/* harmony import */ var _app_models_table_usersInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/models/table_usersInfo */ \"(rsc)/./src/app/models/table_usersInfo.js\");\n/* harmony import */ var _app_models_table_users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/models/table_users */ \"(rsc)/./src/app/models/table_users.js\");\n\n\n\n\n\n\nasync function PUT(req) {\n    mongoose__WEBPACK_IMPORTED_MODULE_2___default().connect(\"mongodb+srv://elderelevation:elderelevation123@cluster0.dqmkuhs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0\");\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_0__.authOptions);\n    if (!session) {\n        return new Response(\"Unauthorized\", {\n            status: 401\n        });\n    }\n    const userEmail = session.user.email;\n    const { _id } = await req.json();\n    if (!_id) {\n        return new Response(\"Group ID is required\", {\n            status: 400\n        });\n    }\n    const user = await _app_models_table_users__WEBPACK_IMPORTED_MODULE_5__.User.findOne({\n        email: userEmail\n    });\n    const userInfo = await _app_models_table_usersInfo__WEBPACK_IMPORTED_MODULE_4__.UserInfo.findOne({\n        email: userEmail\n    });\n    const memberDetails = {\n        name: user.name,\n        email: user.email,\n        phone: userInfo.phone,\n        image: user.image,\n        country: userInfo.country\n    };\n    const updatedGroup = await _app_models_table_groups__WEBPACK_IMPORTED_MODULE_3__.Group.findByIdAndUpdate(_id, {\n        $addToSet: {\n            members: memberDetails\n        }\n    }, {\n        new: true\n    });\n    await _app_models_table_usersInfo__WEBPACK_IMPORTED_MODULE_4__.UserInfo.findOneAndUpdate({\n        email: userEmail\n    }, {\n        $addToSet: {\n            groups: _id\n        }\n    }, {\n        new: true\n    });\n    return new Response(JSON.stringify(updatedGroup), {\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\n}\nasync function DELETE(req) {\n    mongoose__WEBPACK_IMPORTED_MODULE_2___default().connect(\"mongodb+srv://elderelevation:elderelevation123@cluster0.dqmkuhs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0\");\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_0__.authOptions);\n    const userEmail = session.user.email;\n    const { _id } = await req.json();\n    if (!_id) {\n        return new Response(\"Group ID is required\", {\n            status: 400\n        });\n    }\n    const user = await _app_models_table_users__WEBPACK_IMPORTED_MODULE_5__.User.findOne({\n        email: userEmail\n    });\n    const updatedGroup = await _app_models_table_groups__WEBPACK_IMPORTED_MODULE_3__.Group.findByIdAndUpdate(_id, {\n        $pull: {\n            members: {\n                email: userEmail\n            }\n        }\n    }, {\n        new: true\n    });\n    await _app_models_table_usersInfo__WEBPACK_IMPORTED_MODULE_4__.UserInfo.findOneAndUpdate({\n        email: userEmail\n    }, {\n        $pull: {\n            groups: _id\n        }\n    }, {\n        new: true\n    });\n    return new Response(JSON.stringify(updatedGroup), {\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9qb2luR3JvdXAvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFpRTtBQUNwQjtBQUNiO0FBQ2tCO0FBQ007QUFDUjtBQUV6QyxlQUFlTSxJQUFJQyxHQUFHO0lBQzNCTCx1REFBZ0IsQ0FBQ08sMkhBQWdDO0lBRWpELE1BQU1HLFVBQVUsTUFBTVgsMkRBQWdCQSxDQUFDRCxxRUFBV0E7SUFDbEQsSUFBSSxDQUFDWSxTQUFTO1FBQ1osT0FBTyxJQUFJQyxTQUFTLGdCQUFnQjtZQUFFQyxRQUFRO1FBQUk7SUFDcEQ7SUFFQSxNQUFNQyxZQUFZSCxRQUFRSSxJQUFJLENBQUNDLEtBQUs7SUFDcEMsTUFBTSxFQUFFQyxHQUFHLEVBQUUsR0FBRyxNQUFNWCxJQUFJWSxJQUFJO0lBQzlCLElBQUksQ0FBQ0QsS0FBSztRQUNSLE9BQU8sSUFBSUwsU0FBUyx3QkFBd0I7WUFBRUMsUUFBUTtRQUFJO0lBQzVEO0lBRUEsTUFBTUUsT0FBTyxNQUFNWCx5REFBSUEsQ0FBQ2UsT0FBTyxDQUFDO1FBQUVILE9BQU9GO0lBQVU7SUFDbkQsTUFBTU0sV0FBVyxNQUFNakIsaUVBQVFBLENBQUNnQixPQUFPLENBQUM7UUFBRUgsT0FBT0Y7SUFBVTtJQUUzRCxNQUFNTyxnQkFBZ0I7UUFDcEJDLE1BQU1QLEtBQUtPLElBQUk7UUFDZk4sT0FBT0QsS0FBS0MsS0FBSztRQUNqQk8sT0FBT0gsU0FBU0csS0FBSztRQUNyQkMsT0FBT1QsS0FBS1MsS0FBSztRQUNqQkMsU0FBU0wsU0FBU0ssT0FBTztJQUMzQjtJQUVBLE1BQU1DLGVBQWUsTUFBTXhCLDJEQUFLQSxDQUFDeUIsaUJBQWlCLENBQ2hEVixLQUNBO1FBQUVXLFdBQVc7WUFBRUMsU0FBU1I7UUFBYztJQUFFLEdBQ3hDO1FBQUVTLEtBQUs7SUFBSztJQUdkLE1BQU0zQixpRUFBUUEsQ0FBQzRCLGdCQUFnQixDQUM3QjtRQUFFZixPQUFPRjtJQUFVLEdBQ25CO1FBQUVjLFdBQVc7WUFBRUksUUFBUWY7UUFBSTtJQUFFLEdBQzdCO1FBQUVhLEtBQUs7SUFBSztJQUdkLE9BQU8sSUFBSWxCLFNBQVNxQixLQUFLQyxTQUFTLENBQUNSLGVBQWU7UUFDaERTLFNBQVM7WUFBRSxnQkFBZ0I7UUFBbUI7SUFDaEQ7QUFDRjtBQUVPLGVBQWVDLE9BQU85QixHQUFHO0lBQzlCTCx1REFBZ0IsQ0FBQ08sMkhBQWdDO0lBRWpELE1BQU1HLFVBQVUsTUFBTVgsMkRBQWdCQSxDQUFDRCxxRUFBV0E7SUFDbEQsTUFBTWUsWUFBWUgsUUFBUUksSUFBSSxDQUFDQyxLQUFLO0lBQ3BDLE1BQU0sRUFBRUMsR0FBRyxFQUFFLEdBQUcsTUFBTVgsSUFBSVksSUFBSTtJQUM5QixJQUFJLENBQUNELEtBQUs7UUFDUixPQUFPLElBQUlMLFNBQVMsd0JBQXdCO1lBQUVDLFFBQVE7UUFBSTtJQUM1RDtJQUVBLE1BQU1FLE9BQU8sTUFBTVgseURBQUlBLENBQUNlLE9BQU8sQ0FBQztRQUFFSCxPQUFPRjtJQUFVO0lBRW5ELE1BQU1ZLGVBQWUsTUFBTXhCLDJEQUFLQSxDQUFDeUIsaUJBQWlCLENBQ2hEVixLQUNBO1FBQUVvQixPQUFPO1lBQUVSLFNBQVM7Z0JBQUViLE9BQU9GO1lBQVU7UUFBRTtJQUFFLEdBQzNDO1FBQUVnQixLQUFLO0lBQUs7SUFHZCxNQUFNM0IsaUVBQVFBLENBQUM0QixnQkFBZ0IsQ0FDN0I7UUFBRWYsT0FBT0Y7SUFBVSxHQUNuQjtRQUFFdUIsT0FBTztZQUFFTCxRQUFRZjtRQUFJO0lBQUUsR0FDekI7UUFBRWEsS0FBSztJQUFLO0lBR2QsT0FBTyxJQUFJbEIsU0FBU3FCLEtBQUtDLFNBQVMsQ0FBQ1IsZUFBZTtRQUNoRFMsU0FBUztZQUFFLGdCQUFnQjtRQUFtQjtJQUNoRDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGluZXQvLi9zcmMvYXBwL2FwaS9qb2luR3JvdXAvcm91dGUuanM/YTViNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gXCJAL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCI7XHJcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbmltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuaW1wb3J0IHsgR3JvdXAgfSBmcm9tIFwiQC9hcHAvbW9kZWxzL3RhYmxlX2dyb3Vwc1wiO1xyXG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gXCJAL2FwcC9tb2RlbHMvdGFibGVfdXNlcnNJbmZvXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiQC9hcHAvbW9kZWxzL3RhYmxlX3VzZXJzXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUFVUKHJlcSkge1xyXG4gIG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTU9OR09VUkwpO1xyXG5cclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XHJcbiAgaWYgKCFzZXNzaW9uKSB7XHJcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKCdVbmF1dGhvcml6ZWQnLCB7IHN0YXR1czogNDAxIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdXNlckVtYWlsID0gc2Vzc2lvbi51c2VyLmVtYWlsO1xyXG4gIGNvbnN0IHsgX2lkIH0gPSBhd2FpdCByZXEuanNvbigpO1xyXG4gIGlmICghX2lkKSB7XHJcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKCdHcm91cCBJRCBpcyByZXF1aXJlZCcsIHsgc3RhdHVzOiA0MDAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWw6IHVzZXJFbWFpbCB9KTtcclxuICBjb25zdCB1c2VySW5mbyA9IGF3YWl0IFVzZXJJbmZvLmZpbmRPbmUoeyBlbWFpbDogdXNlckVtYWlsIH0pO1xyXG5cclxuICBjb25zdCBtZW1iZXJEZXRhaWxzID0ge1xyXG4gICAgbmFtZTogdXNlci5uYW1lLFxyXG4gICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICBwaG9uZTogdXNlckluZm8ucGhvbmUsXHJcbiAgICBpbWFnZTogdXNlci5pbWFnZSxcclxuICAgIGNvdW50cnk6IHVzZXJJbmZvLmNvdW50cnksXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBkYXRlZEdyb3VwID0gYXdhaXQgR3JvdXAuZmluZEJ5SWRBbmRVcGRhdGUoXHJcbiAgICBfaWQsXHJcbiAgICB7ICRhZGRUb1NldDogeyBtZW1iZXJzOiBtZW1iZXJEZXRhaWxzIH0gfSxcclxuICAgIHsgbmV3OiB0cnVlIH1cclxuICApO1xyXG5cclxuICBhd2FpdCBVc2VySW5mby5maW5kT25lQW5kVXBkYXRlKFxyXG4gICAgeyBlbWFpbDogdXNlckVtYWlsIH0sXHJcbiAgICB7ICRhZGRUb1NldDogeyBncm91cHM6IF9pZCB9IH0sXHJcbiAgICB7IG5ldzogdHJ1ZSB9XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh1cGRhdGVkR3JvdXApLCB7XHJcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIERFTEVURShyZXEpIHtcclxuICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01PTkdPVVJMKTtcclxuXHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xyXG4gIGNvbnN0IHVzZXJFbWFpbCA9IHNlc3Npb24udXNlci5lbWFpbDtcclxuICBjb25zdCB7IF9pZCB9ID0gYXdhaXQgcmVxLmpzb24oKTtcclxuICBpZiAoIV9pZCkge1xyXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZSgnR3JvdXAgSUQgaXMgcmVxdWlyZWQnLCB7IHN0YXR1czogNDAwIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsOiB1c2VyRW1haWwgfSk7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZWRHcm91cCA9IGF3YWl0IEdyb3VwLmZpbmRCeUlkQW5kVXBkYXRlKFxyXG4gICAgX2lkLFxyXG4gICAgeyAkcHVsbDogeyBtZW1iZXJzOiB7IGVtYWlsOiB1c2VyRW1haWwgfSB9IH0sXHJcbiAgICB7IG5ldzogdHJ1ZSB9XHJcbiAgKTtcclxuXHJcbiAgYXdhaXQgVXNlckluZm8uZmluZE9uZUFuZFVwZGF0ZShcclxuICAgIHsgZW1haWw6IHVzZXJFbWFpbCB9LFxyXG4gICAgeyAkcHVsbDogeyBncm91cHM6IF9pZCB9IH0sXHJcbiAgICB7IG5ldzogdHJ1ZSB9XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh1cGRhdGVkR3JvdXApLCB7XHJcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICB9KTtcclxufSJdLCJuYW1lcyI6WyJhdXRoT3B0aW9ucyIsImdldFNlcnZlclNlc3Npb24iLCJtb25nb29zZSIsIkdyb3VwIiwiVXNlckluZm8iLCJVc2VyIiwiUFVUIiwicmVxIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19NT05HT1VSTCIsInNlc3Npb24iLCJSZXNwb25zZSIsInN0YXR1cyIsInVzZXJFbWFpbCIsInVzZXIiLCJlbWFpbCIsIl9pZCIsImpzb24iLCJmaW5kT25lIiwidXNlckluZm8iLCJtZW1iZXJEZXRhaWxzIiwibmFtZSIsInBob25lIiwiaW1hZ2UiLCJjb3VudHJ5IiwidXBkYXRlZEdyb3VwIiwiZmluZEJ5SWRBbmRVcGRhdGUiLCIkYWRkVG9TZXQiLCJtZW1iZXJzIiwibmV3IiwiZmluZE9uZUFuZFVwZGF0ZSIsImdyb3VwcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiREVMRVRFIiwiJHB1bGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/joinGroup/route.js\n");

/***/ }),

/***/ "(rsc)/./src/app/models/table_groups.js":
/*!****************************************!*\
  !*** ./src/app/models/table_groups.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Group: () => (/* binding */ Group)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ActivitySchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: String\n});\nconst MembersSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: String,\n    email: String,\n    phone: String,\n    image: String,\n    country: String\n});\nconst GroupSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    image: {\n        type: String\n    },\n    name: {\n        type: String\n    },\n    description: {\n        type: String\n    },\n    category: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types).ObjectId\n    },\n    activity: {\n        type: [\n            ActivitySchema\n        ]\n    },\n    accepted: {\n        type: Boolean,\n        default: false\n    },\n    rejected: {\n        type: Boolean,\n        default: false\n    },\n    email: {\n        type: String,\n        required: true\n    },\n    members: {\n        type: [\n            MembersSchema\n        ]\n    },\n    venue: {\n        type: String\n    },\n    announcements: {\n        type: String\n    },\n    objectives: {\n        type: String\n    }\n}, {\n    timestamps: true\n});\nconst Group = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.Group || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Group\", GroupSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL21vZGVscy90YWJsZV9ncm91cHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJEO0FBRTNELE1BQU1JLGlCQUFpQixJQUFJRCw0Q0FBTUEsQ0FBQztJQUNoQ0UsTUFBTUM7QUFDUjtBQUVBLE1BQU1DLGdCQUFnQixJQUFJSiw0Q0FBTUEsQ0FBQztJQUMvQkUsTUFBTUM7SUFDTkUsT0FBT0Y7SUFDUEcsT0FBT0g7SUFDUEksT0FBT0o7SUFDUEssU0FBU0w7QUFDWDtBQUVBLE1BQU1NLGNBQWMsSUFBSVQsNENBQU1BLENBQzVCO0lBQ0VPLE9BQU87UUFBRUcsTUFBTVA7SUFBTztJQUN0QkQsTUFBTTtRQUFFUSxNQUFNUDtJQUFPO0lBQ3JCUSxhQUFhO1FBQUVELE1BQU1QO0lBQU87SUFDNUJTLFVBQVU7UUFBRUYsTUFBTWIsdURBQWMsQ0FBQ2lCLFFBQVE7SUFBQztJQUMxQ0MsVUFBVTtRQUFFTCxNQUFNO1lBQUNUO1NBQWU7SUFBQztJQUNuQ2UsVUFBVTtRQUFFTixNQUFNTztRQUFTQyxTQUFTO0lBQU07SUFDMUNDLFVBQVU7UUFBRVQsTUFBTU87UUFBU0MsU0FBUztJQUFNO0lBQzFDYixPQUFPO1FBQUVLLE1BQU1QO1FBQVFpQixVQUFVO0lBQUs7SUFDdENDLFNBQVM7UUFBRVgsTUFBTTtZQUFDTjtTQUFjO0lBQUM7SUFDakNrQixPQUFPO1FBQUVaLE1BQU1QO0lBQU87SUFDdEJvQixlQUFlO1FBQUViLE1BQU1QO0lBQU87SUFDOUJxQixZQUFZO1FBQUVkLE1BQU1QO0lBQU87QUFDN0IsR0FDQTtJQUFFc0IsWUFBWTtBQUFLO0FBR2QsTUFBTUMsUUFBUTNCLDRDQUFNQSxFQUFFMkIsU0FBUzVCLCtDQUFLQSxDQUFDLFNBQVNXLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saW5ldC8uL3NyYy9hcHAvbW9kZWxzL3RhYmxlX2dyb3Vwcy5qcz83MThkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSwgeyBtb2RlbCwgbW9kZWxzLCBTY2hlbWEgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IEFjdGl2aXR5U2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcbiAgbmFtZTogU3RyaW5nLFxyXG59KTtcclxuXHJcbmNvbnN0IE1lbWJlcnNTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICBuYW1lOiBTdHJpbmcsXHJcbiAgZW1haWw6IFN0cmluZyxcclxuICBwaG9uZTogU3RyaW5nLFxyXG4gIGltYWdlOiBTdHJpbmcsXHJcbiAgY291bnRyeTogU3RyaW5nLFxyXG59KTtcclxuXHJcbmNvbnN0IEdyb3VwU2NoZW1hID0gbmV3IFNjaGVtYShcclxuICB7XHJcbiAgICBpbWFnZTogeyB0eXBlOiBTdHJpbmcgfSxcclxuICAgIG5hbWU6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgICBkZXNjcmlwdGlvbjogeyB0eXBlOiBTdHJpbmcgfSxcclxuICAgIGNhdGVnb3J5OiB7IHR5cGU6IG1vbmdvb3NlLlR5cGVzLk9iamVjdElkIH0sXHJcbiAgICBhY3Rpdml0eTogeyB0eXBlOiBbQWN0aXZpdHlTY2hlbWFdIH0sXHJcbiAgICBhY2NlcHRlZDogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9LFxyXG4gICAgcmVqZWN0ZWQ6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UgfSxcclxuICAgIGVtYWlsOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIG1lbWJlcnM6IHsgdHlwZTogW01lbWJlcnNTY2hlbWFdIH0sXHJcbiAgICB2ZW51ZTogeyB0eXBlOiBTdHJpbmcgfSxcclxuICAgIGFubm91bmNlbWVudHM6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgICBvYmplY3RpdmVzOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gIH0sXHJcbiAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBHcm91cCA9IG1vZGVscz8uR3JvdXAgfHwgbW9kZWwoXCJHcm91cFwiLCBHcm91cFNjaGVtYSk7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIm1vZGVsIiwibW9kZWxzIiwiU2NoZW1hIiwiQWN0aXZpdHlTY2hlbWEiLCJuYW1lIiwiU3RyaW5nIiwiTWVtYmVyc1NjaGVtYSIsImVtYWlsIiwicGhvbmUiLCJpbWFnZSIsImNvdW50cnkiLCJHcm91cFNjaGVtYSIsInR5cGUiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiVHlwZXMiLCJPYmplY3RJZCIsImFjdGl2aXR5IiwiYWNjZXB0ZWQiLCJCb29sZWFuIiwiZGVmYXVsdCIsInJlamVjdGVkIiwicmVxdWlyZWQiLCJtZW1iZXJzIiwidmVudWUiLCJhbm5vdW5jZW1lbnRzIiwib2JqZWN0aXZlcyIsInRpbWVzdGFtcHMiLCJHcm91cCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/models/table_groups.js\n");

/***/ }),

/***/ "(rsc)/./src/app/models/table_users.js":
/*!***************************************!*\
  !*** ./src/app/models/table_users.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String\n    },\n    confirmPassword: {\n        type: String\n    },\n    image: {\n        type: String\n    },\n    admin: {\n        type: Boolean,\n        default: false\n    },\n    isVerified: {\n        type: Boolean,\n        default: false\n    },\n    passwordResetToken: {\n        type: String\n    },\n    passwordResetExpires: {\n        type: Date\n    },\n    verifyToken: {\n        type: String\n    },\n    verifyTokenExpires: {\n        type: Date\n    },\n    caregiver: {\n        type: Boolean,\n        default: false\n    }\n}, {\n    timestamps: true\n});\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.User || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"User\", UserSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL21vZGVscy90YWJsZV91c2Vycy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBaUQ7QUFFakQsTUFBTUcsYUFBYSxJQUFJRCw0Q0FBTUEsQ0FDM0I7SUFDRUUsTUFBTTtRQUFFQyxNQUFNQztJQUFPO0lBQ3JCQyxPQUFPO1FBQUVGLE1BQU1DO1FBQVFFLFVBQVU7UUFBTUMsUUFBUTtJQUFLO0lBQ3BEQyxVQUFVO1FBQUNMLE1BQU1DO0lBQU07SUFDdkJLLGlCQUFpQjtRQUFDTixNQUFNQztJQUFNO0lBQzlCTSxPQUFPO1FBQUVQLE1BQU1DO0lBQU87SUFDdEJPLE9BQU87UUFBQ1IsTUFBTVM7UUFBU0MsU0FBUztJQUFLO0lBQ3JDQyxZQUFZO1FBQUNYLE1BQU1TO1FBQVNDLFNBQVM7SUFBSztJQUMxQ0Usb0JBQW9CO1FBQUNaLE1BQU1DO0lBQU07SUFDakNZLHNCQUFzQjtRQUFDYixNQUFNYztJQUFJO0lBQ2pDQyxhQUFhO1FBQUNmLE1BQU1DO0lBQU07SUFDMUJlLG9CQUFxQjtRQUFDaEIsTUFBTWM7SUFBSTtJQUNoQ0csV0FBVztRQUFDakIsTUFBTVM7UUFBU0MsU0FBUztJQUFLO0FBQzNDLEdBQ0E7SUFBRVEsWUFBWTtBQUFLO0FBR2QsTUFBTUMsT0FBT3ZCLDRDQUFNQSxFQUFFdUIsUUFBUXhCLCtDQUFLQSxDQUFDLFFBQVFHLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saW5ldC8uL3NyYy9hcHAvbW9kZWxzL3RhYmxlX3VzZXJzLmpzP2Y5YjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW9kZWwsIG1vZGVscywgU2NoZW1hIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IFNjaGVtYShcclxuICB7XHJcbiAgICBuYW1lOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gICAgZW1haWw6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlIH0sXHJcbiAgICBwYXNzd29yZDoge3R5cGU6IFN0cmluZ30sXHJcbiAgICBjb25maXJtUGFzc3dvcmQ6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgaW1hZ2U6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgICBhZG1pbjoge3R5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlfSxcclxuICAgIGlzVmVyaWZpZWQ6IHt0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZX0sXHJcbiAgICBwYXNzd29yZFJlc2V0VG9rZW46IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgcGFzc3dvcmRSZXNldEV4cGlyZXM6IHt0eXBlOiBEYXRlfSxcclxuICAgIHZlcmlmeVRva2VuOiB7dHlwZTogU3RyaW5nfSxcclxuICAgIHZlcmlmeVRva2VuRXhwaXJlczogIHt0eXBlOiBEYXRlfSxcclxuICAgIGNhcmVnaXZlcjoge3R5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlfSxcclxuICB9LFxyXG4gIHsgdGltZXN0YW1wczogdHJ1ZSB9XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgVXNlciA9IG1vZGVscz8uVXNlciB8fCBtb2RlbCgnVXNlcicsIFVzZXJTY2hlbWEpO1xyXG5cclxuIl0sIm5hbWVzIjpbIm1vZGVsIiwibW9kZWxzIiwiU2NoZW1hIiwiVXNlclNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwiZW1haWwiLCJyZXF1aXJlZCIsInVuaXF1ZSIsInBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwiaW1hZ2UiLCJhZG1pbiIsIkJvb2xlYW4iLCJkZWZhdWx0IiwiaXNWZXJpZmllZCIsInBhc3N3b3JkUmVzZXRUb2tlbiIsInBhc3N3b3JkUmVzZXRFeHBpcmVzIiwiRGF0ZSIsInZlcmlmeVRva2VuIiwidmVyaWZ5VG9rZW5FeHBpcmVzIiwiY2FyZWdpdmVyIiwidGltZXN0YW1wcyIsIlVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/models/table_users.js\n");

/***/ }),

/***/ "(rsc)/./src/app/models/table_usersInfo.js":
/*!*******************************************!*\
  !*** ./src/app/models/table_usersInfo.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserInfo: () => (/* binding */ UserInfo)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserInfoSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    DOB: {\n        type: Date\n    },\n    phone: {\n        type: String\n    },\n    country: {\n        type: String\n    },\n    gender: {\n        type: String,\n        enum: [\n            \"male\",\n            \"female\"\n        ]\n    },\n    groups: [\n        {\n            type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n            ref: \"Group\"\n        }\n    ]\n}, {\n    timestamps: true\n});\nconst UserInfo = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.UserInfo || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"UserInfo\", UserInfoSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL21vZGVscy90YWJsZV91c2Vyc0luZm8uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlEO0FBRWpELE1BQU1HLGlCQUFpQixJQUFJRCw0Q0FBTUEsQ0FDL0I7SUFDRUUsT0FBTztRQUFFQyxNQUFNQztRQUFRQyxVQUFVO1FBQU1DLFFBQVE7SUFBSztJQUNwREMsS0FBSztRQUFFSixNQUFNSztJQUFLO0lBQ2xCQyxPQUFPO1FBQUVOLE1BQU1DO0lBQU87SUFDdEJNLFNBQVM7UUFBRVAsTUFBTUM7SUFBTztJQUN4Qk8sUUFBUTtRQUFFUixNQUFNQztRQUFRUSxNQUFNO1lBQUM7WUFBUTtTQUFTO0lBQUM7SUFDakRDLFFBQVE7UUFBQztZQUFFVixNQUFNSCw0Q0FBTUEsQ0FBQ2MsS0FBSyxDQUFDQyxRQUFRO1lBQUVDLEtBQUs7UUFBUTtLQUFFO0FBQ3pELEdBQ0E7SUFBRUMsWUFBWTtBQUFLO0FBR2QsTUFBTUMsV0FBV25CLDRDQUFNQSxFQUFFbUIsWUFBWXBCLCtDQUFLQSxDQUFDLFlBQVlHLGdCQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL2xpbmV0Ly4vc3JjL2FwcC9tb2RlbHMvdGFibGVfdXNlcnNJbmZvLmpzPzBiNTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW9kZWwsIG1vZGVscywgU2NoZW1hIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBVc2VySW5mb1NjaGVtYSA9IG5ldyBTY2hlbWEoXHJcbiAge1xyXG4gICAgZW1haWw6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlIH0sXHJcbiAgICBET0I6IHsgdHlwZTogRGF0ZSB9LFxyXG4gICAgcGhvbmU6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgICBjb3VudHJ5OiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gICAgZ2VuZGVyOiB7IHR5cGU6IFN0cmluZywgZW51bTogWydtYWxlJywgJ2ZlbWFsZSddIH0sXHJcbiAgICBncm91cHM6IFt7IHR5cGU6IFNjaGVtYS5UeXBlcy5PYmplY3RJZCwgcmVmOiAnR3JvdXAnIH1dXHJcbiAgfSxcclxuICB7IHRpbWVzdGFtcHM6IHRydWUgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJJbmZvID0gbW9kZWxzPy5Vc2VySW5mbyB8fCBtb2RlbCgnVXNlckluZm8nLCBVc2VySW5mb1NjaGVtYSk7XHJcblxyXG4iXSwibmFtZXMiOlsibW9kZWwiLCJtb2RlbHMiLCJTY2hlbWEiLCJVc2VySW5mb1NjaGVtYSIsImVtYWlsIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwidW5pcXVlIiwiRE9CIiwiRGF0ZSIsInBob25lIiwiY291bnRyeSIsImdlbmRlciIsImVudW0iLCJncm91cHMiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwidGltZXN0YW1wcyIsIlVzZXJJbmZvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/models/table_usersInfo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FjoinGroup%2Froute&page=%2Fapi%2FjoinGroup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FjoinGroup%2Froute.js&appDir=C%3A%5CUsers%5CUser%5CDownloads%5Clinet%20(3)%5Clinet%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUser%5CDownloads%5Clinet%20(3)%5Clinet&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();