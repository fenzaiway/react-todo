import React, { Component } from 'react';

import {Input, Button} from 'element-react'

import './todo.less'
class TodoApp extends Component {

    constructor(props){
        super(props)

        this.state = {
            val:'xxxx',
            todos : [
                {
                    name: '6666',
                    status: 1
                }
            ]
        }
    }

    addItem = (val)=>{
        
        let todos = this.state.todos
        todos.push({
            name: val,
            status: 1
        })

        
    }

    valChange = (val)=>{
        this.setState({val})
    }

    render(){
        return (
            <div className="todo">
                <Input onIconClick={this.addItem} onChange={this.valChange} placeholder="请输入内容" icon="plus" />

                <ul className="todo-list">
                    {
                        this.state.todos.map((item, index)=>{
                            return (
                                <li key={index}>
                                    {item.name} <Button type="primary" icon="delete"></Button>
                                </li>
                            )
                        })
                    }
                    
                </ul>


            </div>
        )
    }
}

export default TodoApp