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
exports.id = "app/api/profile/route";
exports.ids = ["app/api/profile/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprofile%2Froute&page=%2Fapi%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Froute.js&appDir=C%3A%5CUsers%5CUser%5CDownloads%5Clinet%20(3)%5Clinet%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUser%5CDownloads%5Clinet%20(3)%5Clinet&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprofile%2Froute&page=%2Fapi%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Froute.js&appDir=C%3A%5CUsers%5CUser%5CDownloads%5Clinet%20(3)%5Clinet%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUser%5CDownloads%5Clinet%20(3)%5Clinet&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_User_Downloads_linet_3_linet_src_app_api_profile_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/profile/route.js */ \"(rsc)/./src/app/api/profile/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/profile/route\",\n        pathname: \"/api/profile\",\n        filename: \"route\",\n        bundlePath: \"app/api/profile/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\User\\\\Downloads\\\\linet (3)\\\\linet\\\\src\\\\app\\\\api\\\\profile\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_User_Downloads_linet_3_linet_src_app_api_profile_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/profile/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZwcm9maWxlJTJGcm91dGUmcGFnZT0lMkZhcGklMkZwcm9maWxlJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcHJvZmlsZSUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNVc2VyJTVDRG93bmxvYWRzJTVDbGluZXQlMjAoMyklNUNsaW5ldCU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDVXNlciU1Q0Rvd25sb2FkcyU1Q2xpbmV0JTIwKDMpJTVDbGluZXQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDOEI7QUFDM0c7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saW5ldC8/MWEzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxVc2VyXFxcXERvd25sb2Fkc1xcXFxsaW5ldCAoMylcXFxcbGluZXRcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxccHJvZmlsZVxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcHJvZmlsZS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3Byb2ZpbGVcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3Byb2ZpbGUvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxVc2VyXFxcXERvd25sb2Fkc1xcXFxsaW5ldCAoMylcXFxcbGluZXRcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxccHJvZmlsZVxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9wcm9maWxlL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprofile%2Froute&page=%2Fapi%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Froute.js&appDir=C%3A%5CUsers%5CUser%5CDownloads%5Clinet%20(3)%5Clinet%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUser%5CDownloads%5Clinet%20(3)%5Clinet&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.js":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_models_table_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/models/table_users */ \"(rsc)/./src/app/models/table_users.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst authOptions = {\n    secret: \"jfkndosvjiodfsdj\",\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"Credentials\",\n            id: \"credentials\",\n            credentials: {\n                username: {\n                    label: \"Email\",\n                    type: \"email\",\n                    placeholder: \"johndoe@example.com\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                const email = credentials?.email;\n                const password = credentials?.password;\n                if (!email || !password) {\n                    throw new Error(\"Email and password are required\");\n                }\n                await mongoose__WEBPACK_IMPORTED_MODULE_2__.connect(\"mongodb+srv://elderelevation:elderelevation123@cluster0.dqmkuhs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0\");\n                const user = await _app_models_table_users__WEBPACK_IMPORTED_MODULE_3__.User.findOne({\n                    email\n                });\n                if (!user) {\n                    throw new Error(\"No user found with this email\");\n                }\n                const passwordOk = user && bcrypt__WEBPACK_IMPORTED_MODULE_4___default().compareSync(password, user.password);\n                if (!passwordOk) {\n                    throw new Error(\"Invalid email or password\");\n                }\n                return user;\n            }\n        })\n    ],\n    pages: {\n        error: \"/login\"\n    }\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDaUM7QUFDN0I7QUFDVztBQUNwQjtBQUVyQixNQUFNSyxjQUFjO0lBQ3pCQyxRQUFRQyxrQkFBOEI7SUFDdENHLFdBQVc7UUFDVFQsMkVBQW1CQSxDQUFDO1lBQ2xCVSxNQUFNO1lBQ05DLElBQUk7WUFDSkMsYUFBYTtnQkFDWEMsVUFBVTtvQkFBRUMsT0FBTztvQkFBU0MsTUFBTTtvQkFBU0MsYUFBYTtnQkFBc0I7Z0JBQzlFQyxVQUFVO29CQUFFSCxPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ2xEO1lBQ0EsTUFBTUcsV0FBVU4sV0FBVyxFQUFFTyxHQUFHO2dCQUM5QixNQUFNQyxRQUFRUixhQUFhUTtnQkFDM0IsTUFBTUgsV0FBV0wsYUFBYUs7Z0JBRTlCLElBQUksQ0FBQ0csU0FBUyxDQUFDSCxVQUFVO29CQUN2QixNQUFNLElBQUlJLE1BQU07Z0JBQ2xCO2dCQUVBLE1BQU1wQiw2Q0FBZ0IsQ0FBQ0ssMkhBQWdDO2dCQUN2RCxNQUFNa0IsT0FBTyxNQUFNdEIseURBQUlBLENBQUN1QixPQUFPLENBQUM7b0JBQUVMO2dCQUFNO2dCQUN4QyxJQUFJLENBQUNJLE1BQU07b0JBQ1QsTUFBTSxJQUFJSCxNQUFNO2dCQUNsQjtnQkFFQSxNQUFNSyxhQUFhRixRQUFRckIseURBQWtCLENBQUNjLFVBQVVPLEtBQUtQLFFBQVE7Z0JBQ3JFLElBQUksQ0FBQ1MsWUFBWTtvQkFDZixNQUFNLElBQUlMLE1BQU07Z0JBQ2xCO2dCQUVBLE9BQU9HO1lBQ1Q7UUFDRjtLQUNEO0lBQ0RJLE9BQU87UUFDTEMsT0FBTztJQUNUO0FBQ0YsRUFBRTtBQUVGLE1BQU1DLFVBQVUvQixnREFBUUEsQ0FBQ0s7QUFFa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saW5ldC8uL3NyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcz8yMzJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XHJcbmltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIkAvYXBwL21vZGVscy90YWJsZV91c2Vyc1wiO1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcclxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NFQ1JFVCxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgICBuYW1lOiBcIkNyZWRlbnRpYWxzXCIsXHJcbiAgICAgIGlkOiAnY3JlZGVudGlhbHMnLFxyXG4gICAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICAgIHVzZXJuYW1lOiB7IGxhYmVsOiBcIkVtYWlsXCIsIHR5cGU6IFwiZW1haWxcIiwgcGxhY2Vob2xkZXI6IFwiam9obmRvZUBleGFtcGxlLmNvbVwiIH0sXHJcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscywgcmVxKSB7XHJcbiAgICAgICAgY29uc3QgZW1haWwgPSBjcmVkZW50aWFscz8uZW1haWw7XHJcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSBjcmVkZW50aWFscz8ucGFzc3dvcmQ7XHJcblxyXG4gICAgICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFbWFpbCBhbmQgcGFzc3dvcmQgYXJlIHJlcXVpcmVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NT05HT1VSTCk7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsIH0pO1xyXG4gICAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gdXNlciBmb3VuZCB3aXRoIHRoaXMgZW1haWxcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwYXNzd29yZE9rID0gdXNlciAmJiBiY3J5cHQuY29tcGFyZVN5bmMocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xyXG4gICAgICAgIGlmICghcGFzc3dvcmRPaykge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBwYWdlczoge1xyXG4gICAgZXJyb3I6IFwiL2xvZ2luXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XHJcblxyXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH07XHJcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJtb25nb29zZSIsIlVzZXIiLCJiY3J5cHQiLCJhdXRoT3B0aW9ucyIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TRUNSRVQiLCJwcm92aWRlcnMiLCJuYW1lIiwiaWQiLCJjcmVkZW50aWFscyIsInVzZXJuYW1lIiwibGFiZWwiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInJlcSIsImVtYWlsIiwiRXJyb3IiLCJjb25uZWN0IiwiTkVYVF9QVUJMSUNfTU9OR09VUkwiLCJ1c2VyIiwiZmluZE9uZSIsInBhc3N3b3JkT2siLCJjb21wYXJlU3luYyIsInBhZ2VzIiwiZXJyb3IiLCJoYW5kbGVyIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./src/app/api/profile/route.js":
/*!**************************************!*\
  !*** ./src/app/api/profile/route.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var _app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/api/auth/[...nextauth]/route */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.js\");\n/* harmony import */ var _app_models_table_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/models/table_users */ \"(rsc)/./src/app/models/table_users.js\");\n/* harmony import */ var _app_models_table_usersInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/models/table_usersInfo */ \"(rsc)/./src/app/models/table_usersInfo.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nasync function PUT(req) {\n    mongoose__WEBPACK_IMPORTED_MODULE_3___default().connect(\"mongodb+srv://elderelevation:elderelevation123@cluster0.dqmkuhs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0\");\n    const data = await req.json();\n    const { _id, name, image, ...otherUserInfo } = data;\n    let filter = {};\n    if (_id) {\n        filter = {\n            _id\n        };\n    } else {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_4__.getServerSession)(_app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_0__.authOptions);\n        const email = session.user.email;\n        filter = {\n            email\n        };\n    }\n    const user = await _app_models_table_users__WEBPACK_IMPORTED_MODULE_1__.User.findOne(filter);\n    await _app_models_table_users__WEBPACK_IMPORTED_MODULE_1__.User.updateOne(filter, {\n        name,\n        image\n    });\n    await _app_models_table_usersInfo__WEBPACK_IMPORTED_MODULE_2__.UserInfo.findOneAndUpdate({\n        email: user.email\n    }, otherUserInfo, {\n        upsert: true\n    });\n    return Response.json(true);\n}\nasync function GET(req) {\n    mongoose__WEBPACK_IMPORTED_MODULE_3___default().connect(\"mongodb+srv://elderelevation:elderelevation123@cluster0.dqmkuhs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0\");\n    const url = new URL(req.url);\n    const _id = url.searchParams.get(\"_id\");\n    let filterUser = {};\n    if (_id) {\n        filterUser = {\n            _id\n        };\n    } else {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_4__.getServerSession)(_app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_0__.authOptions);\n        const email = session?.user?.email;\n        if (!email) {\n            return Response.json({});\n        }\n        filterUser = {\n            email\n        };\n    }\n    const user = await _app_models_table_users__WEBPACK_IMPORTED_MODULE_1__.User.findOne(filterUser).lean();\n    const userInfo = await _app_models_table_usersInfo__WEBPACK_IMPORTED_MODULE_2__.UserInfo.findOne({\n        email: user.email\n    }).lean();\n    return Response.json({\n        ...user,\n        ...userInfo\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9wcm9maWxlL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUErRDtBQUNmO0FBQ1E7QUFDeEI7QUFDVztBQUVwQyxlQUFlSyxJQUFJQyxHQUFHO0lBQzNCSCx1REFBZ0IsQ0FBQ0ssMkhBQWdDO0lBQ2pELE1BQU1HLE9BQU8sTUFBTUwsSUFBSU0sSUFBSTtJQUMzQixNQUFNLEVBQUNDLEdBQUcsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0MsZUFBYyxHQUFHTDtJQUU3QyxJQUFJTSxTQUFTLENBQUM7SUFDZCxJQUFJSixLQUFLO1FBQ1BJLFNBQVM7WUFBQ0o7UUFBRztJQUNmLE9BQU87UUFDTCxNQUFNSyxVQUFVLE1BQU1kLDJEQUFnQkEsQ0FBQ0oscUVBQVdBO1FBQ2xELE1BQU1tQixRQUFRRCxRQUFRRSxJQUFJLENBQUNELEtBQUs7UUFDaENGLFNBQVM7WUFBQ0U7UUFBSztJQUNqQjtJQUVBLE1BQU1DLE9BQU8sTUFBTW5CLHlEQUFJQSxDQUFDb0IsT0FBTyxDQUFDSjtJQUNoQyxNQUFNaEIseURBQUlBLENBQUNxQixTQUFTLENBQUNMLFFBQVE7UUFBQ0g7UUFBTUM7SUFBSztJQUN6QyxNQUFNYixpRUFBUUEsQ0FBQ3FCLGdCQUFnQixDQUFDO1FBQUNKLE9BQU1DLEtBQUtELEtBQUs7SUFBQSxHQUFHSCxlQUFlO1FBQUNRLFFBQU87SUFBSTtJQUUvRSxPQUFPQyxTQUFTYixJQUFJLENBQUM7QUFDdkI7QUFFTyxlQUFlYyxJQUFJcEIsR0FBRztJQUMzQkgsdURBQWdCLENBQUNLLDJIQUFnQztJQUVqRCxNQUFNbUIsTUFBTSxJQUFJQyxJQUFJdEIsSUFBSXFCLEdBQUc7SUFDM0IsTUFBTWQsTUFBTWMsSUFBSUUsWUFBWSxDQUFDQyxHQUFHLENBQUM7SUFFakMsSUFBSUMsYUFBYSxDQUFDO0lBQ2xCLElBQUlsQixLQUFLO1FBQ1BrQixhQUFhO1lBQUNsQjtRQUFHO0lBQ25CLE9BQU87UUFDTCxNQUFNSyxVQUFVLE1BQU1kLDJEQUFnQkEsQ0FBQ0oscUVBQVdBO1FBQ2xELE1BQU1tQixRQUFRRCxTQUFTRSxNQUFNRDtRQUM3QixJQUFJLENBQUNBLE9BQU87WUFDVixPQUFPTSxTQUFTYixJQUFJLENBQUMsQ0FBQztRQUN4QjtRQUNBbUIsYUFBYTtZQUFDWjtRQUFLO0lBQ3JCO0lBRUEsTUFBTUMsT0FBTyxNQUFNbkIseURBQUlBLENBQUNvQixPQUFPLENBQUNVLFlBQVlDLElBQUk7SUFDaEQsTUFBTUMsV0FBVyxNQUFNL0IsaUVBQVFBLENBQUNtQixPQUFPLENBQUM7UUFBQ0YsT0FBTUMsS0FBS0QsS0FBSztJQUFBLEdBQUdhLElBQUk7SUFFaEUsT0FBT1AsU0FBU2IsSUFBSSxDQUFDO1FBQUMsR0FBR1EsSUFBSTtRQUFFLEdBQUdhLFFBQVE7SUFBQTtBQUU1QyIsInNvdXJjZXMiOlsid2VicGFjazovL2xpbmV0Ly4vc3JjL2FwcC9hcGkvcHJvZmlsZS9yb3V0ZS5qcz8xMzY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXV0aE9wdGlvbnN9IGZyb20gXCJAL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiQC9hcHAvbW9kZWxzL3RhYmxlX3VzZXJzXCI7XHJcbmltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSBcIkAvYXBwL21vZGVscy90YWJsZV91c2Vyc0luZm9cIjtcclxuaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5pbXBvcnQge2dldFNlcnZlclNlc3Npb259IGZyb20gXCJuZXh0LWF1dGhcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQVVQocmVxKSB7XHJcbiAgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NT05HT1VSTCk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcbiAgY29uc3Qge19pZCwgbmFtZSwgaW1hZ2UsIC4uLm90aGVyVXNlckluZm99ID0gZGF0YTtcclxuXHJcbiAgbGV0IGZpbHRlciA9IHt9O1xyXG4gIGlmIChfaWQpIHtcclxuICAgIGZpbHRlciA9IHtfaWR9O1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XHJcbiAgICBjb25zdCBlbWFpbCA9IHNlc3Npb24udXNlci5lbWFpbDtcclxuICAgIGZpbHRlciA9IHtlbWFpbH07XHJcbiAgfVxyXG5cclxuICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKGZpbHRlcik7XHJcbiAgYXdhaXQgVXNlci51cGRhdGVPbmUoZmlsdGVyLCB7bmFtZSwgaW1hZ2V9KTtcclxuICBhd2FpdCBVc2VySW5mby5maW5kT25lQW5kVXBkYXRlKHtlbWFpbDp1c2VyLmVtYWlsfSwgb3RoZXJVc2VySW5mbywge3Vwc2VydDp0cnVlfSk7XHJcblxyXG4gIHJldHVybiBSZXNwb25zZS5qc29uKHRydWUpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcSkge1xyXG4gIG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTU9OR09VUkwpO1xyXG5cclxuICBjb25zdCB1cmwgPSBuZXcgVVJMKHJlcS51cmwpO1xyXG4gIGNvbnN0IF9pZCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KCdfaWQnKTtcclxuXHJcbiAgbGV0IGZpbHRlclVzZXIgPSB7fTtcclxuICBpZiAoX2lkKSB7XHJcbiAgICBmaWx0ZXJVc2VyID0ge19pZH07XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcclxuICAgIGNvbnN0IGVtYWlsID0gc2Vzc2lvbj8udXNlcj8uZW1haWw7XHJcbiAgICBpZiAoIWVtYWlsKSB7XHJcbiAgICAgIHJldHVybiBSZXNwb25zZS5qc29uKHt9KTtcclxuICAgIH1cclxuICAgIGZpbHRlclVzZXIgPSB7ZW1haWx9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZShmaWx0ZXJVc2VyKS5sZWFuKCk7XHJcbiAgY29uc3QgdXNlckluZm8gPSBhd2FpdCBVc2VySW5mby5maW5kT25lKHtlbWFpbDp1c2VyLmVtYWlsfSkubGVhbigpO1xyXG5cclxuICByZXR1cm4gUmVzcG9uc2UuanNvbih7Li4udXNlciwgLi4udXNlckluZm99KTtcclxuXHJcbn0iXSwibmFtZXMiOlsiYXV0aE9wdGlvbnMiLCJVc2VyIiwiVXNlckluZm8iLCJtb25nb29zZSIsImdldFNlcnZlclNlc3Npb24iLCJQVVQiLCJyZXEiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX01PTkdPVVJMIiwiZGF0YSIsImpzb24iLCJfaWQiLCJuYW1lIiwiaW1hZ2UiLCJvdGhlclVzZXJJbmZvIiwiZmlsdGVyIiwic2Vzc2lvbiIsImVtYWlsIiwidXNlciIsImZpbmRPbmUiLCJ1cGRhdGVPbmUiLCJmaW5kT25lQW5kVXBkYXRlIiwidXBzZXJ0IiwiUmVzcG9uc2UiLCJHRVQiLCJ1cmwiLCJVUkwiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJmaWx0ZXJVc2VyIiwibGVhbiIsInVzZXJJbmZvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/profile/route.js\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprofile%2Froute&page=%2Fapi%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Froute.js&appDir=C%3A%5CUsers%5CUser%5CDownloads%5Clinet%20(3)%5Clinet%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUser%5CDownloads%5Clinet%20(3)%5Clinet&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();