import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, password } = (await req.json()) as {
      name: string;
      email: string;
      password: string;
    };

    const user = await prisma.user.create({
      data: {
        name,
        email: email.toLowerCase(),
        password,
      },
    });

    return NextResponse.json({
      success: true,
      message: "user registered successfully",
      data: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: error.message,
        data: null,
      }),
      { status: 500 }
    );
  }
}
