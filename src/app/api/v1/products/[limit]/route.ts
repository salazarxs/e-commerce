import { ValidateJWT } from "@/app/helpers/JWT";
import ProductModel from "@/app/helpers/bd/models/product";
import { Product } from "@/app/helpers/interfaces/ProductInterface";
import { collectGenerateParams } from "next/dist/build/utils";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: Request, context: { params }) {
  const jwt: string = req.headers.get("JWT");
  const validateJWT: boolean = await ValidateJWT(jwt);

  if (!validateJWT) {
    return NextResponse.json({
      status: 401,
      body: {
        message: "Unauthorized",
      },
    });
  }

  const limit: number = context.params.limit;
  try {
    const Products: Product[] = await ProductModel.findAll({
      limit: limit,
    });
    if (Products) {
      return NextResponse.json({
        status: 200,
        body: {
          data: Products,
        },
      });
    }
  } catch (err: any) {
    return NextResponse.json({
      status: 500,
      body: {
        message: "Internal server error BD.",
        error: err,
      },
    });
  }
  return NextResponse.json({
    status: 300,
    body: {
      message: "Internal server error.",
    },
  });
}
