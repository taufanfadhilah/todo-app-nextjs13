import React from "react";

// components
import { Separator } from "@/components/ui/separator";
import TodoForm from "@/components/TodoForm";
import TodoLists from "@/components/TodoLists";

function Home() {
  return (
    <div>
      <p className="title">Todo Apps by Nextjs 13</p>
      <Separator className="my-4" />
      <div className="flex flex-row gap-6">
        <TodoForm />
        <div className="flex-1">
          <TodoLists />
        </div>
      </div>
    </div>
  );
}

export default Home;
