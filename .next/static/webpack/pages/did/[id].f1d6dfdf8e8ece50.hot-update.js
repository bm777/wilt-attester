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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Content; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_qr_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-qr-code */ \"./node_modules/react-qr-code/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Content() {\n    _s();\n    // router to get the did value\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var did = router.query.id;\n    // the state\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(did || \"\"), qr = ref[0], setQr = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#1E293B] w-3/5 h-auto rounded-xl mx-auto my-20 drop-shadow-xl border border-slate-700\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-[#C2E4F0] text-5xl mt-6\",\n                        children: \"Wilt Authority\"\n                    }, void 0, false, {\n                        fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                        lineNumber: 18,\n                        columnNumber: 58\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                    lineNumber: 18,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-slate-500 text-xl font-light mt-10\",\n                        children: \"Check-in verication system based on the Kilt protocol.\"\n                    }, void 0, false, {\n                        fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                        lineNumber: 19,\n                        columnNumber: 58\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                    lineNumber: 19,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center gap-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-slate-500 text-xl font-light \",\n                                    children: \"Attester\"\n                                }, void 0, false, {\n                                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                                    lineNumber: 22,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"radio\",\n                                    className: \" text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2\",\n                                    defaultChecked: true\n                                }, void 0, false, {\n                                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                                    lineNumber: 23,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                            lineNumber: 21,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-slate-500 text-xl font-light \",\n                                    children: \"Attester\"\n                                }, void 0, false, {\n                                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                                    lineNumber: 27,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"radio\",\n                                    className: \" text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2\"\n                                }, void 0, false, {\n                                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                                    lineNumber: 28,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                            lineNumber: 26,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                    lineNumber: 20,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center mt-36\",\n                    children: did != \"\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_qr_code__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        value: qr,\n                        className: \"\"\n                    }, void 0, false, {\n                        fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                        lineNumber: 35,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                    lineNumber: 33,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-teal-500 text-xl font-light mt-12\",\n                        children: [\n                            \"Scan the QR code to \",\n                            \" your \",\n                            \".\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                        lineNumber: 38,\n                        columnNumber: 58\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                    lineNumber: 38,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-[100px]\"\n                }, void 0, false, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                    lineNumber: 39,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n            lineNumber: 17,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n        lineNumber: 14,\n        columnNumber: 12\n    }, this);\n};\n_s(Content, \"tiRrRW23c5lAVk8Q+0aaBsfLKks=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Content;\nvar _c;\n$RefreshReg$(_c, \"Content\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kaWQvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUF3QztBQUNMO0FBQ0Y7QUFFbEIsU0FBU0csT0FBTyxHQUFHOztJQUM5Qiw4QkFBOEI7SUFDOUIsSUFBTUMsTUFBTSxHQUFHSixzREFBUyxFQUFFO0lBQzFCLElBQU1LLEdBQUcsR0FBR0QsTUFBTSxDQUFDRSxLQUFLLENBQUNDLEVBQUU7SUFFM0IsWUFBWTtJQUNaLElBQXFCTCxHQUFtQixHQUFuQkEsK0NBQVEsQ0FBQ0csR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFoQ0csRUFBRSxHQUFXTixHQUFtQixHQUE5QixFQUFFTyxLQUFLLEdBQUlQLEdBQW1CLEdBQXZCO0lBR2pCLHFCQUFPLDhEQUFDUSxLQUFHO1FBQUNDLFNBQVMsRUFBQywyRkFFYztrQkFDeEIsNEVBQUNELEtBQUc7WUFBQ0MsU0FBUyxFQUFDLEVBQUU7OzhCQUNiLDhEQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMscUJBQXFCOzhCQUFDLDRFQUFDQyxHQUFDO3dCQUFDRCxTQUFTLEVBQUMsOEJBQThCO2tDQUFDLGdCQUFjOzs7Ozs0QkFBSTs7Ozs7d0JBQU07OEJBQ3pHLDhEQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMscUJBQXFCOzhCQUFDLDRFQUFDQyxHQUFDO3dCQUFDRCxTQUFTLEVBQUMseUNBQXlDO2tDQUFDLHdEQUFzRDs7Ozs7NEJBQUk7Ozs7O3dCQUFNOzhCQUM1Siw4REFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLDJCQUEyQjs7c0NBQ3RDLDhEQUFDRCxLQUFHOzRCQUFDQyxTQUFTLEVBQUMscUJBQXFCOzs4Q0FDaEMsOERBQUNDLEdBQUM7b0NBQUNELFNBQVMsRUFBQyxvQ0FBb0M7OENBQUMsVUFBUTs7Ozs7d0NBQUk7OENBQzlELDhEQUFDRSxPQUFLO29DQUFDQyxJQUFJLEVBQUUsT0FBTztvQ0FBRUgsU0FBUyxFQUFDLDZFQUNhO29DQUFDSSxjQUFjLEVBQUUsSUFBSTs7Ozs7d0NBQUc7Ozs7OztnQ0FDbkU7c0NBQ04sOERBQUNMLEtBQUc7NEJBQUNDLFNBQVMsRUFBQyxxQkFBcUI7OzhDQUNoQyw4REFBQ0MsR0FBQztvQ0FBQ0QsU0FBUyxFQUFDLG9DQUFvQzs4Q0FBQyxVQUFROzs7Ozt3Q0FBSTs4Q0FDOUQsOERBQUNFLE9BQUs7b0NBQUNDLElBQUksRUFBRSxPQUFPO29DQUFFSCxTQUFTLEVBQUMsNkVBQ2E7Ozs7O3dDQUFHOzs7Ozs7Z0NBQzlDOzs7Ozs7d0JBRUo7OEJBQ04sOERBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQywyQkFBMkI7OEJBQ3pDTixHQUFHLElBQUksRUFBRSxrQkFDTiw4REFBQ0oscURBQU07d0JBQUNlLEtBQUssRUFBRVIsRUFBRTt3QkFBRUcsU0FBUyxFQUFDLEVBQUU7Ozs7OzRCQUFHOzs7Ozt3QkFFaEM7OEJBQ04sOERBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxxQkFBcUI7OEJBQUMsNEVBQUNDLEdBQUM7d0JBQUNELFNBQVMsRUFBQyx3Q0FBd0M7OzRCQUFDLHNCQUFvQjs0QkFBRSxRQUFNOzRCQUFFLEdBQUM7Ozs7Ozs0QkFBSTs7Ozs7d0JBQU07OEJBQ3BJLDhEQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsV0FBVzs7Ozs7d0JBQU87Ozs7OztnQkFDL0I7Ozs7O1lBQ0o7Q0FDakI7R0FyQ3VCUixPQUFPOztRQUVaSCxrREFBUzs7O0FBRkpHLEtBQUFBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGlkL1tpZF0uanM/ZThkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBRUkNvZGUgZnJvbSBcInJlYWN0LXFyLWNvZGVcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRlbnQoKSB7XG4gICAgLy8gcm91dGVyIHRvIGdldCB0aGUgZGlkIHZhbHVlXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCBkaWQgPSByb3V0ZXIucXVlcnkuaWRcblxuICAgIC8vIHRoZSBzdGF0ZVxuICAgIGNvbnN0ICBbcXIsIHNldFFyXSA9IHVzZVN0YXRlKGRpZCB8fCBcIlwiKVxuICAgIFxuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiYmctWyMxRTI5M0JdIHctMy81IGgtYXV0b1xuICAgICAgICAgICAgICAgIHJvdW5kZWQteGwgbXgtYXV0byBteS0yMCBkcm9wLXNoYWRvdy14bCBcbiAgICAgICAgICAgICAgICBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPjxwIGNsYXNzTmFtZT1cInRleHQtWyNDMkU0RjBdIHRleHQtNXhsIG10LTZcIj5XaWx0IEF1dGhvcml0eTwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+PHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS01MDAgdGV4dC14bCBmb250LWxpZ2h0IG10LTEwXCI+Q2hlY2staW4gdmVyaWNhdGlvbiBzeXN0ZW0gYmFzZWQgb24gdGhlIEtpbHQgcHJvdG9jb2wuPC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgZ2FwLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNTAwIHRleHQteGwgZm9udC1saWdodCBcIj5BdHRlc3RlcjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT17XCJyYWRpb1wifSBjbGFzc05hbWU9XCIgdGV4dC1ibHVlLTYwMCBiZy1ncmF5LTEwMCBib3JkZXItZ3JheS0zMDAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpyaW5nLTJcIiBkZWZhdWx0Q2hlY2tlZD17dHJ1ZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTUwMCB0ZXh0LXhsIGZvbnQtbGlnaHQgXCI+QXR0ZXN0ZXI8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9e1wicmFkaW9cIn0gY2xhc3NOYW1lPVwiIHRleHQtYmx1ZS02MDAgYmctZ3JheS0xMDAgYm9yZGVyLWdyYXktMzAwIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6cmluZy0yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0zNlwiPlxuICAgICAgICAgICAgICAgICAgICB7ZGlkICE9IFwiXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFFSQ29kZSB2YWx1ZT17cXJ9IGNsYXNzTmFtZT1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj48cCBjbGFzc05hbWU9XCJ0ZXh0LXRlYWwtNTAwIHRleHQteGwgZm9udC1saWdodCBtdC0xMlwiPlNjYW4gdGhlIFFSIGNvZGUgdG8ge30geW91ciB7fS48L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bMTAwcHhdXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUVJDb2RlIiwidXNlU3RhdGUiLCJDb250ZW50Iiwicm91dGVyIiwiZGlkIiwicXVlcnkiLCJpZCIsInFyIiwic2V0UXIiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwiaW5wdXQiLCJ0eXBlIiwiZGVmYXVsdENoZWNrZWQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/did/[id].js\n"));

/***/ })

});