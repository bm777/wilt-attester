"use strict";
exports.id = 593;
exports.ids = [593];
exports.modules = {

/***/ 497:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFullDid": () => (/* binding */ createFullDid),
/* harmony export */   "getFullDid": () => (/* binding */ getFullDid)
/* harmony export */ });
/* harmony import */ var _kiltprotocol_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(760);
/* harmony import */ var _generateKeypairs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60);
/* harmony import */ var _generateIdentity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(483);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(142);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_kiltprotocol_sdk_js__WEBPACK_IMPORTED_MODULE_0__, _generateKeypairs_js__WEBPACK_IMPORTED_MODULE_1__, _generateIdentity_js__WEBPACK_IMPORTED_MODULE_2__]);
([_kiltprotocol_sdk_js__WEBPACK_IMPORTED_MODULE_0__, _generateKeypairs_js__WEBPACK_IMPORTED_MODULE_1__, _generateIdentity_js__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// import env from './env.json' assert {type: "json"};

async function createFullDid() {
    await _kiltprotocol_sdk_js__WEBPACK_IMPORTED_MODULE_0__.init({
        address: process.env.WSS_ADDRESS
    });
    const { api  } = await _kiltprotocol_sdk_js__WEBPACK_IMPORTED_MODULE_0__.connect();
    const mnemonic = process.env.ATTESTER_MNEMONIC;
    console.log(mnemonic);
    // init keystore and load attester identity
    const identity = await (0,_generateIdentity_js__WEBPACK_IMPORTED_MODULE_2__.getIdentity)(mnemonic);
    const keystore = new _kiltprotocol_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Did.DemoKeystore();
    // generate keypairs
    const keys = await (0,_generateKeypairs_js__WEBPACK_IMPORTED_MODULE_1__.generateKeypairs)(keystore, mnemonic);
    // Did on chain going to be created and 
    // Did-URI can be used to resoolve the DID document
    return new _kiltprotocol_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Did.FullDidCreationBuilder(api, keys.authentication).addEncryptionKey(keys.keyAgreement).setAttestationKey(keys.assertionMethod).setDelegationKey(keys.capabilityDelegation).buildAndSubmit(keystore, identity.address, async (creationTx)=>{
        await _kiltprotocol_sdk_js__WEBPACK_IMPORTED_MODULE_0__.BlockchainUtils.signAndSubmitTx(creationTx, identity, {
            resolveOn: _kiltprotocol_sdk_js__WEBPACK_IMPORTED_MODULE_0__.BlockchainUtils.IS_FINALIZED
        });
    });
}
async function getFullDid(didUri) {
    await _kiltprotocol_sdk_js__WEBPACK_IMPORTED_MODULE_0__.init({
        address: process.env.WSS_ADDRESS
    });
    // const { api } = await Kilt.connect()
    const onChain = await _kiltprotocol_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Did.FullDidDetails.fromChainInfo(didUri);
    if (!onChain) throw Error("failed to find on chain did: ${didUri}");
    return onChain;
} // envConfig()
 //  createFullDid()
 //     .catch((e) => {
 //         console.log("Error while creating atttester Did", e)
 //         process.exit(1)
 //     })
 //     .then((did) => {
 //         console.log('ATTESTER_DID_URI=', did.uri)
 //         process.exit()
 //     })
 // getFullDid(env.ATTESTER_DID_URI)
 //     .catch((e) => {
 //         console.log("Error while retrieving atttester Did", e)
 //         process.exit(1)
 //     })
 //     .then((did) => {
 //         console.log('ATTESTER_DID=', did)
 //         process.exit()
 //     })

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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