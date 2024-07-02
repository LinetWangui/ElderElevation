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
exports.id = "app/api/register/route";
exports.ids = ["app/api/register/route"];
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

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

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

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tty");

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fregister%2Froute&page=%2Fapi%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fregister%2Froute.js&appDir=C%3A%5CUsers%5CUser%5CDownloads%5Clinet%20(3)%5Clinet%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUser%5CDownloads%5Clinet%20(3)%5Clinet&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fregister%2Froute&page=%2Fapi%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fregister%2Froute.js&appDir=C%3A%5CUsers%5CUser%5CDownloads%5Clinet%20(3)%5Clinet%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUser%5CDownloads%5Clinet%20(3)%5Clinet&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_User_Downloads_linet_3_linet_src_app_api_register_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/register/route.js */ \"(rsc)/./src/app/api/register/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/register/route\",\n        pathname: \"/api/register\",\n        filename: \"route\",\n        bundlePath: \"app/api/register/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\User\\\\Downloads\\\\linet (3)\\\\linet\\\\src\\\\app\\\\api\\\\register\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_User_Downloads_linet_3_linet_src_app_api_register_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/register/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZyZWdpc3RlciUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcmVnaXN0ZXIlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZyZWdpc3RlciUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNVc2VyJTVDRG93bmxvYWRzJTVDbGluZXQlMjAoMyklNUNsaW5ldCU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDVXNlciU1Q0Rvd25sb2FkcyU1Q2xpbmV0JTIwKDMpJTVDbGluZXQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDK0I7QUFDNUc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saW5ldC8/ZTY5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxVc2VyXFxcXERvd25sb2Fkc1xcXFxsaW5ldCAoMylcXFxcbGluZXRcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxccmVnaXN0ZXJcXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3JlZ2lzdGVyL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcmVnaXN0ZXJcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3JlZ2lzdGVyL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcVXNlclxcXFxEb3dubG9hZHNcXFxcbGluZXQgKDMpXFxcXGxpbmV0XFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHJlZ2lzdGVyXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3JlZ2lzdGVyL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fregister%2Froute&page=%2Fapi%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fregister%2Froute.js&appDir=C%3A%5CUsers%5CUser%5CDownloads%5Clinet%20(3)%5Clinet%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUser%5CDownloads%5Clinet%20(3)%5Clinet&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/register/route.js":
/*!***************************************!*\
  !*** ./src/app/api/register/route.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_models_table_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/models/table_users */ \"(rsc)/./src/app/models/table_users.js\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sendgrid/mail */ \"(rsc)/./node_modules/@sendgrid/mail/index.js\");\n/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sendgrid_mail__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction generateNumericToken(length) {\n    let token = \"\";\n    for(let i = 0; i < length; i++){\n        token += Math.floor(Math.random() * 10).toString();\n    }\n    return token;\n}\nasync function POST(req) {\n    const body = await req.json();\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://elderelevation:elderelevation123@cluster0.dqmkuhs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0\");\n        const existingUser = await _app_models_table_users__WEBPACK_IMPORTED_MODULE_2__.User.findOne({\n            email: body.email\n        });\n        if (existingUser) {\n            return next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse.json({\n                message: \"Email is already in use\"\n            }, {\n                status: 400\n            });\n        }\n        const notHashedPassword = body.password;\n        const salt = bcrypt__WEBPACK_IMPORTED_MODULE_1___default().genSaltSync(10);\n        body.password = bcrypt__WEBPACK_IMPORTED_MODULE_1___default().hashSync(notHashedPassword, salt);\n        const verifyCode = generateNumericToken(6);\n        const verifyToken = crypto__WEBPACK_IMPORTED_MODULE_3___default().createHash(\"sha256\").update(verifyCode).digest(\"hex\");\n        const verifyTokenExpires = Date.now() + 365 * 24 * 60 * 60 * 1000;\n        const newUser = {\n            name: body.name,\n            email: body.email,\n            password: body.password,\n            verifyToken,\n            verifyTokenExpires\n        };\n        const createdUser = await _app_models_table_users__WEBPACK_IMPORTED_MODULE_2__.User.create(newUser);\n        const message = `Please use this code for verification: ${verifyCode}`;\n        const email = body.email;\n        _sendgrid_mail__WEBPACK_IMPORTED_MODULE_5___default().setApiKey(\"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\");\n        const msg = {\n            to: email,\n            from: \"elderelevation@gmail.com\",\n            subject: \"Email verification code\",\n            text: message,\n            html: `<p>${message}</p>`\n        };\n        await _sendgrid_mail__WEBPACK_IMPORTED_MODULE_5___default().send(msg);\n        return next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse.json({\n            message: \"User created successfully. Verification code sent to the email\"\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"Error during user registration:\", error);\n        if (error.code === 11000) {\n            return next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse.json({\n                message: \"Email is already in use\"\n            }, {\n                status: 400\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse.json({\n            message: \"There was an error. Try again later\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9yZWdpc3Rlci9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFnQztBQUNKO0FBQ29CO0FBQ3BCO0FBQ2U7QUFDUDtBQUVwQyxTQUFTTSxxQkFBcUJDLE1BQU07SUFDbEMsSUFBSUMsUUFBUTtJQUNaLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJRixRQUFRRSxJQUFLO1FBQy9CRCxTQUFTRSxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBSyxJQUFJQyxRQUFRO0lBQ2xEO0lBQ0EsT0FBT0w7QUFDVDtBQUVPLGVBQWVNLEtBQUtDLEdBQUc7SUFDNUIsTUFBTUMsT0FBTyxNQUFNRCxJQUFJRSxJQUFJO0lBRTNCLElBQUk7UUFDRixNQUFNakIsdURBQWdCLENBQUNtQiwySEFBZ0M7UUFFdkQsTUFBTUcsZUFBZSxNQUFNcEIseURBQUlBLENBQUNxQixPQUFPLENBQUM7WUFBRUMsT0FBT1IsS0FBS1EsS0FBSztRQUFDO1FBQzVELElBQUlGLGNBQWM7WUFDaEIsT0FBT2xCLHFEQUFZQSxDQUFDYSxJQUFJLENBQUM7Z0JBQUVRLFNBQVM7WUFBMEIsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ2pGO1FBRUEsTUFBTUMsb0JBQW9CWCxLQUFLWSxRQUFRO1FBQ3ZDLE1BQU1DLE9BQU81Qix5REFBa0IsQ0FBQztRQUNoQ2UsS0FBS1ksUUFBUSxHQUFHM0Isc0RBQWUsQ0FBQzBCLG1CQUFtQkU7UUFFbkQsTUFBTUcsYUFBYTFCLHFCQUFxQjtRQUN4QyxNQUFNMkIsY0FBYzlCLHdEQUNQLENBQUMsVUFDWGdDLE1BQU0sQ0FBQ0gsWUFDUEksTUFBTSxDQUFDO1FBRVYsTUFBTUMscUJBQXFCQyxLQUFLQyxHQUFHLEtBQUssTUFBTSxLQUFLLEtBQUssS0FBSztRQUU3RCxNQUFNQyxVQUFVO1lBQ2RDLE1BQU16QixLQUFLeUIsSUFBSTtZQUNmakIsT0FBT1IsS0FBS1EsS0FBSztZQUNqQkksVUFBVVosS0FBS1ksUUFBUTtZQUN2Qks7WUFDQUk7UUFDRjtRQUVBLE1BQU1LLGNBQWMsTUFBTXhDLHlEQUFJQSxDQUFDeUMsTUFBTSxDQUFDSDtRQUV0QyxNQUFNZixVQUFVLENBQUMsdUNBQXVDLEVBQUVPLFdBQVcsQ0FBQztRQUN0RSxNQUFNUixRQUFRUixLQUFLUSxLQUFLO1FBRXhCbkIsK0RBQWdCLENBQUNjLHVFQUE4QjtRQUUvQyxNQUFNMkIsTUFBTTtZQUNWQyxJQUFJdkI7WUFDSndCLE1BQU07WUFDTkMsU0FBUztZQUNUQyxNQUFNekI7WUFDTjBCLE1BQU0sQ0FBQyxHQUFHLEVBQUUxQixRQUFRLElBQUksQ0FBQztRQUMzQjtRQUVBLE1BQU1wQiwwREFBVyxDQUFDeUM7UUFFbEIsT0FBTzFDLHFEQUFZQSxDQUFDYSxJQUFJLENBQUM7WUFBRVEsU0FBUztRQUFpRSxHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUN4SCxFQUFFLE9BQU8yQixPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyxtQ0FBbUNBO1FBQ2pELElBQUlBLE1BQU1FLElBQUksS0FBSyxPQUFPO1lBQ3hCLE9BQU9uRCxxREFBWUEsQ0FBQ2EsSUFBSSxDQUFDO2dCQUFFUSxTQUFTO1lBQTBCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUNqRjtRQUNBLE9BQU90QixxREFBWUEsQ0FBQ2EsSUFBSSxDQUFDO1lBQUVRLFNBQVM7UUFBc0MsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDN0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2xpbmV0Ly4vc3JjL2FwcC9hcGkvcmVnaXN0ZXIvcm91dGUuanM/Yjg5NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdFwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIkAvYXBwL21vZGVscy90YWJsZV91c2Vyc1wiO1xyXG5pbXBvcnQgY3J5cHRvIGZyb20gXCJjcnlwdG9cIjtcclxuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcbmltcG9ydCBzZ01haWwgZnJvbSBcIkBzZW5kZ3JpZC9tYWlsXCI7XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZU51bWVyaWNUb2tlbihsZW5ndGgpIHtcclxuICBsZXQgdG9rZW4gPSBcIlwiO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgIHRva2VuICs9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKS50b1N0cmluZygpO1xyXG4gIH1cclxuICByZXR1cm4gdG9rZW47XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcSkge1xyXG4gIGNvbnN0IGJvZHkgPSBhd2FpdCByZXEuanNvbigpO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NT05HT1VSTCk7XHJcblxyXG4gICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWw6IGJvZHkuZW1haWwgfSk7XHJcbiAgICBpZiAoZXhpc3RpbmdVc2VyKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IFwiRW1haWwgaXMgYWxyZWFkeSBpbiB1c2VcIiB9LCB7IHN0YXR1czogNDAwIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5vdEhhc2hlZFBhc3N3b3JkID0gYm9keS5wYXNzd29yZDtcclxuICAgIGNvbnN0IHNhbHQgPSBiY3J5cHQuZ2VuU2FsdFN5bmMoMTApO1xyXG4gICAgYm9keS5wYXNzd29yZCA9IGJjcnlwdC5oYXNoU3luYyhub3RIYXNoZWRQYXNzd29yZCwgc2FsdCk7XHJcblxyXG4gICAgY29uc3QgdmVyaWZ5Q29kZSA9IGdlbmVyYXRlTnVtZXJpY1Rva2VuKDYpO1xyXG4gICAgY29uc3QgdmVyaWZ5VG9rZW4gPSBjcnlwdG9cclxuICAgICAgLmNyZWF0ZUhhc2goXCJzaGEyNTZcIilcclxuICAgICAgLnVwZGF0ZSh2ZXJpZnlDb2RlKVxyXG4gICAgICAuZGlnZXN0KFwiaGV4XCIpO1xyXG5cclxuICAgIGNvbnN0IHZlcmlmeVRva2VuRXhwaXJlcyA9IERhdGUubm93KCkgKyAzNjUgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xyXG5cclxuICAgIGNvbnN0IG5ld1VzZXIgPSB7XHJcbiAgICAgIG5hbWU6IGJvZHkubmFtZSxcclxuICAgICAgZW1haWw6IGJvZHkuZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkOiBib2R5LnBhc3N3b3JkLFxyXG4gICAgICB2ZXJpZnlUb2tlbixcclxuICAgICAgdmVyaWZ5VG9rZW5FeHBpcmVzLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjcmVhdGVkVXNlciA9IGF3YWl0IFVzZXIuY3JlYXRlKG5ld1VzZXIpO1xyXG5cclxuICAgIGNvbnN0IG1lc3NhZ2UgPSBgUGxlYXNlIHVzZSB0aGlzIGNvZGUgZm9yIHZlcmlmaWNhdGlvbjogJHt2ZXJpZnlDb2RlfWA7XHJcbiAgICBjb25zdCBlbWFpbCA9IGJvZHkuZW1haWw7XHJcblxyXG4gICAgc2dNYWlsLnNldEFwaUtleShwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TR19LRVkpO1xyXG5cclxuICAgIGNvbnN0IG1zZyA9IHtcclxuICAgICAgdG86IGVtYWlsLFxyXG4gICAgICBmcm9tOiBcImVsZGVyZWxldmF0aW9uQGdtYWlsLmNvbVwiLFxyXG4gICAgICBzdWJqZWN0OiBcIkVtYWlsIHZlcmlmaWNhdGlvbiBjb2RlXCIsXHJcbiAgICAgIHRleHQ6IG1lc3NhZ2UsXHJcbiAgICAgIGh0bWw6IGA8cD4ke21lc3NhZ2V9PC9wPmAsXHJcbiAgICB9O1xyXG5cclxuICAgIGF3YWl0IHNnTWFpbC5zZW5kKG1zZyk7XHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogXCJVc2VyIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5LiBWZXJpZmljYXRpb24gY29kZSBzZW50IHRvIHRoZSBlbWFpbFwiIH0sIHsgc3RhdHVzOiAyMDAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkdXJpbmcgdXNlciByZWdpc3RyYXRpb246XCIsIGVycm9yKTtcclxuICAgIGlmIChlcnJvci5jb2RlID09PSAxMTAwMCkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBcIkVtYWlsIGlzIGFscmVhZHkgaW4gdXNlXCIgfSwgeyBzdGF0dXM6IDQwMCB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IFwiVGhlcmUgd2FzIGFuIGVycm9yLiBUcnkgYWdhaW4gbGF0ZXJcIiB9LCB7IHN0YXR1czogNTAwIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJiY3J5cHQiLCJVc2VyIiwiY3J5cHRvIiwiTmV4dFJlc3BvbnNlIiwic2dNYWlsIiwiZ2VuZXJhdGVOdW1lcmljVG9rZW4iLCJsZW5ndGgiLCJ0b2tlbiIsImkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsIlBPU1QiLCJyZXEiLCJib2R5IiwianNvbiIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfTU9OR09VUkwiLCJleGlzdGluZ1VzZXIiLCJmaW5kT25lIiwiZW1haWwiLCJtZXNzYWdlIiwic3RhdHVzIiwibm90SGFzaGVkUGFzc3dvcmQiLCJwYXNzd29yZCIsInNhbHQiLCJnZW5TYWx0U3luYyIsImhhc2hTeW5jIiwidmVyaWZ5Q29kZSIsInZlcmlmeVRva2VuIiwiY3JlYXRlSGFzaCIsInVwZGF0ZSIsImRpZ2VzdCIsInZlcmlmeVRva2VuRXhwaXJlcyIsIkRhdGUiLCJub3ciLCJuZXdVc2VyIiwibmFtZSIsImNyZWF0ZWRVc2VyIiwiY3JlYXRlIiwic2V0QXBpS2V5IiwiTkVYVF9QVUJMSUNfU0dfS0VZIiwibXNnIiwidG8iLCJmcm9tIiwic3ViamVjdCIsInRleHQiLCJodG1sIiwic2VuZCIsImVycm9yIiwiY29uc29sZSIsImNvZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/register/route.js\n");

/***/ }),

/***/ "(rsc)/./src/app/models/table_users.js":
/*!***************************************!*\
  !*** ./src/app/models/table_users.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String\n    },\n    confirmPassword: {\n        type: String\n    },\n    image: {\n        type: String\n    },\n    admin: {\n        type: Boolean,\n        default: false\n    },\n    isVerified: {\n        type: Boolean,\n        default: false\n    },\n    passwordResetToken: {\n        type: String\n    },\n    passwordResetExpires: {\n        type: Date\n    },\n    verifyToken: {\n        type: String\n    },\n    verifyTokenExpires: {\n        type: Date\n    },\n    caregiver: {\n        type: Boolean,\n        default: false\n    }\n}, {\n    timestamps: true\n});\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.User || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"User\", UserSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL21vZGVscy90YWJsZV91c2Vycy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBaUQ7QUFFakQsTUFBTUcsYUFBYSxJQUFJRCw0Q0FBTUEsQ0FDM0I7SUFDRUUsTUFBTTtRQUFFQyxNQUFNQztJQUFPO0lBQ3JCQyxPQUFPO1FBQUVGLE1BQU1DO1FBQVFFLFVBQVU7UUFBTUMsUUFBUTtJQUFLO0lBQ3BEQyxVQUFVO1FBQUNMLE1BQU1DO0lBQU07SUFDdkJLLGlCQUFpQjtRQUFDTixNQUFNQztJQUFNO0lBQzlCTSxPQUFPO1FBQUVQLE1BQU1DO0lBQU87SUFDdEJPLE9BQU87UUFBQ1IsTUFBTVM7UUFBU0MsU0FBUztJQUFLO0lBQ3JDQyxZQUFZO1FBQUNYLE1BQU1TO1FBQVNDLFNBQVM7SUFBSztJQUMxQ0Usb0JBQW9CO1FBQUNaLE1BQU1DO0lBQU07SUFDakNZLHNCQUFzQjtRQUFDYixNQUFNYztJQUFJO0lBQ2pDQyxhQUFhO1FBQUNmLE1BQU1DO0lBQU07SUFDMUJlLG9CQUFxQjtRQUFDaEIsTUFBTWM7SUFBSTtJQUNoQ0csV0FBVztRQUFDakIsTUFBTVM7UUFBU0MsU0FBUztJQUFLO0FBQzNDLEdBQ0E7SUFBRVEsWUFBWTtBQUFLO0FBR2QsTUFBTUMsT0FBT3ZCLDRDQUFNQSxFQUFFdUIsUUFBUXhCLCtDQUFLQSxDQUFDLFFBQVFHLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saW5ldC8uL3NyYy9hcHAvbW9kZWxzL3RhYmxlX3VzZXJzLmpzP2Y5YjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW9kZWwsIG1vZGVscywgU2NoZW1hIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IFNjaGVtYShcclxuICB7XHJcbiAgICBuYW1lOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gICAgZW1haWw6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlIH0sXHJcbiAgICBwYXNzd29yZDoge3R5cGU6IFN0cmluZ30sXHJcbiAgICBjb25maXJtUGFzc3dvcmQ6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgaW1hZ2U6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgICBhZG1pbjoge3R5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlfSxcclxuICAgIGlzVmVyaWZpZWQ6IHt0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZX0sXHJcbiAgICBwYXNzd29yZFJlc2V0VG9rZW46IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgcGFzc3dvcmRSZXNldEV4cGlyZXM6IHt0eXBlOiBEYXRlfSxcclxuICAgIHZlcmlmeVRva2VuOiB7dHlwZTogU3RyaW5nfSxcclxuICAgIHZlcmlmeVRva2VuRXhwaXJlczogIHt0eXBlOiBEYXRlfSxcclxuICAgIGNhcmVnaXZlcjoge3R5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlfSxcclxuICB9LFxyXG4gIHsgdGltZXN0YW1wczogdHJ1ZSB9XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgVXNlciA9IG1vZGVscz8uVXNlciB8fCBtb2RlbCgnVXNlcicsIFVzZXJTY2hlbWEpO1xyXG5cclxuIl0sIm5hbWVzIjpbIm1vZGVsIiwibW9kZWxzIiwiU2NoZW1hIiwiVXNlclNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwiZW1haWwiLCJyZXF1aXJlZCIsInVuaXF1ZSIsInBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwiaW1hZ2UiLCJhZG1pbiIsIkJvb2xlYW4iLCJkZWZhdWx0IiwiaXNWZXJpZmllZCIsInBhc3N3b3JkUmVzZXRUb2tlbiIsInBhc3N3b3JkUmVzZXRFeHBpcmVzIiwiRGF0ZSIsInZlcmlmeVRva2VuIiwidmVyaWZ5VG9rZW5FeHBpcmVzIiwiY2FyZWdpdmVyIiwidGltZXN0YW1wcyIsIlVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/models/table_users.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@sendgrid","vendor-chunks/asynckit","vendor-chunks/debug","vendor-chunks/mime-db","vendor-chunks/form-data","vendor-chunks/follow-redirects","vendor-chunks/axios","vendor-chunks/supports-color","vendor-chunks/proxy-from-env","vendor-chunks/ms","vendor-chunks/mime-types","vendor-chunks/has-flag","vendor-chunks/delayed-stream","vendor-chunks/deepmerge","vendor-chunks/combined-stream"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fregister%2Froute&page=%2Fapi%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fregister%2Froute.js&appDir=C%3A%5CUsers%5CUser%5CDownloads%5Clinet%20(3)%5Clinet%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUser%5CDownloads%5Clinet%20(3)%5Clinet&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();