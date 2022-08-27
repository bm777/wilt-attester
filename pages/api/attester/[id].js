import env from "./env.json" assert {type: "json"}
import { MongoClient } from 'mongodb'
import { useRouter } from "next/router"

export default async function handler(req, res) {
  const query = req.query

  if (query.id == env.ATTESTER_DID_URI) {
    const client = await MongoClient.connect(env.MONGODB_URI)
    const db = client.db()
    const tickets = await db.collection("tickets").find().toArray()

    res.status(200).json({ tickets })
  }else{
    res.status(200).json({ message: "Provide a valid FullDID attester" })
  }
  
}
