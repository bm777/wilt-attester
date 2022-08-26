"use strict";
exports.id = 60;
exports.ids = [60];
exports.modules = {

/***/ 60:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateKeypairs": () => (/* binding */ generateKeypairs)
/* harmony export */ });
/* harmony import */ var _kiltprotocol_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(760);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_kiltprotocol_sdk_js__WEBPACK_IMPORTED_MODULE_0__]);
_kiltprotocol_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

async function generateKeypairs(keystore, mnemonic) {
    // signing keypair
    const signing = await keystore.generateKeypair({
        alg: _kiltprotocol_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Did.SigningAlgorithms.Sr25519,
        seed: mnemonic
    });
    // encryption keypair
    const encryption = await keystore.generateKeypair({
        alg: _kiltprotocol_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Did.EncryptionAlgorithms.NaclBox,
        seed: mnemonic
    });
    // build the attester keys object
    const keys = {
        authentication: {
            publicKey: signing.publicKey,
            type: _kiltprotocol_sdk_js__WEBPACK_IMPORTED_MODULE_0__.VerificationKeyType.Sr25519
        },
        keyAgreement: {
            publicKey: encryption.publicKey,
            type: _kiltprotocol_sdk_js__WEBPACK_IMPORTED_MODULE_0__.EncryptionKeyType.X25519
        },
        capabilityDelegation: {
            publicKey: signing.publicKey,
            type: _kiltprotocol_sdk_js__WEBPACK_IMPORTED_MODULE_0__.VerificationKeyType.Sr25519
        },
        assertionMethod: {
            publicKey: signing.publicKey,
            type: _kiltprotocol_sdk_js__WEBPACK_IMPORTED_MODULE_0__.VerificationKeyType.Sr25519
        }
    };
    return keys;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;