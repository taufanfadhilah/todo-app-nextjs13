import React from "react";
import { cn } from "@/lib/utils";

// components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Check, X } from "lucide-react";
import ModalRemoveTodo from "./ModalRemoveTodo";

// stores
import { Todo } from "@prisma/client";
import { useCheckTodoMutation } from "@/services/todo";

interface TodoListProps
  extends Pick<Todo, "id" | "title" | "note" | "isChecked"> {}

function TodoList({ id, title, note, isChecked }: TodoListProps) {
  const [checkTodo] = useCheckTodoMutation();

  const handleUpdateCheck = async () => {
    checkTodo(id);
  };

  return (
    <Card className="">
      <CardHeader>
        <CardTitle
          className={cn("flex justify-between", {
            "line-through": isChecked,
          })}
        >
          #{title}
          <div className="flex gap-4">
            {isChecked ? (
              <Button onClick={handleUpdateCheck}>
                <X />
              </Button>
            ) : (
              <Button variant={"outline"} onClick={handleUpdateCheck}>
                <Check />
              </Button>
            )}
            <ModalRemoveTodo id={id} title={title} />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{note}</CardDescription>
      </CardContent>
    </Card>
  );
}

export default TodoList;
