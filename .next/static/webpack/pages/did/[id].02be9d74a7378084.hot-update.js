"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/did/[id]",{

/***/ "./pages/did/[id].js":
/*!***************************!*\
  !*** ./pages/did/[id].js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Content; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_qr_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-qr-code */ \"./node_modules/react-qr-code/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Content() {\n    _s();\n    // router to get the did value\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var did = router.query.id;\n    // the state\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(did || \"\"), qr = ref[0], setQr = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-1/2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Did: \",\n                    did\n                ]\n            }, void 0, true, {\n                fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                lineNumber: 15,\n                columnNumber: 17\n            }, this),\n            did != \"\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_qr_code__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                value: qr,\n                className: \"\"\n            }, void 0, false, {\n                fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                lineNumber: 17,\n                columnNumber: 21\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n        lineNumber: 14,\n        columnNumber: 12\n    }, this);\n};\n_s(Content, \"tiRrRW23c5lAVk8Q+0aaBsfLKks=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Content;\nvar _c;\n$RefreshReg$(_c, \"Content\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kaWQvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUF3QztBQUNMO0FBQ0Y7QUFFbEIsU0FBU0csT0FBTyxHQUFHOztJQUM5Qiw4QkFBOEI7SUFDOUIsSUFBTUMsTUFBTSxHQUFHSixzREFBUyxFQUFFO0lBQzFCLElBQU1LLEdBQUcsR0FBR0QsTUFBTSxDQUFDRSxLQUFLLENBQUNDLEVBQUU7SUFFM0IsWUFBWTtJQUNaLElBQXFCTCxHQUFtQixHQUFuQkEsK0NBQVEsQ0FBQ0csR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFoQ0csRUFBRSxHQUFXTixHQUFtQixHQUE5QixFQUFFTyxLQUFLLEdBQUlQLEdBQW1CLEdBQXZCO0lBR2pCLHFCQUFPLDhEQUFDUSxLQUFHO1FBQUNDLFNBQVMsRUFBQyxtRUFBbUU7OzBCQUM3RSw4REFBQ0QsS0FBRzs7b0JBQUMsT0FBSztvQkFBQ0wsR0FBRzs7Ozs7O29CQUFPO1lBQ3BCQSxHQUFHLElBQUksRUFBRSxrQkFDTiw4REFBQ0oscURBQU07Z0JBQUNXLEtBQUssRUFBRUosRUFBRTtnQkFBRUcsU0FBUyxFQUFDLEVBQUU7Ozs7O29CQUFHOzs7Ozs7WUFFcEM7Q0FDakI7R0FmdUJSLE9BQU87O1FBRVpILGtEQUFTOzs7QUFGSkcsS0FBQUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kaWQvW2lkXS5qcz9lOGQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFFSQ29kZSBmcm9tIFwicmVhY3QtcXItY29kZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGVudCgpIHtcbiAgICAvLyByb3V0ZXIgdG8gZ2V0IHRoZSBkaWQgdmFsdWVcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IGRpZCA9IHJvdXRlci5xdWVyeS5pZFxuXG4gICAgLy8gdGhlIHN0YXRlXG4gICAgY29uc3QgIFtxciwgc2V0UXJdID0gdXNlU3RhdGUoZGlkIHx8IFwiXCIpXG4gICAgXG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20taW5kaWdvLTUwMCB2aWEtcHVycGxlLTUwMCB0by1waW5rLTUwMCB3LTEvMlwiPlxuICAgICAgICAgICAgICAgIDxkaXY+RGlkOiB7ZGlkfTwvZGl2PlxuICAgICAgICAgICAgICAgIHtkaWQgIT0gXCJcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxRUkNvZGUgdmFsdWU9e3FyfSBjbGFzc05hbWU9XCJcIiAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUVJDb2RlIiwidXNlU3RhdGUiLCJDb250ZW50Iiwicm91dGVyIiwiZGlkIiwicXVlcnkiLCJpZCIsInFyIiwic2V0UXIiLCJkaXYiLCJjbGFzc05hbWUiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/did/[id].js\n"));

/***/ })

});