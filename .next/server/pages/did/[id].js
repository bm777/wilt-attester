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
exports.id = "pages/did/[id]";
exports.ids = ["pages/did/[id]"];
exports.modules = {

/***/ "./pages/did/[id].js":
/*!***************************!*\
  !*** ./pages/did/[id].js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Content)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_qr_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-qr-code */ \"react-qr-code\");\n/* harmony import */ var react_qr_code__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_qr_code__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Content() {\n    // router to get the did value\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const did = router.query.id;\n    // the state\n    const { 0: qr , 1: setQr  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(did || \"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#1E293B] w-3/5 h-auto rounded-xl mx-auto my-20 drop-shadow-xl border border-slate-700\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-[#C2E4F0] text-5xl mt-6\",\n                        children: \"Wilt Authority\"\n                    }, void 0, false, {\n                        fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                        lineNumber: 18,\n                        columnNumber: 58\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                    lineNumber: 18,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-slate-500 text-xl font-light mt-10\",\n                        children: \"Check-in verication system based on the Kilt protocol.\"\n                    }, void 0, false, {\n                        fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                        lineNumber: 19,\n                        columnNumber: 58\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                    lineNumber: 19,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center gap-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-slate-500 text-xl font-light \",\n                                    children: \"Attester\"\n                                }, void 0, false, {\n                                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                                    lineNumber: 22,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"radio\"\n                                }, void 0, false, {\n                                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                                    lineNumber: 23,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-slate-500 text-xl font-light \",\n                                    children: \"Attester\"\n                                }, void 0, false, {\n                                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                                    lineNumber: 25,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"radio\"\n                                }, void 0, false, {\n                                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                                    lineNumber: 26,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                            lineNumber: 21,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center\"\n                        }, void 0, false, {\n                            fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                            lineNumber: 28,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                    lineNumber: 20,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center mt-36\",\n                    children: did != \"\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_qr_code__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        value: qr,\n                        className: \"\"\n                    }, void 0, false, {\n                        fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                        lineNumber: 35,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                    lineNumber: 33,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-teal-500 text-xl font-light mt-12\",\n                        children: [\n                            \"Scan the QR code to \",\n                            \" your \",\n                            \".\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                        lineNumber: 38,\n                        columnNumber: 58\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                    lineNumber: 38,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-[100px]\"\n                }, void 0, false, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                    lineNumber: 39,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n            lineNumber: 17,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n        lineNumber: 14,\n        columnNumber: 12\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kaWQvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUF3QztBQUNMO0FBQ0Y7QUFFbEIsU0FBU0csT0FBTyxHQUFHO0lBQzlCLDhCQUE4QjtJQUM5QixNQUFNQyxNQUFNLEdBQUdKLHNEQUFTLEVBQUU7SUFDMUIsTUFBTUssR0FBRyxHQUFHRCxNQUFNLENBQUNFLEtBQUssQ0FBQ0MsRUFBRTtJQUUzQixZQUFZO0lBQ1osTUFBTyxLQUFDQyxFQUFFLE1BQUVDLEtBQUssTUFBSVAsK0NBQVEsQ0FBQ0csR0FBRyxJQUFJLEVBQUUsQ0FBQztJQUd4QyxxQkFBTyw4REFBQ0ssS0FBRztRQUFDQyxTQUFTLEVBQUMsMkZBRWM7a0JBQ3hCLDRFQUFDRCxLQUFHO1lBQUNDLFNBQVMsRUFBQyxFQUFFOzs4QkFDYiw4REFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLHFCQUFxQjs4QkFBQyw0RUFBQ0MsR0FBQzt3QkFBQ0QsU0FBUyxFQUFDLDhCQUE4QjtrQ0FBQyxnQkFBYzs7Ozs7NEJBQUk7Ozs7O3dCQUFNOzhCQUN6Ryw4REFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLHFCQUFxQjs4QkFBQyw0RUFBQ0MsR0FBQzt3QkFBQ0QsU0FBUyxFQUFDLHlDQUF5QztrQ0FBQyx3REFBc0Q7Ozs7OzRCQUFJOzs7Ozt3QkFBTTs4QkFDNUosOERBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQywyQkFBMkI7O3NDQUN0Qyw4REFBQ0QsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLHFCQUFxQjs7OENBQ2hDLDhEQUFDQyxHQUFDO29DQUFDRCxTQUFTLEVBQUMsb0NBQW9DOzhDQUFDLFVBQVE7Ozs7O3dDQUFJOzhDQUM5RCw4REFBQ0UsT0FBSztvQ0FBQ0MsSUFBSSxFQUFFLE9BQU87Ozs7O3dDQUFJOzhDQUV4Qiw4REFBQ0YsR0FBQztvQ0FBQ0QsU0FBUyxFQUFDLG9DQUFvQzs4Q0FBQyxVQUFROzs7Ozt3Q0FBSTs4Q0FDOUQsOERBQUNFLE9BQUs7b0NBQUNDLElBQUksRUFBRSxPQUFPOzs7Ozt3Q0FBSzs7Ozs7O2dDQUN2QjtzQ0FDTiw4REFBQ0osS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLHFCQUFxQjs7Ozs7Z0NBRTlCOzs7Ozs7d0JBRUo7OEJBQ04sOERBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQywyQkFBMkI7OEJBQ3pDTixHQUFHLElBQUksRUFBRSxrQkFDTiw4REFBQ0osc0RBQU07d0JBQUNjLEtBQUssRUFBRVAsRUFBRTt3QkFBRUcsU0FBUyxFQUFDLEVBQUU7Ozs7OzRCQUFHOzs7Ozt3QkFFaEM7OEJBQ04sOERBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxxQkFBcUI7OEJBQUMsNEVBQUNDLEdBQUM7d0JBQUNELFNBQVMsRUFBQyx3Q0FBd0M7OzRCQUFDLHNCQUFvQjs0QkFBRSxRQUFNOzRCQUFFLEdBQUM7Ozs7Ozs0QkFBSTs7Ozs7d0JBQU07OEJBQ3BJLDhEQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsV0FBVzs7Ozs7d0JBQU87Ozs7OztnQkFDL0I7Ozs7O1lBQ0o7Q0FDakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdHRlc3Rlci8uL3BhZ2VzL2RpZC9baWRdLmpzP2U4ZDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUVJDb2RlIGZyb20gXCJyZWFjdC1xci1jb2RlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250ZW50KCkge1xuICAgIC8vIHJvdXRlciB0byBnZXQgdGhlIGRpZCB2YWx1ZVxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgZGlkID0gcm91dGVyLnF1ZXJ5LmlkXG5cbiAgICAvLyB0aGUgc3RhdGVcbiAgICBjb25zdCAgW3FyLCBzZXRRcl0gPSB1c2VTdGF0ZShkaWQgfHwgXCJcIilcbiAgICBcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjMUUyOTNCXSB3LTMvNSBoLWF1dG9cbiAgICAgICAgICAgICAgICByb3VuZGVkLXhsIG14LWF1dG8gbXktMjAgZHJvcC1zaGFkb3cteGwgXG4gICAgICAgICAgICAgICAgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj48cCBjbGFzc05hbWU9XCJ0ZXh0LVsjQzJFNEYwXSB0ZXh0LTV4bCBtdC02XCI+V2lsdCBBdXRob3JpdHk8L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPjxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNTAwIHRleHQteGwgZm9udC1saWdodCBtdC0xMFwiPkNoZWNrLWluIHZlcmljYXRpb24gc3lzdGVtIGJhc2VkIG9uIHRoZSBLaWx0IHByb3RvY29sLjwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGdhcC01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTUwMCB0ZXh0LXhsIGZvbnQtbGlnaHQgXCI+QXR0ZXN0ZXI8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9e1wicmFkaW9cIn0gLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNTAwIHRleHQteGwgZm9udC1saWdodCBcIj5BdHRlc3RlcjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT17XCJyYWRpb1wifSAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtMzZcIj5cbiAgICAgICAgICAgICAgICAgICAge2RpZCAhPSBcIlwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxRUkNvZGUgdmFsdWU9e3FyfSBjbGFzc05hbWU9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+PHAgY2xhc3NOYW1lPVwidGV4dC10ZWFsLTUwMCB0ZXh0LXhsIGZvbnQtbGlnaHQgbXQtMTJcIj5TY2FuIHRoZSBRUiBjb2RlIHRvIHt9IHlvdXIge30uPC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtWzEwMHB4XVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG59Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlFSQ29kZSIsInVzZVN0YXRlIiwiQ29udGVudCIsInJvdXRlciIsImRpZCIsInF1ZXJ5IiwiaWQiLCJxciIsInNldFFyIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImlucHV0IiwidHlwZSIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/did/[id].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-qr-code":
/*!********************************!*\
  !*** external "react-qr-code" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("react-qr-code");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/did/[id].js"));
module.exports = __webpack_exports__;

})();