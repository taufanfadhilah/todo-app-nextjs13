import { GetStaticPropsContext } from "next";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT(req: Request, context: GetStaticPropsContext) {
  const id = context.params?.id as string;
  await prisma.$connect();
  const isCheckedTodo = await prisma.todo.findUnique({
    select: {
      isChecked: true,
    },
    where: {
      id,
    },
  });

  const todo = await prisma.todo.update({
    where: {
      id,
    },
    data: {
      isChecked: !isCheckedTodo?.isChecked,
    },
  });

  return NextResponse.json({
    success: true,
    message: "Todo updated successfully",
    data: todo,
  });
}

export async function DELETE(req: Request, context: GetStaticPropsContext) {
  const id = context.params?.id as string;
  await prisma.$connect();
  const todo = await prisma.todo.delete({
    where: {
      id,
    },
  });

  return NextResponse.json({
    success: true,
    message: "Todo removed successfully",
    data: todo,
  });
}
