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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_qr_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-qr-code */ \"./node_modules/react-qr-code/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_attester_env_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/attester/env.json */ \"./pages/api/attester/env.json\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    var handleClick = // handlers\n    function handleClick() {\n        console.log(\"before\", isAttester, did);\n        var url = getUrl(isAttester);\n        setDid(url);\n        setIsattester(!isAttester);\n        console.log(\"after\", isAttester, did);\n    };\n    _s();\n    // the state\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isAttester = ref[0], setIsattester = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), did = ref1[0], setDid = ref1[1];\n    // useEffect\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var url = getUrl(isAttester);\n        setDid(url);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#1E293B] w-3/5 h-auto rounded-xl mx-auto my-20 drop-shadow-xl border border-slate-700\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-[#C2E4F0] text-5xl mt-6\",\n                            children: \"Wilt Authority -\"\n                        }, void 0, false, {\n                            fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                            lineNumber: 40,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-teal-600 text-5xl mt-6 ml-2 font-normal\",\n                            children: isAttester ? \"Attester\" : \"Verifier\"\n                        }, void 0, false, {\n                            fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                            lineNumber: 41,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                    lineNumber: 39,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-slate-500 text-xl font-light mt-10\",\n                        children: \"Check-in verication system based on the Kilt protocol.\"\n                    }, void 0, false, {\n                        fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 58\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                    lineNumber: 42,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center gap-5 mt-10\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-indigo-600 text-gray-300 font-bold py-2 px-4 rounded inline-flex items-center\",\n                        onClick: handleClick,\n                        children: [\n                            \"Switch to \",\n                            !isAttester ? \"Attester\" : \"Verifier\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                        lineNumber: 44,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                    lineNumber: 43,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center mt-24\",\n                    children: did != \"\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_qr_code__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        value: did,\n                        className: \"\"\n                    }, void 0, false, {\n                        fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                        lineNumber: 50,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                    lineNumber: 48,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-teal-500 text-xl font-light mt-12\",\n                        children: [\n                            \"Scan the QR code to \",\n                            isAttester ? \"request\" : \"verify\",\n                            \" your \",\n                            isAttester ? \"ticket\" : \"attestation\",\n                            \".\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                        lineNumber: 54,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                    lineNumber: 53,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-[100px]\"\n                }, void 0, false, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                    lineNumber: 56,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n            lineNumber: 38,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n        lineNumber: 35,\n        columnNumber: 12\n    }, this);\n};\n_s(Home, \"vxFLO6BjpBc6Qd9bQUy2uIMjNBI=\");\n_c = Home;\nfunction getUrl(isAttester) {\n    var base_url = \"https://wilt-attester.vercel.app\";\n    var url;\n    if (isAttester) {\n        url = base_url + \"/did/attester/\" + _api_attester_env_json__WEBPACK_IMPORTED_MODULE_3__.ATTESTER_DID_URI;\n    } else {\n        url = base_url + \"/did/verifier/\" + _api_attester_env_json__WEBPACK_IMPORTED_MODULE_3__.ATTESTER_DID_URI;\n    }\n    return url;\n}\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsRUFBQztJQUN6QixJQUFNWSxRQUFRLEdBQUcsa0NBQWtDO0lBQ25ELElBQUlWLEdBQUc7SUFDUCxJQUFJRixVQUFVLEVBQUM7UUFDYkUsR0FBRyxHQUFHVSxRQUFRLEdBQUUsZ0JBQWdCLEdBQUVsQixvRUFBb0I7S0FDdkQsTUFDRztRQUNGUSxHQUFHLEdBQUdVLFFBQVEsR0FBRSxnQkFBZ0IsR0FBRWxCLG9FQUFvQjtLQUN2RDtJQUNELE9BQU9RLEdBQUc7Q0FDWCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBRUkNvZGUgZnJvbSBcInJlYWN0LXFyLWNvZGVcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBlbnYgZnJvbSBcIi4vYXBpL2F0dGVzdGVyL2Vudi5qc29uXCIgYXNzZXJ0IHt0eXBlOiBcImpzb25cIn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgXG4gICAgLy8gdGhlIHN0YXRlXG4gICAgY29uc3QgW2lzQXR0ZXN0ZXIsIHNldElzYXR0ZXN0ZXJdID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbZGlkLCBzZXREaWRdID0gdXNlU3RhdGUoXCJcIilcblxuICAgIC8vIGhhbmRsZXJzXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImJlZm9yZVwiLCBpc0F0dGVzdGVyLCBkaWQpXG4gICAgICBjb25zdCB1cmwgPSBnZXRVcmwoaXNBdHRlc3RlcilcbiAgICAgIHNldERpZCh1cmwpXG4gICAgICBzZXRJc2F0dGVzdGVyKCFpc0F0dGVzdGVyKVxuICAgICAgXG4gICAgICBcblxuICAgICAgY29uc29sZS5sb2coXCJhZnRlclwiLCBpc0F0dGVzdGVyLCBkaWQpXG4gICAgICAgIFxuICAgIH1cblxuICAgIC8vIHVzZUVmZmVjdFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBjb25zdCB1cmwgPSBnZXRVcmwoaXNBdHRlc3RlcilcbiAgICAgIHNldERpZCh1cmwpXG4gICAgfSwgW10pXG5cbiAgICBcbiAgICBcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjMUUyOTNCXSB3LTMvNSBoLWF1dG9cbiAgICAgICAgICAgICAgICByb3VuZGVkLXhsIG14LWF1dG8gbXktMjAgZHJvcC1zaGFkb3cteGwgXG4gICAgICAgICAgICAgICAgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWyNDMkU0RjBdIHRleHQtNXhsIG10LTZcIj5XaWx0IEF1dGhvcml0eSAtPC9wPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtdGVhbC02MDAgdGV4dC01eGwgbXQtNiBtbC0yIGZvbnQtbm9ybWFsXCI+e2lzQXR0ZXN0ZXI/IFwiQXR0ZXN0ZXJcIjogXCJWZXJpZmllclwifTwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+PHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS01MDAgdGV4dC14bCBmb250LWxpZ2h0IG10LTEwXCI+Q2hlY2staW4gdmVyaWNhdGlvbiBzeXN0ZW0gYmFzZWQgb24gdGhlIEtpbHQgcHJvdG9jb2wuPC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgZ2FwLTUgbXQtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctaW5kaWdvLTYwMCB0ZXh0LWdyYXktMzAwIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXJcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3dpdGNoIHRvIHshaXNBdHRlc3Rlcj8gXCJBdHRlc3RlclwiOiBcIlZlcmlmaWVyXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0yNFwiPlxuICAgICAgICAgICAgICAgICAgICB7ZGlkICE9IFwiXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFFSQ29kZSB2YWx1ZT17ZGlkfSBjbGFzc05hbWU9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXRlYWwtNTAwIHRleHQteGwgZm9udC1saWdodCBtdC0xMlwiPlNjYW4gdGhlIFFSIGNvZGUgdG8ge2lzQXR0ZXN0ZXI/IFwicmVxdWVzdFwiOiBcInZlcmlmeVwifSB5b3VyIHtpc0F0dGVzdGVyPyBcInRpY2tldFwiOiBcImF0dGVzdGF0aW9uXCJ9LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bMTAwcHhdXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbn1cblxuZnVuY3Rpb24gZ2V0VXJsKGlzQXR0ZXN0ZXIpe1xuICBjb25zdCBiYXNlX3VybCA9IFwiaHR0cHM6Ly93aWx0LWF0dGVzdGVyLnZlcmNlbC5hcHBcIlxuICB2YXIgdXJsXG4gIGlmIChpc0F0dGVzdGVyKXtcbiAgICB1cmwgPSBiYXNlX3VybCsgXCIvZGlkL2F0dGVzdGVyL1wiKyBlbnYuQVRURVNURVJfRElEX1VSSVxuICB9XG4gIGVsc2V7XG4gICAgdXJsID0gYmFzZV91cmwrIFwiL2RpZC92ZXJpZmllci9cIisgZW52LkFUVEVTVEVSX0RJRF9VUklcbiAgfVxuICByZXR1cm4gdXJsXG59Il0sIm5hbWVzIjpbIlFSQ29kZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZW52IiwidHlwZSIsIkhvbWUiLCJoYW5kbGVDbGljayIsImNvbnNvbGUiLCJsb2ciLCJpc0F0dGVzdGVyIiwiZGlkIiwidXJsIiwiZ2V0VXJsIiwic2V0RGlkIiwic2V0SXNhdHRlc3RlciIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJidXR0b24iLCJvbkNsaWNrIiwidmFsdWUiLCJiYXNlX3VybCIsIkFUVEVTVEVSX0RJRF9VUkkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});