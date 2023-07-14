import BaseResponse from "@/types/response";
import { Todo } from "@prisma/client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface TodosResponse extends BaseResponse {
  data: Todo[];
}

interface TodoResponse extends BaseResponse {
  data: Todo;
}

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/todo",
  }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getAllTodo: builder.query<TodosResponse, void>({
      query: () => "/",
      providesTags: ["todo"],
    }),
    insertTodo: builder.mutation<TodoResponse, Partial<Todo>>({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["todo"],
    }),
    checkTodo: builder.mutation<TodoResponse, string>({
      query: (id) => ({
        url: `/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["todo"],
    }),
    removeTodo: builder.mutation<TodoResponse, string>({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const {
  useGetAllTodoQuery,
  useInsertTodoMutation,
  useCheckTodoMutation,
  useRemoveTodoMutation,
} = todoApi;
