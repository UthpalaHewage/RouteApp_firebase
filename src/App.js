import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to React Router Class
          </p>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React-Router
          </a>
        </header>
        <ul>
          <li><Link to="/One">One</Link></li>
          <li><Link to="/Two">Two</Link></li>
          <li><Link to="/Three">Three</Link></li>
          <li><Link to="/Four">Four</Link></li>
        </ul>
      </div>
    );
  }
}

export default App;
