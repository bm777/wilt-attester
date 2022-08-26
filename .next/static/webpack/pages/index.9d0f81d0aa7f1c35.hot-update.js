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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_qr_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-qr-code */ \"./node_modules/react-qr-code/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_attester_env_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/attester/env.json */ \"./pages/api/attester/env.json\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    // the state\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isAttester = ref[0], setIsttester = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), did = ref1[0], setDid = ref1[1];\n    // handlers\n    var handleClick = function(e) {\n        setIsttester(false);\n        var url = getUrl(true);\n        setDid(url);\n        console.log(did);\n    };\n    // useEffect\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var url = getUrl(isAttester);\n        setDid(url);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#1E293B] w-3/5 h-auto rounded-xl mx-auto my-20 drop-shadow-xl border border-slate-700\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-[#C2E4F0] text-5xl mt-6\",\n                            children: \"Wilt Authority -\"\n                        }, void 0, false, {\n                            fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                            lineNumber: 37,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-teal-600 text-5xl mt-6 ml-2 font-normal\",\n                            children: isAttester ? \"Attester\" : \"Verifier\"\n                        }, void 0, false, {\n                            fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                            lineNumber: 38,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                    lineNumber: 36,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-slate-500 text-xl font-light mt-10\",\n                        children: \"Check-in verication system based on the Kilt protocol.\"\n                    }, void 0, false, {\n                        fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 58\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                    lineNumber: 39,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center gap-5 mt-10\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-indigo-600 text-gray-300 font-bold py-2 px-4 rounded inline-flex items-center\",\n                        onClick: handleClick,\n                        children: [\n                            \"Switch to \",\n                            !isAttester ? \"Attester\" : \"Verifier\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                        lineNumber: 41,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                    lineNumber: 40,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center mt-24\",\n                    children: did != \"\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_qr_code__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        value: did,\n                        className: \"\"\n                    }, void 0, false, {\n                        fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                        lineNumber: 47,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                    lineNumber: 45,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-teal-500 text-xl font-light mt-12\",\n                        children: [\n                            \"Scan the QR code to \",\n                            isAttester ? \"request\" : \"verify\",\n                            \" your \",\n                            isAttester ? \"ticket\" : \"attestation\",\n                            \".\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                        lineNumber: 51,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                    lineNumber: 50,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-[100px]\"\n                }, void 0, false, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                    lineNumber: 53,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n            lineNumber: 35,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n        lineNumber: 32,\n        columnNumber: 12\n    }, this);\n};\n_s(Home, \"vxFLO6BjpBc6Qd9bQUy2uIMjNBI=\");\n_c = Home;\nfunction getUrl(isAttester) {\n    var base_url = \"https://wilt-attester.vercel.app\";\n    var url;\n    if (isAttester) {\n        url = base_url + \"/attester/\" + _api_attester_env_json__WEBPACK_IMPORTED_MODULE_3__.ATTESTER_DID_URI;\n    } else {\n        url = base_url + \"/verifier/\" + _api_attester_env_json__WEBPACK_IMPORTED_MODULE_3__.ATTESTER_DID_URI;\n    }\n    return url;\n}\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsR0FBR1UsUUFBUSxHQUFFLFlBQVksR0FBRW5CLG9FQUFvQjtLQUNuRCxNQUNHO1FBQ0ZTLEdBQUcsR0FBR1UsUUFBUSxHQUFFLFlBQVksR0FBRW5CLG9FQUFvQjtLQUNuRDtJQUNELE9BQU9TLEdBQUc7Q0FDWCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBRUkNvZGUgZnJvbSBcInJlYWN0LXFyLWNvZGVcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBlbnYgZnJvbSBcIi4vYXBpL2F0dGVzdGVyL2Vudi5qc29uXCIgYXNzZXJ0IHt0eXBlOiBcImpzb25cIn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgXG4gICAgLy8gdGhlIHN0YXRlXG4gICAgY29uc3QgW2lzQXR0ZXN0ZXIsIHNldElzdHRlc3Rlcl0gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFtkaWQsIHNldERpZF0gPSB1c2VTdGF0ZShcIlwiKVxuXG4gICAgLy8gaGFuZGxlcnNcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBzZXRJc3R0ZXN0ZXIoZmFsc2UpXG4gICAgICAgIGNvbnN0IHVybCA9IGdldFVybCh0cnVlKVxuICAgICAgICBzZXREaWQodXJsKVxuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coZGlkKVxuICAgIH1cblxuICAgIC8vIHVzZUVmZmVjdFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVybCA9IGdldFVybChpc0F0dGVzdGVyKVxuICAgICAgICBzZXREaWQodXJsKVxuICAgIH0sIFtdKVxuXG4gICAgXG4gICAgXG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJiZy1bIzFFMjkzQl0gdy0zLzUgaC1hdXRvXG4gICAgICAgICAgICAgICAgcm91bmRlZC14bCBteC1hdXRvIG15LTIwIGRyb3Atc2hhZG93LXhsIFxuICAgICAgICAgICAgICAgIGJvcmRlciBib3JkZXItc2xhdGUtNzAwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsjQzJFNEYwXSB0ZXh0LTV4bCBtdC02XCI+V2lsdCBBdXRob3JpdHkgLTwvcD4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXRlYWwtNjAwIHRleHQtNXhsIG10LTYgbWwtMiBmb250LW5vcm1hbFwiPntpc0F0dGVzdGVyPyBcIkF0dGVzdGVyXCI6IFwiVmVyaWZpZXJcIn08L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPjxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNTAwIHRleHQteGwgZm9udC1saWdodCBtdC0xMFwiPkNoZWNrLWluIHZlcmljYXRpb24gc3lzdGVtIGJhc2VkIG9uIHRoZSBLaWx0IHByb3RvY29sLjwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGdhcC01IG10LTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWluZGlnby02MDAgdGV4dC1ncmF5LTMwMCBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN3aXRjaCB0byB7IWlzQXR0ZXN0ZXI/IFwiQXR0ZXN0ZXJcIjogXCJWZXJpZmllclwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtMjRcIj5cbiAgICAgICAgICAgICAgICAgICAge2RpZCAhPSBcIlwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxRUkNvZGUgdmFsdWU9e2RpZH0gY2xhc3NOYW1lPVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC10ZWFsLTUwMCB0ZXh0LXhsIGZvbnQtbGlnaHQgbXQtMTJcIj5TY2FuIHRoZSBRUiBjb2RlIHRvIHtpc0F0dGVzdGVyPyBcInJlcXVlc3RcIjogXCJ2ZXJpZnlcIn0geW91ciB7aXNBdHRlc3Rlcj8gXCJ0aWNrZXRcIjogXCJhdHRlc3RhdGlvblwifS48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtWzEwMHB4XVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG59XG5cbmZ1bmN0aW9uIGdldFVybChpc0F0dGVzdGVyKXtcbiAgY29uc3QgYmFzZV91cmwgPSBcImh0dHBzOi8vd2lsdC1hdHRlc3Rlci52ZXJjZWwuYXBwXCJcbiAgdmFyIHVybFxuICBpZiAoaXNBdHRlc3Rlcil7XG4gICAgdXJsID0gYmFzZV91cmwrIFwiL2F0dGVzdGVyL1wiKyBlbnYuQVRURVNURVJfRElEX1VSSVxuICB9XG4gIGVsc2V7XG4gICAgdXJsID0gYmFzZV91cmwrIFwiL3ZlcmlmaWVyL1wiKyBlbnYuQVRURVNURVJfRElEX1VSSVxuICB9XG4gIHJldHVybiB1cmxcbn0iXSwibmFtZXMiOlsiUVJDb2RlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJlbnYiLCJ0eXBlIiwiSG9tZSIsImlzQXR0ZXN0ZXIiLCJzZXRJc3R0ZXN0ZXIiLCJkaWQiLCJzZXREaWQiLCJoYW5kbGVDbGljayIsImUiLCJ1cmwiLCJnZXRVcmwiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ2YWx1ZSIsImJhc2VfdXJsIiwiQVRURVNURVJfRElEX1VSSSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});