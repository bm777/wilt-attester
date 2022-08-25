import * as Kilt from "@kiltprotocol/sdk-js"
import {ctype} from "../Ctype.js"
import { createIdentity } from "../Identity.js"

export async function createClaim(ctype, claimContent, address) {
    
    return Kilt.Claim.fromCTypeAndClaimContents(
        ctype,
        claimContent,
        // address
    )   
}

const content = {
    name: "bm7",
    age: 22,
    event_name: "dn22",
    place: "Berlin"
}
const identity = await createIdentity().then((data => console.log(data.identity.address)))
const claim = await createClaim(
    ctype,
    content,
    identity
)
console.log(claim)