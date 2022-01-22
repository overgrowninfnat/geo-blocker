import { NextRequest, NextResponse } from "next/server";

const BLOCKED_COUNTRY = 'IT'

export default function middleware(req: NextRequest) {
    const country = req.geo?.country

    if(country === BLOCKED_COUNTRY) {
        return NextResponse.redirect('/not-legal')
    }
}