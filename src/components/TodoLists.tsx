"use client";

import React from "react";

// components
import TodoList from "./TodoList";

// store
import { Todo } from "@prisma/client";
import { useGetAllTodoQuery } from "@/services/todo";

function TodoLists() {
  const { data } = useGetAllTodoQuery();

  return (
    <div className="flex flex-col gap-4 h-[700px] overflow-y-scroll">
      {data?.data?.length ? (
        data.data.map((todo: Todo) => (
          <TodoList
            id={todo.id}
            title={todo.title}
            note={todo.note}
            isChecked={todo.isChecked}
            key={todo.title}
          />
        ))
      ) : (
        <p className="text-center">No todo have been created</p>
      )}
    </div>
  );
}

export default TodoLists;
