import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';
export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [
     
    ]
  },
  reducers: {
    add: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.todos.push({name: action.payload.name, id: uuidv4()});
    },
    remove: (state, action) => {
      // Filter todo out of the list
      state.todos = state.todos.filter(x => x.id !== action.payload.id);
    },
    edit: (state, action) => {
      // replace todo with new todo
      state.todos = state.todos.map(x => x.id !== action.payload.todo.id ? x : action.payload.todo);
    }
  }
})


// Action creators are generated for each case reducer function
export const { add, remove, edit } = todoSlice.actions

export default todoSlice.reducer