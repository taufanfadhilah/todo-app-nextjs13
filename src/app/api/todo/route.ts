import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    const todos = await prisma.todo.findMany({
      where: {
        userId: session?.user.id,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    return NextResponse.json({
      success: true,
      message: "Get all Todo",
      data: todos,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
        data: error,
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const data = await req.json();

  const todo = await prisma.todo.create({
    data: {
      userId: session?.user.id,
      title: data.title,
      note: data.note,
    },
  });

  return NextResponse.json({
    success: true,
    message: "Todo inserted successfully",
    data: todo,
  });
}
