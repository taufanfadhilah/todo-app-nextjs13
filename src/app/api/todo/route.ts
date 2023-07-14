import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  await prisma.$connect();
  const todos = await prisma.todo.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });

  return NextResponse.json({
    success: true,
    message: "Get all Todo",
    data: todos,
  });
}

export async function POST(req: NextRequest) {
  await prisma.$connect();
  const data = await req.json();

  const todo = await prisma.todo.create({
    data: {
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
