import React from "react";
import { Separator } from "@/components/ui/separator";
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";

function Home() {
  return (
    <div>
      <p className="title">Todo Apps by Nextjs 13</p>
      <Separator className="my-4" />
      <div className="flex flex-row gap-6">
        <TodoForm />
        <div className="flex-1 flex flex-col gap-4 h-[700px] overflow-y-scroll">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val) => (
            <TodoList key={val} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
