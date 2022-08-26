import * as Kilt from "@kiltprotocol/sdk-js"

export function getCtypeSchema() {
    return Kilt.CType.fromSchema({
        $schema: 'http://kilt-protocol.org/draft-01/ctype#',
        title: 'Event Tickets',
        properties: {
        name: {
            type: 'string'
        },
        age: {
            type: 'integer'
        }
        },
        type: 'object'
    })
}

// console.log(getCtypeSchema())