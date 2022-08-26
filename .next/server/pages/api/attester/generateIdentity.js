"use strict";
(() => {
var exports = {};
exports.id = 497;
exports.ids = [497,502];
exports.modules = {

/***/ 760:
/***/ ((module) => {

module.exports = import("@kiltprotocol/sdk-js");;

/***/ }),

/***/ 763:
/***/ ((module) => {

module.exports = import("@polkadot/util-crypto");;

/***/ }),

/***/ 483:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateIdentity": () => (/* binding */ generateIdentity),
/* harmony export */   "getIdentity": () => (/* binding */ getIdentity)
/* harmony export */ });
/* harmony import */ var _polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(763);
/* harmony import */ var _kiltprotocol_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(760);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_0__, _kiltprotocol_sdk_js__WEBPACK_IMPORTED_MODULE_1__]);
([_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_0__, _kiltprotocol_sdk_js__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


async function generateIdentity() {
    await _kiltprotocol_sdk_js__WEBPACK_IMPORTED_MODULE_1__.init({
        address: "wss://peregrine.kilt.io/parachain-public-ws"
    });
    // keyring setup
    const keyring = new _kiltprotocol_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Utils.Keyring({
        ss58Format: 38,
        type: "sr25519"
    });
    // mnemonic
    const mnemonic = (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_0__.mnemonicGenerate)();
    const identity = keyring.addFromMnemonic(mnemonic);
    return {
        identity,
        mnemonic
    };
}
async function getIdentity(mnemonic) {
    await _kiltprotocol_sdk_js__WEBPACK_IMPORTED_MODULE_1__.init({
        address: "wss://peregrine.kilt.io/parachain-public-ws"
    });
    const keyring = new _kiltprotocol_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Utils.Keyring({
        ss58Format: 38,
        type: "sr25519"
    });
    return keyring.addFromMnemonic(mnemonic);
} // const res = await generateIdentity()
 // console.log(res.identity.address, res.mnemonic)

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(483));
module.exports = __webpack_exports__;

})();