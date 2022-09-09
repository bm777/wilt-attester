import env from "./env.json" assert {type: "json"}
import { attestingFlow } from "./attestClaim"

export default async function handler(req, res) {
  const query = req.query
  const request = req.body.request

  if (query.id == env.ATTESTER_DID_URI) {
    try {
      const flow = await attestingFlow(request)
      res.status(200).json({ flow })
    } catch (error) {
      res.status(200).json({message: error})
    }

  }else{
    res.status(200).json({ message: "Provide a valid FullDID attester" })
  }
  
}
