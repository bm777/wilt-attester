
import * as Kilt from '@kiltprotocol/sdk-js'

import { generateKeypairs } from './generateKeypairs'
import { generateRequest } from '../claimer/generateRequest'
import { getIdentity } from './generateIdentity'
import { getFullDid } from './generateDid'

export async function attestClaim(
  request
) {
  // Init
  await Kilt.init({ address: process.env.WSS_ADDRESS })

  // load account & DID
  const mnemonic = env.ATTESTER_MNEMONIC 
  const attesterDid = env.ATTESTER_DID_URI
  const account = await getIdentity(mnemonic)
  const keystore = new Kilt.Did.DemoKeystore()
  await generateKeypairs(keystore, mnemonic)
  const fullDid = await getFullDid(attesterDid)

  // build the attestation object
  const attestation = Kilt.Attestation.fromRequestAndDid(request, fullDid.uri)

  // check the request content and deny based on our business logic.
  // e.g., verify age with other credentials (birth certificate, passport, ...)

  // form tx and authorized extrinsic
  const tx = await attestation.getStoreTx()
  const extrinsic = await fullDid.authorizeExtrinsic(
    tx,
    keystore,
    account.address
  )

  // write to chain
  console.log('Attester -> submit attestation...')
  await Kilt.BlockchainUtils.signAndSubmitTx(extrinsic, account, {
    resolveOn: Kilt.BlockchainUtils.IS_FINALIZED
  })

  return attestation
}

export async function attestingFlow(request){
  // the attester checks the attributes and issues an attestation
  const attestation = await attestClaim(request)

  // send the attestation back to the claimer 🕊

  // build the credential and return it
  const credential = Kilt.Credential.fromRequestAndAttestation(
    request,
    attestation
  )

  return credential
}

// don't execute if this is imported by another file
// if (require.main === module) {
//   envConfig()
//   attestingFlow()
//     .catch((e) => {
//       console.log('Error while going throw attesting workflow', e)
//       process.exit(1)
//     })
//     .then((c) => {
//       console.log('The claimer build their credential and now has to store it.')
//       console.log('⚠️  add the following to your .env file. ⚠️')
//       console.log(`CLAIMER_CREDENTIAL='${JSON.stringify(c)}'`)
//       process.exit()
//     })
// }