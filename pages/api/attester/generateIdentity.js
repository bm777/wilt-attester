import { mnemonicGenerate } from "@polkadot/util-crypto";
import * as Kilt from "@kiltprotocol/sdk-js"

export async function generateIdentity() {
    await Kilt.init({address: "wss://peregrine.kilt.io/parachain-public-ws"})

    // keyring setup
    const keyring = new Kilt.Utils.Keyring({
        ss58Format: 38,
        type: "sr25519"
    })

    // mnemonic
    const mnemonic = mnemonicGenerate()
    const identity = keyring.addFromMnemonic(mnemonic)
    return {identity, mnemonic}
}

export async function getIdentity(mnemonic){
    await Kilt.init({address: "wss://peregrine.kilt.io/parachain-public-ws"})

    const keyring = new Kilt.Utils.Keyring({
        ss58Format: 38,
        type: "sr25519"
    })
    return keyring.addFromMnemonic(mnemonic)
}

// const res = await generateIdentity()

// console.log(res.identity.address, res.mnemonic)