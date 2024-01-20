// las funciones deben tener el nombre del metodo HTTP GEt, POST, etc.

import { NextResponse } from "next/server";

export function GET() {

    //return new Response('Works');

    return NextResponse.json({
        data: [
            {
                id: 1,
                username: 'chiral888',
                message: 'Works👺'
            }
        ]
    })
};

export function POST() {
    return NextResponse.json({
        "message": 'oli'
    })
}