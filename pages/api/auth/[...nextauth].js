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
    debug: true,
    events: {

    async signIn(message) {

      console.log('signIn', message) /* on successful sign in */

      if(message && message.user && message.user.email && message.user.emailVerified){

            // verified user login him

            if(!validator.isEmail(message.user.email)){
               return;
            }

            console.log('trying to login:' + message.user.email)

            var name = message.user.name ? message.user.name : message.user.email.split('@')[0]

            UserLogin(
                message.user.email,
                name,
                regservice.email /*social*/,
                message.user.image,
                regservice.email,
                null/*referedFrom*/,
            function(){

            });

      }


    },

    async createUser(message) {
      //console.log('createUser', message)
    },

    async signOut(message) { /* on signout */ },

    async updateUser(message) {
      //console.log('updateUser', message)
    },

    async linkAccount(message) { /* account (e.g. Twitter) linked to a user */ },
    async session(message) { /* session is active */ },
    async error(message) { /* error in authentication flow */ }
  },
    //...
  })
}