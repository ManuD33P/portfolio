import NextAuth from 'next-auth/next';
import CredentialsProvider  from "next-auth/providers/credentials";

export const authOptions = {
    providers:[
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                username:{ label:"username", type: "text", placeholder:"jsmith"},
                password:{label:"password", type:"password"}
            },
           async authorize(credentials,req){
                if(credentials.username !== process.env.USER_NAME) throw TypeError('Invalid username');
                if(credentials.password !== process.env.PASSWORD) throw TypeError('Invalid password');
                return {name:credentials.username}               
            }
        })
    ],
    callbacks:{
        async signIn({user, account, profile, email, credentials}){
            console.log(account)
            if (account?.provider === 'credentials') {
                return  true
            } 
        }
    },

}


const handler = NextAuth(authOptions);


export { handler as GET, handler as POST};
