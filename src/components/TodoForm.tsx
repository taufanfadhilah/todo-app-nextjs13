"use client";

import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSession } from "next-auth/react";

// components
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// store
import { useInsertTodoMutation } from "@/services/todo";
import { store } from "@/store";

type TodoForm = {
  title: string;
  note: string;
};

const schema = yup
  .object({
    title: yup.string().required(),
    note: yup.string().required(),
  })
  .required();

export default function TodoForm() {
  const [todoLength, setTodoLength] = useState(0);

  const { data: session } = useSession();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<TodoForm>({
    resolver: yupResolver(schema),
  });

  const [insertTodo] = useInsertTodoMutation();

  store.subscribe(() => {
    setTodoLength(() => store.getState().todo.length);
  });

  const onSubmit: SubmitHandler<TodoForm> = async (data) => {
    insertTodo(data);
    reset();
  };

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Task Tracker</CardTitle>
        <CardDescription>
          Stay organized and boost your productivity with Task Tracker. <br />
          Todo count(s): {todoLength}
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="title">Title</Label>
              <Input {...register("title")} error={errors.title?.message} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="note">Note</Label>
              <Input {...register("note")} error={errors.note?.message} />
            </div>
          </div>
          <small>User: {session?.user?.name}</small>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => reset()}>
            Reset
          </Button>
          <Button type="submit">Add</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
