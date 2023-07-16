import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import { todoApi } from "@/services/todo";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { authApi } from "@/services/auth";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    [todoApi.reducerPath]: todoApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([todoApi.middleware, authApi.middleware]),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
