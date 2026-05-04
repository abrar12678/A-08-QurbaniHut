import dns from "node:dns";
dns.setServers(['8.8.8.8', '8.8.4.4']);


import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.DB_URI);
const db = client.db("Qurbanihut");

// Connect immediately on module load
client.connect().catch(console.error);

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client
  }),
  emailAndPassword: {
    enabled: true
  },
});