// las funciones deben tener el nombre del metodo HTTP GEt, POST, etc.

import UserModel from "@/app/helpers/bd/models/user";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';

export function GET() {

    //return new Response('Works');

    return NextResponse.json({
        data: [
            {
                id: 1,
                username: 'chiral888',
                message: 'Works👺',
                waja: process.env.MYSQL_USER
            }
        ]
    })
};

export async function POST(req, { params }) {

    const data = await req.json();
    data.ID = uuidv4();
    await UserModel.create(data)
        .then(data => {
            return NextResponse.json({
                status: 200,
                body: {
                    "message": "User created successful"
                }
            });
        })
        .catch(err => {
            console.log(`Error to create a new user -> ${err}`);
            return NextResponse.json({
                status: 500,
                body: {
                    "message": err,
                }
            });
        });
    return NextResponse.json({
        status: 200,
        body: {
            message: 'no entiendo nada xD'
        }
    })
};