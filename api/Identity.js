import { config as envConfig } from 'dotenv'
import * as Kilt from "@kiltprotocol/sdk-js"
import { mnemonicGenerate } from '@polkadot/util-crypto'

 export async function createIdentity() {
    await Kilt.init({ address: 'wss://peregrine.kilt.io/' })
    const mnemonic = mnemonicGenerate()
    console.log("-> mnemonic: ", mnemonic)

    // keyring setup
    const keyring = new Kilt.Utils.Keyring({
        ss58Format: 38,
        type: "sr25519"
    })

    const identity = keyring.addFromMnemonic(mnemonic)
    console.log("-> Address: ", identity.address)
    return {identity, mnemonic}
}

// createIdentity()