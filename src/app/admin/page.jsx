'use client'
import {useSession } from 'next-auth/react'

 export default function Admin(){
    const {data: session, status:state} = useSession()
    console.log(session,state)
    if(state === 'authenticated') {
        return (
            <div>
                <h1>Admin Page</h1>
                <p>Protected Page, only accessible by signed in users</p>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Access Denied</h1>
                <p>You must be signed in to view this page</p>
            </div>
        )
    }
}


