import * as Kilt from "@kiltprotocol/sdk-js"

export const ctype = Kilt.CType.fromSchema({
    $schema: "http://kilt-protocol.org/draft-01/ctype#",
    title: "Event Ticket",
    properties: {
        name: {
            type: "string",
        },
        age: {
            type: "integer",
        },
        event_name: {
            type: "string",
        },
        place: {
            type: "string",
        },
    },
    type: "object",
})