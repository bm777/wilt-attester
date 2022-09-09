import env from "./env.json" assert {type: "json"}
import { getCtypeSchema } from "./ctypeSchema.js"

export default async function handler(req, res) {

  try {
    const ct =  getCtypeSchema()
    res.status(200).json({ctype: ct})
    
  } catch (error) {
    res.status(200).json({ct: error})
  }
  
}
