import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { todoAdded } from './features/todos/todoSlice';

function App() {
  const todos = useSelector((state) => state?.todos)
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  function addTodo(e) {
    e.preventDefault();
    if (title) {
      dispatch(
        todoAdded({
          id: nanoid(16),
          text: title
        })
      );
    }
    setTitle('')
  }

  return (
    <div className="App">
      <main>
        <h3>Todo Count: {todos?.length}</h3>
      </main>
      <section>
        <form id='form'>
          <div>
            <label htmlFor="title">Title: </label>
            <input id='title' onChange={(e) => {
              setTitle(e.target.value)
            }} type="text" value={title} />
          </div>
          <button onClick={(e) => addTodo(e)}>Add todo item</button>
        </form>
      </section>
      <section className='todo-list'>
        <>
          {todos.map((item, x) => (
            <div key={item.id}>
              <p key={item.id}>{item.text}</p>
            </div>
          )
          )}
        </>
      </section>
    </div>
  );
}

export default App;
