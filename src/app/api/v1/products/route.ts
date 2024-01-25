import { ValidateJWT } from "@/app/helpers/JWT";
import ProductModel from "@/app/helpers/bd/models/product";
import { Product } from "@/app/helpers/interfaces/ProductInterface";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const jwt: string = headers().get("JWT");
  const validateJWT: boolean = await ValidateJWT(jwt);

  if (!validateJWT) {
    return NextResponse.json(
      {
        message: "Unauthorized",
      },
      { status: 401 }
    );
  }
  try {
    const products: Product[] = await ProductModel.findAll();

    if (products.length != 0) {
      return NextResponse.json(
        {
          message: products,
        },
        {
          status: 200,
        }
      );
    }
  } catch (err: any) {
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(req: Request) {
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

  const data: Product = await req.json();
  try {
    const product: Product = await ProductModel.create(data);
    if (!product) {
      return NextResponse.json({
        status: 500,
        body: {
          message: "Error to create a new product.",
        },
      });
    }

    return NextResponse.json({
      status: 200,
      body: {
        messsage: "Product created successful",
      },
    });
  } catch (err: any) {
    return NextResponse.json(
      {
        error: err,
      },
      { status: 500 }
    );
  }
}
