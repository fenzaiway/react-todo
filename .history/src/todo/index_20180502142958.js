import React, { Component } from 'react';

import {Input} from 'element-react'

import './todo.less'
class TodoApp extends Component {

    render(){
        return (
            <div className="todo">
                <Input placeholder="请输入内容" icon="plus" />

                <ul>
                    <li>
                        xxx内容 
                    </li>
                </ul>


            </div>
        )
    }
}

export default TodoApp