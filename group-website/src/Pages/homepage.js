import React from 'react';
import logo from '../frank.png';

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Frank Selingskil is a thinker and a thonker
        </p>
        <a
          className="App-link"
          href="/FrankPage"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frank's Portion
        </a>
        <a
          className="App-link"
          href="/LukePage"
          target="_blank"
          rel="noopener noreferrer"
        >
          Luke's Portion
        </a>
        <a
          className="App-link"
          href="/PeterPage"
          target="_blank"
          rel="noopener noreferrer"
        >
          Peter's Portion
        </a>
      </header>
    </div>
  );
}

export default HomePage