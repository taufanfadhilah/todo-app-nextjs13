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
import { store } from "@/store";
import { Todo, updateCheck } from "@/store/todoSlice";

interface TodoListProps extends Todo {}

function TodoList({ title, note, isDone }: TodoListProps) {
  const handleUpdateCheck = () => {
    store.dispatch(
      updateCheck({
        title,
      })
    );
  };

  return (
    <Card className="">
      <CardHeader>
        <CardTitle
          className={cn("flex justify-between", {
            "line-through": isDone,
          })}
        >
          #{title}
          <div className="flex gap-4">
            {isDone ? (
              <Button onClick={handleUpdateCheck}>
                <X />
              </Button>
            ) : (
              <Button variant={"outline"} onClick={handleUpdateCheck}>
                <Check />
              </Button>
            )}
            <ModalRemoveTodo title={title} />
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
