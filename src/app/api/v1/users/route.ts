// las funciones deben tener el nombre del metodo HTTP GEt, POST, etc.

import { ValidateJWT } from "@/app/helpers/JWT";
import UserModel from "@/app/helpers/bd/models/user";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

type JwtSctruct = `${string}.${string}.${string}`;

export async function POST(req: Request, context: { params }) {
  const jwt: string = headers().get("JWT");
  const validateJWT: boolean = await ValidateJWT(jwt);

  if (validateJWT) {
    type User = {
      ID: string;
      productName: string;
      categoryID: number;
      productDescription: string;
      price: number;
      rating: number;
      productImage?: string;
    };

    const data: User = await req.json();
    data.ID = uuidv4();

    const newUser = await UserModel.create(data);

    if (newUser) {
      return NextResponse.json(
        {
          body: {
            message: "User created successful",
          },
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          body: {
            message: "User not created.",
          },
        },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json(
      {
        body: {
          message: "Unauthorized",
        },
      },
      { status: 403 }
    );
  }
}
