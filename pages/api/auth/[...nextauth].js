import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import GitHubProvider from "next-auth/providers/github"
import TwitterProvider from "next-auth/providers/twitter"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import { connectToDatabase } from "../../../lib/mongodb"


export default async function auth(req, res) {
  let { client } = await connectToDatabase()
  return await NextAuth(req, res, {
    adapter: MongoDBAdapter({
      db: client.db(process.env.DB_NAME)
    }),
    session: {
      jwt: true
    },
    providers: [
      // OAuth authentication providers
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
      }),
      FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET
      }),
      GitHubProvider({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        scope: "read:user"
      }),
      TwitterProvider({
        clientId: process.env.TWITTER_CLIENT_ID,
        clientSecret: process.env.TWITTER_CLIENT_SECRET
      })
    ],
    pages: {
      signIn: '/login'
    },
    logger: {
      error(code, metadata) {
        log.error(code, metadata)
      },
      warn(code) {
        log.warn(code)
      },
      debug(code, metadata) {
        log.debug(code, metadata)
      }
    },
    //...
  })
}