"use strict";
(() => {
var exports = {};
exports.id = 653;
exports.ids = [653,506,205,502];
exports.modules = {

/***/ 142:
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ 760:
/***/ ((module) => {

module.exports = import("@kiltprotocol/sdk-js");;

/***/ }),

/***/ 763:
/***/ ((module) => {

module.exports = import("@polkadot/util-crypto");;

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

/***/ }),

/***/ 116:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ensureStoredCtype": () => (/* binding */ ensureStoredCtype)
/* harmony export */ });
/* harmony import */ var _kiltprotocol_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(760);
/* harmony import */ var _generateKeypairs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60);
/* harmony import */ var _generateIdentity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(483);
/* harmony import */ var _ctypeSchema_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(367);
/* harmony import */ var _generateDid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(497);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(142);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_kiltprotocol_sdk_js__WEBPACK_IMPORTED_MODULE_0__, _generateKeypairs_js__WEBPACK_IMPORTED_MODULE_1__, _generateIdentity_js__WEBPACK_IMPORTED_MODULE_2__, _ctypeSchema_js__WEBPACK_IMPORTED_MODULE_3__, _generateDid_js__WEBPACK_IMPORTED_MODULE_4__]);
([_kiltprotocol_sdk_js__WEBPACK_IMPORTED_MODULE_0__, _generateKeypairs_js__WEBPACK_IMPORTED_MODULE_1__, _generateIdentity_js__WEBPACK_IMPORTED_MODULE_2__, _ctypeSchema_js__WEBPACK_IMPORTED_MODULE_3__, _generateDid_js__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






// import env from "./env.json" assert {type: "json"}
async function ensureStoredCtype() {
    // init
    await _kiltprotocol_sdk_js__WEBPACK_IMPORTED_MODULE_0__.init({
        address: process.env.WSS_ADDRESS
    });
    const mnemonic = process.env.ATTESTER_MNEMONIC;
    const did = process.env.ATTESTER_DID_URI;
    // load identity
    const identity = await (0,_generateIdentity_js__WEBPACK_IMPORTED_MODULE_2__.getIdentity)(mnemonic);
    // load DID
    const keystore = new _kiltprotocol_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Did.DemoKeystore();
    await (0,_generateKeypairs_js__WEBPACK_IMPORTED_MODULE_1__.generateKeypairs)(keystore, mnemonic);
    const fullDid = await (0,_generateDid_js__WEBPACK_IMPORTED_MODULE_4__.getFullDid)(did);
    // get the ctype & see if it is stored, if so, return it
    const ctype = (0,_ctypeSchema_js__WEBPACK_IMPORTED_MODULE_3__.getCtypeSchema)();
    const isStored = await ctype.verifyStored();
    if (isStored) {
        console.log("Ctype already stored. Skipping creation");
        return ctype;
    }
    console.log("Ctype not present on chain. Creating it now...");
    // authorize the extrinsic
    const tx = await ctype.getStoreTx();
    const extrinsic = await fullDid.authorizeExtrinsic(tx, keystore, identity.address);
    /// write to chain then return ctype
    await _kiltprotocol_sdk_js__WEBPACK_IMPORTED_MODULE_0__.BlockchainUtils.signAndSubmitTx(extrinsic, identity, {
        resolveOn: _kiltprotocol_sdk_js__WEBPACK_IMPORTED_MODULE_0__.BlockchainUtils.IS_FINALIZED
    });
} // envConfig()
 // ensureStoredCtype()
 //     .catch((e) => {
 //         console.log("Error while checking on chain ctype", e)
 //         process.exit(1)
 //     })
 //     .then((ctype) => {
 //         console.log("Ctype: ", ctype)
 //         process.exit()
 //     })

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [60,593], () => (__webpack_exec__(116)));
module.exports = __webpack_exports__;

})();