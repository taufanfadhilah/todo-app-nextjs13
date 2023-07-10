"use client";

import React, { useState } from "react";

// components
import TodoList from "./TodoList";

// store
import { store } from "@/store";

function TodoLists() {
  const [todoList, setTodoList] = useState(store.getState().todo);

  store.subscribe(() => {
    setTodoList(store.getState().todo);
  });

  return (
    <div className="flex flex-col gap-4 h-[700px] overflow-y-scroll">
      {todoList?.length ? (
        todoList.map((todo) => (
          <TodoList
            title={todo.title}
            note={todo.note}
            isDone={todo.isDone}
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
