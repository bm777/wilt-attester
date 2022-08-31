import { generateRequest } from "./generateRequest.js"

export default async function handler(req, res) {
  try {
    var _body = req.body
    var data = JSON.parse(JSON.parse(_body))
    const content = {name: data.name, age: data.age}
    
    const mnemonic = data.mnemonic
    
    const request = await generateRequest(content, mnemonic)
    console.log(request)



    res.status(200).json({ response: JSON.stringify(request)})
  } catch (error) {
    console.log(error)
    res.status(200).json({ response: error})
  }
  

  
  

}
