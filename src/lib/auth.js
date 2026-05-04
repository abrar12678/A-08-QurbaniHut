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
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
  trustedOrigins: [
  "https://a-08-qurbanihut.vercel.app",
  "http://localhost:3000",
  "https://opulent-xylophone-7v6qx57j7r5gfgrrr-3000.app.github.dev",
],
});
