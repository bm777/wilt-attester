import { generateRequest } from "./generateRequest.js"


export default async function handler(req, res) {
  // get the content of the claim to generate request
  const content = JSON.parse(req.body)
  // console.log(body)

  // generate the request
  // const request = await generateRequest(body.content, body.mnemonic)
  console.log(content)
  try {
    
  } catch (error) {
    
  }
  
  res.status(200).json({ response: "ok"})

}
