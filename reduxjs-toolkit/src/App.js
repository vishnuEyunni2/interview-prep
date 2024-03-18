import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const todos = useSelector((state) => state?.todos)

  function addTodo(e) {
    e.preventDefault()
    console.log(e);
  }

  return (
    <div className="App">
      <main>
        <h3>Todo Count: {todos?.length}</h3>
      </main>
      <section>
        <form id='form'>
          <input type="text" />
          <button onClick={addTodo}>Add todo item</button>
        </form>
      </section>
      <section className='todo-list'>
        <ul>
          {todos.length > 0 && todos.forEach((item, x) => {
            return (
              <>
                <li key={item.id}>{item.text}</li>
              </>
            )
          })}
        </ul>
      </section>
    </div>
  );
}

export default App;
