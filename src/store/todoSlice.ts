import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Todo {
  title: string;
  note: string;
  isDone: boolean;
}

const initialState: Todo[] = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    updateCheck: (state, action: PayloadAction<Pick<Todo, "title">>) => {
      return state.map((_state) =>
        _state.title === action.payload.title
          ? {
              ..._state,
              isDone: !_state.isDone,
            }
          : _state
      );
    },
    removeTodo: (state, action: PayloadAction<Pick<Todo, "title">>) => {
      return state.filter((_state) => _state.title !== action.payload.title);
    },
  },
});

export const { addTodo, updateCheck, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
