import React, { Component } from 'react';
import logo from './logo.svg';
import 'element-theme-default'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import {Provider} from 'react-redux'

import {Menu} from 'element-react'

import TodoApp from './todo/index'
import ToolsApp from './tools/index'

import createStore from './redux/store/index'
import Constants from './lib/constants'
import {ADD_BMOB_OBJ, ADD_BMOB_QUERY} from './redux/actions/bmob'


export const store  = createStore()

class App extends Component {


  componentDidMount(){
    window.Bmob.initialize("fdec55ff247d5528e9a596e3c48437a3", "c4f36e22e396d09628970f96a02ff2af")
    // this.addUser()
    this.initBmob()
  }

  initBmob(){
    let User = window.Bmob.Object.extend('_User')
    let TodoList = window.Bmob.Object.extend('todoList')
    let user = new User()
    let todoList = new TodoList()

    let userQuery = new window.Bmob.Query(User)
    let todoListQuery = new window.Bmob.Query(TodoList)

    store.dispatch({
      type: ADD_BMOB_OBJ,
      obj:{
        key:Constants.bmob.USER,
        value: user
      }
    })
    store.dispatch({
      type: ADD_BMOB_OBJ,
      obj:{
        key:Constants.bmob.TODO,
        value: todoList
      }
    })

    store.dispatch({
      type: ADD_BMOB_QUERY,
      obj:{
        key:Constants.bmob.USER,
        value: userQuery
      }
    })

    store.dispatch({
      type: ADD_BMOB_QUERY,
      obj:{
        key:Constants.bmob.TODO,
        value: todoListQuery
      }
    })

  }

  onSelect(index){
    console.log(this.props);
  }

  addUser(){

    let User = window.Bmob.Object.extend('_User')
    // let userObj = new User()
    // userObj.set('username','nicup')
    // userObj.set('password','nicup')
    // console.log(userObj);
    // userObj.save(null, {
    //   success:resp=>{
    //     console.log(resp);
    //   },
    //   error: err=>{
    //     console.error(err);
    //   }
    // })

    let query = new window.Bmob.Query(User)


    query.find({
      success: resp=>{
        console.log(resp)
      },
      error: err=>{
        console.error(err)
      }
    })
  }

  render() {
    
    const menuSelect = (index)=>{
      
    }

    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <div>
              <Menu theme="dark" defaultActive="1" className="el-menu-demo" mode="horizontal" onSelect={menuSelect}>
                <Menu.Item index="login">登录</Menu.Item>
                <Menu.Item index="register">注册</Menu.Item>
                <Menu.Item index="todo">
                  创建TODO
                </Menu.Item>
              </Menu>
              <Route path="/" />
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
