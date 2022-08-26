
import { MongoClient } from 'mongodb'
import env from "../api/attester/env.json" assert {type: "json"}


export async function connectDB() {
    const { MongoClient, ServerApiVersion } = require('mongodb');
    const uri = env.MONGODB_URI
    const client = new MongoClient(uri);
    await client.connect()
    let db = client.db(env.DB)
    return db
}
