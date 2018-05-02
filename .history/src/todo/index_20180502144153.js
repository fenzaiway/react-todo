import React, { Component } from 'react';

import {Input, Button} from 'element-react'

import './todo.less'
class TodoApp extends Component {

    constructor(props){
        super(props)

        this.state = {
            todos : [
                {
                    name: '6666',
                    status: 1
                }
            ]
        }
    }

    render(){
        return (
            <div className="todo">
                <Input placeholder="请输入内容" icon="plus" />

                <ul className="todo-list">
                    
                    <li >
                        xxx内容 <Button type="primary" icon="delete"></Button>
                    </li>
                </ul>


            </div>
        )
    }
}

export default TodoApp