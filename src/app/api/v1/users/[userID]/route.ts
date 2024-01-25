import { ValidateJWT } from "@/app/helpers/JWT";
import UserModel from "@/app/helpers/bd/models/user";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: Request, context: { params }) {
  //return new Response('Works');
  const jwt: string = headers().get("JWT");
  const validateJWT: boolean = await ValidateJWT(jwt);

  //   type User = {
  //     ID: string;
  //     productName: string;
  //     categoryID: number;
  //     productDescription: string;
  //     price: number;
  //     rating: number;
  //     productImage?: string;
  //   };

  // type User = {
  //     user:UserModel
  // }
  if (!validateJWT) {
    return NextResponse.json(
      {
        body: {
          message: "Unauthorized",
          jwt: validateJWT,
        },
      },
      { status: 401 }
    );
  }

  const userID: string = await context.params.userID;
  try {
    const user = await UserModel.findOne({
      where: {
        ID: userID,
      },
    });
    if (user) {
      return NextResponse.json(
        {
          user: user,
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json({
        message: "Not found",
      });
    }
  } catch (err) {
    return NextResponse.json({
      message: `Error to find a user with userID: ${userID}`,
      error: err,
    });
  }
}
