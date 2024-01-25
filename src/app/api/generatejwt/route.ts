import { GenerateJWT } from "@/app/helpers/JWT";
import { NextResponse } from "next/server";

export async function GET() {
  const generateJWT: Promise<string> = GenerateJWT("test");
  return NextResponse.json({
    message: await generateJWT,
  });
}
