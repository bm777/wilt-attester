"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_qr_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-qr-code */ \"./node_modules/react-qr-code/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_attester_env_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/attester/env.json */ \"./pages/api/attester/env.json\");\n/* harmony import */ var _public_email_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/email.png */ \"./public/email.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    var handleClick = // handlers\n    function handleClick() {\n        var url = getUrl(!isAttester);\n        setDid(url);\n        setIsattester(!isAttester);\n    };\n    _s();\n    // the state\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isAttester = ref[0], setIsattester = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), did = ref1[0], setDid = ref1[1];\n    // useEffect\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var url = getUrl(isAttester);\n        setDid(url);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#1E293B] w-3/5 h-auto rounded-xl mx-auto my-20 drop-shadow-xl border border-slate-700\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-end mr-10\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        src: _public_email_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n                    }, void 0, false, {\n                        fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 61\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                    lineNumber: 36,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-[#C2E4F0] text-5xl\",\n                            children: \"Wilt Authority -\"\n                        }, void 0, false, {\n                            fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                            lineNumber: 38,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-teal-600 text-5xl ml-2 font-normal\",\n                            children: isAttester ? \"Attester\" : \"Verifier\"\n                        }, void 0, false, {\n                            fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                            lineNumber: 39,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                    lineNumber: 37,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-slate-500 text-xl font-light mt-10\",\n                        children: \"Check-in verication system based on the Kilt protocol.\"\n                    }, void 0, false, {\n                        fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                        lineNumber: 40,\n                        columnNumber: 58\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                    lineNumber: 40,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center gap-5 mt-10\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-indigo-600 text-gray-300 font-bold py-2 px-4 rounded inline-flex items-center\",\n                        onClick: handleClick,\n                        children: [\n                            \"Switch to \",\n                            !isAttester ? \"Attester\" : \"Verifier\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                    lineNumber: 41,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center mt-24\",\n                    children: did != \"\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_qr_code__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        value: did,\n                        className: \"\"\n                    }, void 0, false, {\n                        fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                        lineNumber: 48,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                    lineNumber: 46,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-teal-500 text-xl font-light mt-12\",\n                        children: [\n                            \"Scan the QR code to \",\n                            isAttester ? \"request\" : \"verify\",\n                            \" your \",\n                            isAttester ? \"ticket\" : \"attestation\",\n                            \".\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                        lineNumber: 52,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                    lineNumber: 51,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-[100px]\"\n                }, void 0, false, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                    lineNumber: 54,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n            lineNumber: 35,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n        lineNumber: 31,\n        columnNumber: 12\n    }, this);\n};\n_s(Home, \"vxFLO6BjpBc6Qd9bQUy2uIMjNBI=\");\n_c = Home;\nfunction getUrl(isAttester) {\n    var base_url = \"https://wilt-attester.vercel.app\";\n    var url;\n    if (isAttester) {\n        url = base_url + \"/did/attester/\" + _api_attester_env_json__WEBPACK_IMPORTED_MODULE_3__.ATTESTER_DID_URI;\n    } else {\n        url = base_url + \"/did/verifier/\" + _api_attester_env_json__WEBPACK_IMPORTED_MODULE_3__.ATTESTER_DID_URI;\n    }\n    return url;\n}\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQyxVQUFVLEVBQUM7SUFDekIsSUFBTVcsUUFBUSxHQUFHLGtDQUFrQztJQUNuRCxJQUFJYixHQUFHO0lBQ1AsSUFBSUUsVUFBVSxFQUFDO1FBQ2JGLEdBQUcsR0FBR2EsUUFBUSxHQUFFLGdCQUFnQixHQUFFbkIsb0VBQW9CO0tBQ3ZELE1BQ0c7UUFDRk0sR0FBRyxHQUFHYSxRQUFRLEdBQUUsZ0JBQWdCLEdBQUVuQixvRUFBb0I7S0FDdkQ7SUFDRCxPQUFPTSxHQUFHO0NBQ1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUVJDb2RlIGZyb20gXCJyZWFjdC1xci1jb2RlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZW52IGZyb20gXCIuL2FwaS9hdHRlc3Rlci9lbnYuanNvblwiIGFzc2VydCB7dHlwZTogXCJqc29uXCJ9XG5pbXBvcnQgaWNvbk1lc3NhZ2UgZnJvbSBcIi4uL3B1YmxpYy9lbWFpbC5wbmdcIlxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgXG4gICAgLy8gdGhlIHN0YXRlXG4gICAgY29uc3QgW2lzQXR0ZXN0ZXIsIHNldElzYXR0ZXN0ZXJdID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbZGlkLCBzZXREaWRdID0gdXNlU3RhdGUoXCJcIilcblxuICAgIC8vIGhhbmRsZXJzXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG5cbiAgICAgIGNvbnN0IHVybCA9IGdldFVybCghaXNBdHRlc3RlcilcbiAgICAgIHNldERpZCh1cmwpXG4gICAgICBzZXRJc2F0dGVzdGVyKCFpc0F0dGVzdGVyKVxuICAgICAgICBcbiAgICB9XG5cbiAgICAvLyB1c2VFZmZlY3RcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgdXJsID0gZ2V0VXJsKGlzQXR0ZXN0ZXIpXG4gICAgICBzZXREaWQodXJsKVxuICAgIH0sIFtdKVxuXG4gICAgXG4gICAgXG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJiZy1bIzFFMjkzQl0gdy0zLzUgaC1hdXRvXG4gICAgICAgICAgICAgICAgcm91bmRlZC14bCBteC1hdXRvIG15LTIwIGRyb3Atc2hhZG93LXhsIFxuICAgICAgICAgICAgICAgIGJvcmRlciBib3JkZXItc2xhdGUtNzAwXCI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIG1yLTEwXCI+PEltYWdlIHNyYz17aWNvbk1lc3NhZ2V9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bI0MyRTRGMF0gdGV4dC01eGxcIj5XaWx0IEF1dGhvcml0eSAtPC9wPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtdGVhbC02MDAgdGV4dC01eGwgIG1sLTIgZm9udC1ub3JtYWxcIj57aXNBdHRlc3Rlcj8gXCJBdHRlc3RlclwiOiBcIlZlcmlmaWVyXCJ9PC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj48cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTUwMCB0ZXh0LXhsIGZvbnQtbGlnaHQgbXQtMTBcIj5DaGVjay1pbiB2ZXJpY2F0aW9uIHN5c3RlbSBiYXNlZCBvbiB0aGUgS2lsdCBwcm90b2NvbC48L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBnYXAtNSBtdC0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1pbmRpZ28tNjAwIHRleHQtZ3JheS0zMDAgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlclwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTd2l0Y2ggdG8geyFpc0F0dGVzdGVyPyBcIkF0dGVzdGVyXCI6IFwiVmVyaWZpZXJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTI0XCI+XG4gICAgICAgICAgICAgICAgICAgIHtkaWQgIT0gXCJcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UVJDb2RlIHZhbHVlPXtkaWR9IGNsYXNzTmFtZT1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtdGVhbC01MDAgdGV4dC14bCBmb250LWxpZ2h0IG10LTEyXCI+U2NhbiB0aGUgUVIgY29kZSB0byB7aXNBdHRlc3Rlcj8gXCJyZXF1ZXN0XCI6IFwidmVyaWZ5XCJ9IHlvdXIge2lzQXR0ZXN0ZXI/IFwidGlja2V0XCI6IFwiYXR0ZXN0YXRpb25cIn0uPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVsxMDBweF1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxufVxuXG5mdW5jdGlvbiBnZXRVcmwoaXNBdHRlc3Rlcil7XG4gIGNvbnN0IGJhc2VfdXJsID0gXCJodHRwczovL3dpbHQtYXR0ZXN0ZXIudmVyY2VsLmFwcFwiXG4gIHZhciB1cmxcbiAgaWYgKGlzQXR0ZXN0ZXIpe1xuICAgIHVybCA9IGJhc2VfdXJsKyBcIi9kaWQvYXR0ZXN0ZXIvXCIrIGVudi5BVFRFU1RFUl9ESURfVVJJXG4gIH1cbiAgZWxzZXtcbiAgICB1cmwgPSBiYXNlX3VybCsgXCIvZGlkL3ZlcmlmaWVyL1wiKyBlbnYuQVRURVNURVJfRElEX1VSSVxuICB9XG4gIHJldHVybiB1cmxcbn0iXSwibmFtZXMiOlsiUVJDb2RlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJlbnYiLCJ0eXBlIiwiaWNvbk1lc3NhZ2UiLCJJbWFnZSIsIkhvbWUiLCJoYW5kbGVDbGljayIsInVybCIsImdldFVybCIsImlzQXR0ZXN0ZXIiLCJzZXREaWQiLCJzZXRJc2F0dGVzdGVyIiwiZGlkIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ2YWx1ZSIsImJhc2VfdXJsIiwiQVRURVNURVJfRElEX1VSSSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});