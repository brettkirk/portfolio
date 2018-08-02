import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TopBar from './containers/TopBar';
import Content from './containers/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header-overlay" />
        <header className="App-header">
          <h1 className="App-title">Welcome to Brett's Portfolio</h1>
        </header>
        <TopBar />
        <Content type="aboutMe" />
        <Content type="tech" />
        <Content type="projects" />
      </div>
    );
  }
}

export default App;
