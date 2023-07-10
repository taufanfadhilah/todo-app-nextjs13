"use client";

import React, { useRef } from "react";

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

export default function TodoForm() {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      title: {
        value: string;
      };
      note: {
        value: string;
      };
    };
    const data = {
      title: target.title.value,
      note: target.note.value,
    };

    store.dispatch(
      addTodo({
        title: data.title,
        note: data.note,
        isDone: false,
      })
    );

    form.current?.reset();
  };

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Task Tracker</CardTitle>
        <CardDescription>
          Stay organized and boost your productivity with Task Tracker.{" "}
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit} ref={form}>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="note">Note</Label>
              <Input id="note" name="note" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="reset" variant="outline">
            Reset
          </Button>
          <Button type="submit">Add</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
