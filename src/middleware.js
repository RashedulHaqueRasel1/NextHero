import { NextResponse } from "next/server"

// const user = true ;
const user = false ;

const cook = "hero"

export const middleware = (request) =>{
    // return NextResponse.redirect(new URL('/dashboard', request.url))

    let cookie = request.cookies.get('token')

    if (!cookie || cookie.value !== cook) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    // if (!user) {
    //     return NextResponse.redirect(new URL('/login', request.url))
    // }
    // return NextResponse.rewrite(new URL('/dashboard', request.url))
    return NextResponse.next()
} 

export const config = {
    matcher: '/dashboard'
}