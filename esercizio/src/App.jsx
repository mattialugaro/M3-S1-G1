import logo from './logo.svg';
import './App.css';
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from './components/ImageComponent';

const App = () => {
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

        <ButtonComponent
        id="bottone1"
        style={{ marginTop: "50px"}}
        content="questo è un bottone"
        />

        <ImageComponent 
        src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png"
        alt="logo react"
        />

        <ButtonComponent
        id="bottone2"
        style={{ marginTop: "30px"}}
        content="questo è il secondo bottone "
        />
      </header>
    </div>
  );
}

export default App;
