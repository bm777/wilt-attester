import env from "./env.json" assert {type: "json"}
import { MongoClient } from 'mongodb'

export default async function handler(req, res) {
  // 
  const client = await MongoClient.connect(env.MONGODB_URI)
  const db = client.db()
  const tickets = await db.collection("tickets").find().toArray()

  res.status(200).json({ tickets })
}
