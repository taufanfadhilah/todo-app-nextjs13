import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Check, Trash2, X } from "lucide-react";
import ModalRemoveTodo from "./ModalRemoveTodo";

function TodoList() {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="flex justify-between">
          Title
          <div className="flex gap-4">
            <Button variant={"outline"}>
              <Check />
            </Button>
            <Button>
              <X />
            </Button>
            <ModalRemoveTodo />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique,
          provident! Ipsa laborum praesentium facere veniam pariatur iure
          inventore! Quod minus praesentium accusantium numquam sit labore
          veniam eligendi voluptatem, quos obcaecati!
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export default TodoList;
