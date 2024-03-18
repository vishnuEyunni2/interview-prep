import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';

function App() {

  const todos = useSelector({
    name: 'todos'
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <h3>{todos.length}</h3>
      </main>
    </div>
  );
}

export default App;
