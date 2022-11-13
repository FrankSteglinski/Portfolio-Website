import logo from './frank.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Frank Selingskil is a thinker and a thonker
        </p>
        <a
          className="App-link"
          href="https://www.bing.com/images/search?q=Trump%20PNG&FORM=IQFRBA&id=94DE79DEC195CF364C71E3B94843F9D1C6106933"
          target="_blank"
          rel="noopener noreferrer"
        >
          Anyway here's the donald
        </a>
      </header>
    </div>
  );
}

export default App;
