import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'element-theme-default'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import {Provider} from 'react-redux'


import TodoApp from './todo/index'
import ToolsApp from './tools/index'

import createStore from './store/index'

const store  = createStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">React Todos</h1>
          </header>
          <Router>
            <div>
              <ul>
                <li>
                  <Link to="/todo">Todo</Link>
                </li>
                <li>
                  <Link to="/tools">Tools</Link>
                </li>
              </ul>
              <Route path="/todo" component={TodoApp} />
              <Route path="/tools" component={ToolsApp} />
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
