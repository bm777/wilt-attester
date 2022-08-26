"use strict";
(() => {
var exports = {};
exports.id = 506;
exports.ids = [506,502];
exports.modules = {

/***/ 760:
/***/ ((module) => {

module.exports = import("@kiltprotocol/sdk-js");;

/***/ }),

/***/ 367:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCtypeSchema": () => (/* binding */ getCtypeSchema)
/* harmony export */ });
/* harmony import */ var _kiltprotocol_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(760);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_kiltprotocol_sdk_js__WEBPACK_IMPORTED_MODULE_0__]);
_kiltprotocol_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function getCtypeSchema() {
    return _kiltprotocol_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CType.fromSchema({
        $schema: "http://kilt-protocol.org/draft-01/ctype#",
        title: "Event Tickets",
        properties: {
            name: {
                type: "string"
            },
            age: {
                type: "integer"
            }
        },
        type: "object"
    });
} // console.log(getCtypeSchema())

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(367));
module.exports = __webpack_exports__;

})();