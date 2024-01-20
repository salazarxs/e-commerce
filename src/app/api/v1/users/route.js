// las funciones deben tener el nombre del metodo HTTP GEt, POST, etc.

import { ValidateJWT } from "@/app/helpers/JWT";
import UserModel from "@/app/helpers/bd/models/user";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';

export function GET(req) {

    //return new Response('Works');
    const jwt = headers().get('JWT')
    const validateJWT = ValidateJWT(jwt);

    if (validateJWT) {
        console.log('')
    }


    return NextResponse.json({
        data: [
            {
                id: 1,
                username: 'chiral888',
                message: 'Works👺',
                jwt: jwt
            }
        ]
    })
};

export async function POST(req, { params }) {
    const jwt = headers().get('JWT')
    const validateJWT = ValidateJWT(jwt);

    if (validateJWT) {
        const data = await req.json();
        data.ID = uuidv4();

        const newUser = await UserModel.create(data);

        if (newUser) {
            return NextResponse.json({
                status: 200,
                body: {
                    "message": "User created successful"
                }
            });
        } else {
            return NextResponse.json({
                status: 500,
                body: {
                    "message": err,
                }
            });
        };
    } else {
        return NextResponse.json({
            status: 403,
            body: {
                message: 'Unauthorized'
            }
        });
    };
};