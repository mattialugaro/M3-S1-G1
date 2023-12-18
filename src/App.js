import logo from './logo.svg';
import './App.css';

// questo file contiene il nostro prio componente react, il principale. App.js
// un componente React, nella sua forma piu' basilare, non e' altro che una semplicissima funzione.... che ritorna dell JSX!

function App() {
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
    </div>
  );
}

export default App;
