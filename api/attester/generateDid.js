import * as Kilt from "@kiltprotocol/sdk-js"
import { generateKeypairs } from "./generateKeypairs.js"
import { getIdentity } from "./generateIdentity.js"
import env from '../../env.json' assert {type: "json"};


export async function createFullDid() {
    await Kilt.init({address: "wss://peregrine.kilt.io/parachain-public-ws"})
    const { api } = await Kilt.connect()
    const mnemonic = env.ATTESTER_MNEMONIC
    console.log(mnemonic)

    // init keystore and load attester identity
    const identity = await getIdentity(mnemonic)
    const keystore = new Kilt.Did.DemoKeystore()

    // generate keypairs
    const keys = await generateKeypairs(keystore, mnemonic)

    // Did on chain going to be created and 
    // Did-URI can be used to resoolve the DID document
    return new Kilt.Did.FullDidCreationBuilder(api, keys.authentication)
            .addEncryptionKey(keys.keyAgreement)
            .setAttestationKey(keys.assertionMethod)
            .setDelegationKey(keys.capabilityDelegation)
            .buildAndSubmit(keystore, identity.address, async (creationTx) => {
                await Kilt.BlockchainUtils.signAndSubmitTx(creationTx, identity, {
                    resolveOn: Kilt.BlockchainUtils.IS_FINALIZED
                })
            })
}

export async function getFullDid(didUri) {
    const onChain = await Kilt.Did.FullDidDetails.fromChainInfo(didUri)
    if (!onChain) throw Error('failed to find on chain did: ${didUri}')
    return onChain
}

 createFullDid()
    .catch((e) => {
        console.log("Error while creating atttester Did", e)
        process.exit(1)
    })
    .then((did) => {
        console.log('ATTESTER_DID_URI=', did.uri)
        process.exit()
    })