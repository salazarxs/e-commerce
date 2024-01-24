import { ValidateJWT } from "@/app/helpers/JWT";
import ProductModel from "@/app/helpers/bd/models/product";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req, params) {
    const jwt = req.headers.get("JWT");
    const validateJWT = await ValidateJWT(jwt);

    if (!validateJWT) {
        return NextResponse.json({
            status: 401,
            body: {
                message: 'Unauthorized'
            }
        });
    };

    const limit = params.limit;
    try {
        const Products = await ProductModel.findAll({
            limit: limit
        });
        if (Products) {
            return NextResponse.json({
                status: 200,
                body: {
                    data: Products
                }
            })
        }
    } catch (err) {
        return NextResponse.json({
            status: 500,
            body: {
                message: 'Internal server error BD.',
                error: err
            }
        });
    };
    return NextResponse.json({
        status: 300,
        body: {
            message: 'Internal server error.'
        }
    });
};