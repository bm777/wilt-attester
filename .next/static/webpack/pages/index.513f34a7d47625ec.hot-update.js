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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_qr_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-qr-code */ \"./node_modules/react-qr-code/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_attester_env_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/attester/env.json */ \"./pages/api/attester/env.json\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    // the state\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isAttester = ref[0], setIsttester = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), did = ref1[0], setDid = ref1[1];\n    // handlers\n    var handleClick = function() {\n        console.log(\"handle\", isAttester, did);\n        setIsttester(!isAttester);\n        var url = getUrl(isAttester);\n        setDid(url);\n        // console.log(isAttester)\n        // console.log(did)\n        console.log(\"handle\", isAttester, did);\n    };\n    // useEffect\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(\"useFfect\", isAttester, did);\n        var url = getUrl(isAttester);\n        setDid(url);\n        console.log(\"useFfect\", isAttester, did);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#1E293B] w-3/5 h-auto rounded-xl mx-auto my-20 drop-shadow-xl border border-slate-700\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-[#C2E4F0] text-5xl mt-6\",\n                            children: \"Wilt Authority -\"\n                        }, void 0, false, {\n                            fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                            lineNumber: 41,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-teal-600 text-5xl mt-6 ml-2 font-normal\",\n                            children: isAttester ? \"Attester\" : \"Verifier\"\n                        }, void 0, false, {\n                            fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                            lineNumber: 42,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                    lineNumber: 40,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-slate-500 text-xl font-light mt-10\",\n                        children: \"Check-in verication system based on the Kilt protocol.\"\n                    }, void 0, false, {\n                        fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 58\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                    lineNumber: 43,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center gap-5 mt-10\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-indigo-600 text-gray-300 font-bold py-2 px-4 rounded inline-flex items-center\",\n                        onClick: handleClick,\n                        children: [\n                            \"Switch to \",\n                            !isAttester ? \"Attester\" : \"Verifier\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                        lineNumber: 45,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                    lineNumber: 44,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center mt-24\",\n                    children: did != \"\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_qr_code__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        value: did,\n                        className: \"\"\n                    }, void 0, false, {\n                        fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                        lineNumber: 51,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                    lineNumber: 49,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-teal-500 text-xl font-light mt-12\",\n                        children: [\n                            \"Scan the QR code to \",\n                            isAttester ? \"request\" : \"verify\",\n                            \" your \",\n                            isAttester ? \"ticket\" : \"attestation\",\n                            \".\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                        lineNumber: 55,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                    lineNumber: 54,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-[100px]\"\n                }, void 0, false, {\n                    fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n                    lineNumber: 57,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n            lineNumber: 39,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/bm7/space/wilt/wilt-attester/pages/index.js\",\n        lineNumber: 36,\n        columnNumber: 12\n    }, this);\n};\n_s(Home, \"vxFLO6BjpBc6Qd9bQUy2uIMjNBI=\");\n_c = Home;\nfunction getUrl(isAttester) {\n    var base_url = \"https://wilt-attester.vercel.app\";\n    var url;\n    if (isAttester) {\n        url = base_url + \"/did/attester/\" + _api_attester_env_json__WEBPACK_IMPORTED_MODULE_3__.ATTESTER_DID_URI;\n    } else {\n        url = base_url + \"/did/verifier/\" + _api_attester_env_json__WEBPACK_IMPORTED_MODULE_3__.ATTESTER_DID_URI;\n    }\n    return url;\n}\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozt3QkFDeko7OEJBQ04sOERBQUNTLEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxXQUFXOzs7Ozt3QkFBTzs7Ozs7O2dCQUMvQjs7Ozs7WUFDSjtDQUNqQjtHQXJEdUJYLElBQUk7QUFBSkEsS0FBQUEsSUFBSTtBQXVENUIsU0FBU1MsTUFBTSxDQUFDUixVQUFVLEVBQUM7SUFDekIsSUFBTWUsUUFBUSxHQUFHLGtDQUFrQztJQUNuRCxJQUFJUixHQUFHO0lBQ1AsSUFBSVAsVUFBVSxFQUFDO1FBQ2JPLEdBQUcsR0FBR1EsUUFBUSxHQUFFLGdCQUFnQixHQUFFbEIsb0VBQW9CO0tBQ3ZELE1BQ0c7UUFDRlUsR0FBRyxHQUFHUSxRQUFRLEdBQUUsZ0JBQWdCLEdBQUVsQixvRUFBb0I7S0FDdkQ7SUFDRCxPQUFPVSxHQUFHO0NBQ1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUVJDb2RlIGZyb20gXCJyZWFjdC1xci1jb2RlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZW52IGZyb20gXCIuL2FwaS9hdHRlc3Rlci9lbnYuanNvblwiIGFzc2VydCB7dHlwZTogXCJqc29uXCJ9XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAgIFxuICAgIC8vIHRoZSBzdGF0ZVxuICAgIGNvbnN0IFtpc0F0dGVzdGVyLCBzZXRJc3R0ZXN0ZXJdID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbZGlkLCBzZXREaWRdID0gdXNlU3RhdGUoXCJcIilcblxuICAgIC8vIGhhbmRsZXJzXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcImhhbmRsZVwiLCBpc0F0dGVzdGVyLCBkaWQpXG4gICAgICBzZXRJc3R0ZXN0ZXIoIWlzQXR0ZXN0ZXIpXG4gICAgICBjb25zdCB1cmwgPSBnZXRVcmwoaXNBdHRlc3RlcilcbiAgICAgIHNldERpZCh1cmwpXG4gICAgICAvLyBjb25zb2xlLmxvZyhpc0F0dGVzdGVyKVxuICAgICAgLy8gY29uc29sZS5sb2coZGlkKVxuICAgICAgY29uc29sZS5sb2coXCJoYW5kbGVcIiwgaXNBdHRlc3RlciwgZGlkKVxuICAgICAgICBcbiAgICB9XG5cbiAgICAvLyB1c2VFZmZlY3RcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJ1c2VGZmVjdFwiLCBpc0F0dGVzdGVyLCBkaWQpXG4gICAgICBjb25zdCB1cmwgPSBnZXRVcmwoaXNBdHRlc3RlcilcbiAgICAgIHNldERpZCh1cmwpXG4gICAgICBjb25zb2xlLmxvZyhcInVzZUZmZWN0XCIsIGlzQXR0ZXN0ZXIsIGRpZClcbiAgICB9LCBbXSlcblxuICAgIFxuICAgIFxuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiYmctWyMxRTI5M0JdIHctMy81IGgtYXV0b1xuICAgICAgICAgICAgICAgIHJvdW5kZWQteGwgbXgtYXV0byBteS0yMCBkcm9wLXNoYWRvdy14bCBcbiAgICAgICAgICAgICAgICBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bI0MyRTRGMF0gdGV4dC01eGwgbXQtNlwiPldpbHQgQXV0aG9yaXR5IC08L3A+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC10ZWFsLTYwMCB0ZXh0LTV4bCBtdC02IG1sLTIgZm9udC1ub3JtYWxcIj57aXNBdHRlc3Rlcj8gXCJBdHRlc3RlclwiOiBcIlZlcmlmaWVyXCJ9PC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj48cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTUwMCB0ZXh0LXhsIGZvbnQtbGlnaHQgbXQtMTBcIj5DaGVjay1pbiB2ZXJpY2F0aW9uIHN5c3RlbSBiYXNlZCBvbiB0aGUgS2lsdCBwcm90b2NvbC48L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBnYXAtNSBtdC0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1pbmRpZ28tNjAwIHRleHQtZ3JheS0zMDAgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlclwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTd2l0Y2ggdG8geyFpc0F0dGVzdGVyPyBcIkF0dGVzdGVyXCI6IFwiVmVyaWZpZXJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTI0XCI+XG4gICAgICAgICAgICAgICAgICAgIHtkaWQgIT0gXCJcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UVJDb2RlIHZhbHVlPXtkaWR9IGNsYXNzTmFtZT1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtdGVhbC01MDAgdGV4dC14bCBmb250LWxpZ2h0IG10LTEyXCI+U2NhbiB0aGUgUVIgY29kZSB0byB7aXNBdHRlc3Rlcj8gXCJyZXF1ZXN0XCI6IFwidmVyaWZ5XCJ9IHlvdXIge2lzQXR0ZXN0ZXI/IFwidGlja2V0XCI6IFwiYXR0ZXN0YXRpb25cIn0uPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVsxMDBweF1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxufVxuXG5mdW5jdGlvbiBnZXRVcmwoaXNBdHRlc3Rlcil7XG4gIGNvbnN0IGJhc2VfdXJsID0gXCJodHRwczovL3dpbHQtYXR0ZXN0ZXIudmVyY2VsLmFwcFwiXG4gIHZhciB1cmxcbiAgaWYgKGlzQXR0ZXN0ZXIpe1xuICAgIHVybCA9IGJhc2VfdXJsKyBcIi9kaWQvYXR0ZXN0ZXIvXCIrIGVudi5BVFRFU1RFUl9ESURfVVJJXG4gIH1cbiAgZWxzZXtcbiAgICB1cmwgPSBiYXNlX3VybCsgXCIvZGlkL3ZlcmlmaWVyL1wiKyBlbnYuQVRURVNURVJfRElEX1VSSVxuICB9XG4gIHJldHVybiB1cmxcbn0iXSwibmFtZXMiOlsiUVJDb2RlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJlbnYiLCJ0eXBlIiwiSG9tZSIsImlzQXR0ZXN0ZXIiLCJzZXRJc3R0ZXN0ZXIiLCJkaWQiLCJzZXREaWQiLCJoYW5kbGVDbGljayIsImNvbnNvbGUiLCJsb2ciLCJ1cmwiLCJnZXRVcmwiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwiYnV0dG9uIiwib25DbGljayIsInZhbHVlIiwiYmFzZV91cmwiLCJBVFRFU1RFUl9ESURfVVJJIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});