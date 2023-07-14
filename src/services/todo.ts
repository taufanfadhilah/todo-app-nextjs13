import BaseResponse from "@/types/response";
import { Todo } from "@prisma/client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { addTodo } from "@/store/todoSlice";

interface TodoResponse<T> extends BaseResponse {
  data: T;
}

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/todo",
  }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getAllTodo: builder.query<TodoResponse<Todo[]>, void>({
      query: () => ({
        url: "/",
      }),
      providesTags: ["todo"],
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        const data = (await queryFulfilled).data;
        data?.data.forEach((todo) => {
          dispatch(addTodo(todo));
        });
      },
    }),
    insertTodo: builder.mutation<TodoResponse<Todo>, Partial<Todo>>({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["todo"],
    }),
    checkTodo: builder.mutation<TodoResponse<Todo>, string>({
      query: (id) => ({
        url: `/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["todo"],
    }),
    removeTodo: builder.mutation<TodoResponse<Todo>, string>({
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
