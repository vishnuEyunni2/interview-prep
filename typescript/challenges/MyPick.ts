/*
  4 - Pick
  -------
  by Anthony Fu (@antfu) #easy #union #built-in

  ### Question

  Implement the built-in `Pick<T, K>` generic without using it.

  Constructs a type by picking the set of properties `K` from `T`

  For example:

  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  type TodoPreview = MyPick<Todo, 'title' | 'completed'>

  const todo: TodoPreview = {
      title: 'Clean room',
      completed: false,
  }
  ```

  **/

import { Equal, Expect } from "../utils/index";

// Solution
type MyPick<T, K> = {
  [key in keyof T & K]: T[key];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
  completed: boolean;
}

interface Expected2 {
  title: string;
}

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, "title" | "completed">>>,
  Expect<Equal<Expected2, MyPick<Todo, "title">>>
]