"use client";

import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";

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
import { addTodo } from "@/store/todoSlice";

// store
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
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<TodoForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<TodoForm> = (data) => {
    store.dispatch(
      addTodo({
        title: data.title,
        note: data.note,
        isDone: false,
      })
    );
    reset();
  };

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Task Tracker</CardTitle>
        <CardDescription>
          Stay organized and boost your productivity with Task Tracker.{" "}
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
