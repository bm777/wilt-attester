import { connectDB } from "../mongodb.js"

export default async function handler(req, res) {
  // 
  let db = await connectDB()

  const tickets = await db.collection("tickets").find().toArray()

  res.status(200).json({ tickets })
}
