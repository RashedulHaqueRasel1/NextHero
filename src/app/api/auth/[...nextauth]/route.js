

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth"

console.log("test auth secret", process.env.NEXT_PUBLIC_AUTH_SECRET)

export const authOptions = {
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    required: true,
                    placeholder: "Email"
                },
                password: {
                    label: "password",
                    type: "password",
                    required: true,
                    placeholder: "password"
                },
            },

            async authorize(credentials) {
                if (!credentials) {
                    return null
                }

                if (email) {
                    const currentUser = users.find((user) => user.email === email)
                    console.log("current user nai", currentUser)
                    if (currentUser) {
                        if (currentUser.password === password) {
                            return currentUser;
                        }
                    }
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
        })
    ],
}

const handler = NextAuth(authOptions)


const users = [
    {
        id: 1,
        name: "rasel",
        email: "rasel@gmail.com",
        type: "admin",
        password: "password"
    }
]

export { handler as GET, handler as POST }