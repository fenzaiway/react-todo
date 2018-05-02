import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'element-theme-default'


import TodoApp from './todo/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Todos</h1>
        </header>
        <TodoApp></TodoApp>
      </div>
    );
  }
}

export default App;
