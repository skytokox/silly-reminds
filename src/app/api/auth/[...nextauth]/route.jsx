import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { sql } from "@vercel/postgres";
const bcrypt = require('bcrypt');

export const authOptions = {
    providers: [
        CredentialsProvider({
            type: "credentials",
            credentials: {
                username: {
                    label: 'Username',
                    type: 'text',
                    placeholder: 'username'
                },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, req) {
                const { username, password } = credentials;
                let user = {};

                const data = await sql`SELECT user_id, username, email, password FROM users WHERE username = ${username}`;
                const { rows } = data;
                const user_fetched = {
                    'user_id': rows[0].user_id,
                    'username': rows[0].username,
                    'email': rows[0].email, 
                    'password': rows[0].password
                };

                const isPassValid = await bcrypt.compare(password, user_fetched.password);
                
                if(isPassValid) {
                    user = {
                        'id': user_fetched.user_id,
                        'name': user_fetched.username,
                        'email': user_fetched.email
                    };
                }else {
                    user = null;
                }
                
                console.log(user_fetched);
                console.log(isPassValid);
                // if (username != "skaj" && password != '1234') {
                //     return null;
                // }else if(username == "skaj" && password == '1234') {
                //     user = { id: 1, name: 'skaj', email: 'skaj@gmail.com' }
                // }else if(username == "bruno" && password == '1234') {
                //     user = { id: 2, name: 'bruno', email: 'siur@gmail.com' }
                // }
                
                return user;

            }
        })
    ],
    session: { strategy: 'jwt' },
    secret: process.env.AUTH_SECRET,
    callbacks: {
        async redirect({url, baseUrl}) {
            // console.log('url', url);
            // console.log('baseUrl', baseUrl);
            
            return url.startsWith(baseUrl) ? url : baseUrl;
          },
        async jwt({ token, account, profile }) {
            if (account) {
                // token.accessToken = account.access_token
                // token.id = profile.id
              }
            return token;
        },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token and user id from a provider.
            session.accessToken = token.accessToken
            session.user.id = token.sub;

            return session
          }
    }
}

const handler = NextAuth(authOptions);


export { handler as GET, handler as POST }

