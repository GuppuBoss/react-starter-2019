import React from 'react';
import { Link } from "react-router-dom";
import './App.scss';
import Routes from '../../routes';
function App() {
  return (
      <div>
          <header>
              <Link to="/">Home</Link>
              <Link to="/about-us">About</Link>
          </header>

          <main>
              <Routes/>
          </main>
      </div>
  );
}

export default App;
