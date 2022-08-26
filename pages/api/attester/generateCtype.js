import * as Kilt from "@kiltprotocol/sdk-js"

import { generateKeypairs } from "./generateKeypairs.js"
import { getIdentity } from "./generateIdentity.js"
import { getCtypeSchema } from "./ctypeSchema.js"
import { getFullDid } from "./generateDid.js"

import env from "../../env.json" assert {type: "json"}


export async function ensureStoredCtype() {
    // init
    await Kilt.init({address: env.WSS_ADDRESS})
    const mnemonic = env.ATTESTER_MNEMONIC
    const did = env.ATTESTER_DID_URI

    // load identity
    const identity = await getIdentity(mnemonic)

    // load DID
    const keystore = new Kilt.Did.DemoKeystore()
    await generateKeypairs(keystore, mnemonic)
    const fullDid = await getFullDid(did)

    // get the ctype & see if it is stored, if so, return it
    const ctype = getCtypeSchema()
    const isStored = await ctype.verifyStored()
    if (isStored) {
        console.log("Ctype already stored. Skipping creation")
        return ctype
    }
    console.log("Ctype not present on chain. Creating it now...")

    // authorize the extrinsic
    const tx = await ctype.getStoreTx()
    const extrinsic =  await fullDid.authorizeExtrinsic(
        tx,
        keystore,
        identity.address
    )

    /// write to chain then return ctype
    await Kilt.BlockchainUtils.signAndSubmitTx(extrinsic, identity, {
        resolveOn: Kilt.BlockchainUtils.IS_FINALIZED
    })

}

ensureStoredCtype()
    .catch((e) => {
        console.log("Error while checking on chain ctype", e)
        process.exit(1)
    })
    .then((ctype) => {
        console.log("Ctype: ", ctype)
        process.exit()
    })