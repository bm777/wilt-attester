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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Content; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_qr_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-qr-code */ \"./node_modules/react-qr-code/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Content() {\n    _s();\n    // router to get the did value\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var url = router.query.id;\n    // the state\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true), isAttester = ref[0], setIsttester = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), did = ref1[0], setDid = ref1[1];\n    // handlers\n    var handleClick = function(e) {\n        if (isAttester) setIsttester(false);\n        else setIsttester(true);\n    };\n    console.log(router.query.id);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#1E293B] w-3/5 h-auto rounded-xl mx-auto my-20 drop-shadow-xl border border-slate-700\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-[#C2E4F0] text-5xl mt-6\",\n                            children: \"Wilt Authority -\"\n                        }, void 0, false, {\n                            fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                            lineNumber: 27,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-teal-600 text-5xl mt-6 ml-2 font-normal\",\n                            children: isAttester ? \"Attester\" : \"Verifier\"\n                        }, void 0, false, {\n                            fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                            lineNumber: 28,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                    lineNumber: 26,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-slate-500 text-xl font-light mt-10\",\n                        children: \"Check-in verication system based on the Kilt protocol.\"\n                    }, void 0, false, {\n                        fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                        lineNumber: 29,\n                        columnNumber: 58\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                    lineNumber: 29,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center gap-5 mt-10\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-indigo-600 text-gray-300 font-bold py-2 px-4 rounded inline-flex items-center\",\n                        onClick: handleClick,\n                        children: [\n                            \"Switch to \",\n                            !isAttester ? \"Attester\" : \"Verifier\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                        lineNumber: 31,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                    lineNumber: 30,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center mt-24\",\n                    children: url != \"\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_qr_code__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        value: url,\n                        className: \"\"\n                    }, void 0, false, {\n                        fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                        lineNumber: 37,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                    lineNumber: 35,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-teal-500 text-xl font-light mt-12\",\n                        children: [\n                            \"Scan the QR code to \",\n                            isAttester ? \"request\" : \"verify\",\n                            \" your \",\n                            isAttester ? \"ticket\" : \"attestation\",\n                            \".\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                        lineNumber: 41,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                    lineNumber: 40,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-[100px]\"\n                }, void 0, false, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n                    lineNumber: 43,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n            lineNumber: 25,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/bm7/space/wilt/wilt-attester/pages/did/[id].js\",\n        lineNumber: 22,\n        columnNumber: 12\n    }, this);\n};\n_s(Content, \"ZgLfIYmQ9ZcFQn0haO5r1EdkhFM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Content;\nvar _c;\n$RefreshReg$(_c, \"Content\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kaWQvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUF3QztBQUNMO0FBQ0Y7QUFFbEIsU0FBU0csT0FBTyxHQUFHOztJQUM5Qiw4QkFBOEI7SUFDOUIsSUFBTUMsTUFBTSxHQUFHSixzREFBUyxFQUFFO0lBQzFCLElBQU1LLEdBQUcsR0FBR0QsTUFBTSxDQUFDRSxLQUFLLENBQUNDLEVBQUU7SUFFM0IsWUFBWTtJQUNaLElBQW1DTCxHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBQTFDTSxVQUFVLEdBQWtCTixHQUFjLEdBQWhDLEVBQUVPLFlBQVksR0FBSVAsR0FBYyxHQUFsQjtJQUMvQixJQUFzQkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUEzQlEsR0FBRyxHQUFZUixJQUFZLEdBQXhCLEVBQUVTLE1BQU0sR0FBSVQsSUFBWSxHQUFoQjtJQUVsQixXQUFXO0lBQ1gsSUFBTVUsV0FBVyxHQUFHLFNBQUNDLENBQUMsRUFBSztRQUN2QixJQUFJTCxVQUFVLEVBQUVDLFlBQVksQ0FBQyxLQUFLLENBQUM7YUFDOUJBLFlBQVksQ0FBQyxJQUFJLENBQUM7S0FDMUI7SUFDREssT0FBTyxDQUFDQyxHQUFHLENBQUNYLE1BQU0sQ0FBQ0UsS0FBSyxDQUFDQyxFQUFFLENBQUM7SUFHNUIscUJBQU8sOERBQUNTLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLDJGQUVjO2tCQUN4Qiw0RUFBQ0QsS0FBRztZQUFDQyxTQUFTLEVBQUMsRUFBRTs7OEJBQ2IsOERBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxxQkFBcUI7O3NDQUNoQyw4REFBQ0MsR0FBQzs0QkFBQ0QsU0FBUyxFQUFDLDhCQUE4QjtzQ0FBQyxrQkFBZ0I7Ozs7O2dDQUFJO3NDQUNoRSw4REFBQ0MsR0FBQzs0QkFBQ0QsU0FBUyxFQUFDLDhDQUE4QztzQ0FBRVQsVUFBVSxHQUFFLFVBQVUsR0FBRSxVQUFVOzs7OztnQ0FBSzs7Ozs7O3dCQUFNOzhCQUM5Ryw4REFBQ1EsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLHFCQUFxQjs4QkFBQyw0RUFBQ0MsR0FBQzt3QkFBQ0QsU0FBUyxFQUFDLHlDQUF5QztrQ0FBQyx3REFBc0Q7Ozs7OzRCQUFJOzs7Ozt3QkFBTTs4QkFDNUosOERBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxpQ0FBaUM7OEJBQzVDLDRFQUFDRSxRQUFNO3dCQUFDRixTQUFTLEVBQUMsa0ZBQWtGO3dCQUFDRyxPQUFPLEVBQUVSLFdBQVc7OzRCQUFFLFlBQzdHOzRCQUFDLENBQUNKLFVBQVUsR0FBRSxVQUFVLEdBQUUsVUFBVTs7Ozs7OzRCQUN6Qzs7Ozs7d0JBQ1A7OEJBQ04sOERBQUNRLEtBQUc7b0JBQUNDLFNBQVMsRUFBQywyQkFBMkI7OEJBQ3pDWixHQUFHLElBQUksRUFBRSxrQkFDTiw4REFBQ0oscURBQU07d0JBQUNvQixLQUFLLEVBQUVoQixHQUFHO3dCQUFFWSxTQUFTLEVBQUMsRUFBRTs7Ozs7NEJBQUc7Ozs7O3dCQUVqQzs4QkFDTiw4REFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLHFCQUFxQjs4QkFDaEMsNEVBQUNDLEdBQUM7d0JBQUNELFNBQVMsRUFBQyx3Q0FBd0M7OzRCQUFDLHNCQUFvQjs0QkFBQ1QsVUFBVSxHQUFFLFNBQVMsR0FBRSxRQUFROzRCQUFDLFFBQU07NEJBQUNBLFVBQVUsR0FBRSxRQUFRLEdBQUUsYUFBYTs0QkFBQyxHQUFDOzs7Ozs7NEJBQUk7Ozs7O3dCQUN6Sjs4QkFDTiw4REFBQ1EsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLFdBQVc7Ozs7O3dCQUFPOzs7Ozs7Z0JBQy9COzs7OztZQUNKO0NBQ2pCO0dBekN1QmQsT0FBTzs7UUFFWkgsa0RBQVM7OztBQUZKRyxLQUFBQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2RpZC9baWRdLmpzP2U4ZDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUVJDb2RlIGZyb20gXCJyZWFjdC1xci1jb2RlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250ZW50KCkge1xuICAgIC8vIHJvdXRlciB0byBnZXQgdGhlIGRpZCB2YWx1ZVxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgdXJsID0gcm91dGVyLnF1ZXJ5LmlkXG5cbiAgICAvLyB0aGUgc3RhdGVcbiAgICBjb25zdCBbaXNBdHRlc3Rlciwgc2V0SXN0dGVzdGVyXSA9IHVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgW2RpZCwgc2V0RGlkXSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgICAvLyBoYW5kbGVyc1xuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgaWYgKGlzQXR0ZXN0ZXIpIHNldElzdHRlc3RlcihmYWxzZSlcbiAgICAgICAgZWxzZSBzZXRJc3R0ZXN0ZXIodHJ1ZSlcbiAgICB9XG4gICAgY29uc29sZS5sb2cocm91dGVyLnF1ZXJ5LmlkKVxuICAgIFxuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiYmctWyMxRTI5M0JdIHctMy81IGgtYXV0b1xuICAgICAgICAgICAgICAgIHJvdW5kZWQteGwgbXgtYXV0byBteS0yMCBkcm9wLXNoYWRvdy14bCBcbiAgICAgICAgICAgICAgICBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bI0MyRTRGMF0gdGV4dC01eGwgbXQtNlwiPldpbHQgQXV0aG9yaXR5IC08L3A+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC10ZWFsLTYwMCB0ZXh0LTV4bCBtdC02IG1sLTIgZm9udC1ub3JtYWxcIj57aXNBdHRlc3Rlcj8gXCJBdHRlc3RlclwiOiBcIlZlcmlmaWVyXCJ9PC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj48cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTUwMCB0ZXh0LXhsIGZvbnQtbGlnaHQgbXQtMTBcIj5DaGVjay1pbiB2ZXJpY2F0aW9uIHN5c3RlbSBiYXNlZCBvbiB0aGUgS2lsdCBwcm90b2NvbC48L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBnYXAtNSBtdC0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1pbmRpZ28tNjAwIHRleHQtZ3JheS0zMDAgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlclwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTd2l0Y2ggdG8geyFpc0F0dGVzdGVyPyBcIkF0dGVzdGVyXCI6IFwiVmVyaWZpZXJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTI0XCI+XG4gICAgICAgICAgICAgICAgICAgIHt1cmwgIT0gXCJcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UVJDb2RlIHZhbHVlPXt1cmx9IGNsYXNzTmFtZT1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtdGVhbC01MDAgdGV4dC14bCBmb250LWxpZ2h0IG10LTEyXCI+U2NhbiB0aGUgUVIgY29kZSB0byB7aXNBdHRlc3Rlcj8gXCJyZXF1ZXN0XCI6IFwidmVyaWZ5XCJ9IHlvdXIge2lzQXR0ZXN0ZXI/IFwidGlja2V0XCI6IFwiYXR0ZXN0YXRpb25cIn0uPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVsxMDBweF1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxufSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJRUkNvZGUiLCJ1c2VTdGF0ZSIsIkNvbnRlbnQiLCJyb3V0ZXIiLCJ1cmwiLCJxdWVyeSIsImlkIiwiaXNBdHRlc3RlciIsInNldElzdHRlc3RlciIsImRpZCIsInNldERpZCIsImhhbmRsZUNsaWNrIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwiYnV0dG9uIiwib25DbGljayIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/did/[id].js\n"));

/***/ })

});