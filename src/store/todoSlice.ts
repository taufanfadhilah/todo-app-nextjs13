import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Todo from "@/types/todo";

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
              is_checked: !_state.is_checked,
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
