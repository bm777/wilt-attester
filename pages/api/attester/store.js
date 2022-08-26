import env from "./env.json" assert {type: "json"}
import { MongoClient } from 'mongodb'

export default async function handler(req, res) {
  const data = {"type": "request", "name": "bayang", "age": 22}

  // database
  const client = await MongoClient.connect(env.MONGODB_URI)
  const db = client.db()

  // collection
  const collection = db.collection("tickets")

  // insertion
  const result = await collection.insertOne(data)
  
  client.close()

  res.status(200).json({ "message": "ok" })
}
