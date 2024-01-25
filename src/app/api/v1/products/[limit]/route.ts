import { ValidateJWT } from "@/app/helpers/JWT";
import ProductModel from "@/app/helpers/bd/models/product";
import { Product } from "@/app/helpers/interfaces/ProductInterface";
import { NextResponse } from "next/server";
import { INTEGER } from "sequelize";

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

  const limit: string = context.params.limit;
  const parseLimint: number = parseInt(limit);
  try {
    const Products: Product[] = await ProductModel.findAll({
      limit: parseLimint,
    });
    if (Products) {
      return NextResponse.json(
        {
          data: Products,
        },
        {
          status: 200,
        }
      );
    }
  } catch (err: any) {
    return NextResponse.json(
      {
        message: "Internal server error BD.",
        error: err,
      },
      {
        status: 500,
      }
    );
  }
  return NextResponse.json(
    {
      message: "Internal server error.",
    },
    { status: 300 }
  );
}
