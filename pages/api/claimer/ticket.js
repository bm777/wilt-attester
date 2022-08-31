import { generateRequest } from "./generateRequest.js"


export default async function handler(req, res) {
  try {
    console.log(req.body)
    res.status(200).json({ response: JSON.stringify(req.body)})
  } catch (error) {
    console.log(error)
    res.status(200).json({ response: error})
  }
  

  
  

}
