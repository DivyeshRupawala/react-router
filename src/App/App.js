import React, { Component } from 'react';
import logo from './logo.svg';
import {Link} from 'react-router'

class App extends Component {
  render() {
    return (
      <div className="App">

        {/* Header Section*/}
        <header className="App-header">
          <Link to="/" >
            <img src={logo} className="App-logo" alt="logo" />
          </Link>

          <div className="menu-panel"> 
            <Link to='Home'>Home</Link>
            <Link to='About'>About</Link>
          </div>          
        </header>

        {/* Routing Section Changing every time*/}
        {this.props.children}

        {/* Footer Section*/}
        <footer>
          This is Footer Text. Only Center part will be changing from routing
        </footer>
      </div>
    );
  }
}

export default App;
