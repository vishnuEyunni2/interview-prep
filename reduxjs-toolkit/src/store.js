import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './features/todos/todoSlice'
import postsReducer from './features/posts/postSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    posts: postsReducer
  }
})
