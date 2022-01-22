import { NextRequest, NextResponse } from "next/server";

const BLOCKED_COUNTRY = 'IT'

export default function middleware(req: NextRequest) {
    const country = req.geo?.country

    if(req.nextUrl.pathname === '/not-legal') {
        return NextResponse.next()
    }

    if(country === BLOCKED_COUNTRY) {
        return NextResponse.redirect('/not-legal')
    }
}