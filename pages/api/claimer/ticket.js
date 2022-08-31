import { generateRequest } from "./generateRequest.js"


export default async function handler(req, res) {
  // get the content of the claim to generate request
  console.log(JSON.parse(req.body))
  // const body = JSON.parse(req.body)
  // console.log(body)

  // generate the request
  // const request = await generateRequest(body.content, body.mnemonic)
  // console.log()
  
  res.status(200).json({ response: JSON.stringify(req.body)})

}
