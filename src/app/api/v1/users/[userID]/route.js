import { NextResponse } from "next/server";

export function GET(req, { params }) {
    console.log(params)
    return NextResponse.json(params.userID);
}